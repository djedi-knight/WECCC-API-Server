#!/usr/bin/perl

# Process WECCC spreadsheet data and export JSON
# Assumes rows are in page and section order given in sample SS

use Text::CSV;

my $filename = "import_data.csv";
my $output_dir = "output";
my $output_filename = "/communityTapestry.js";
my @rows; # input document rows

my $csv = Text::CSV->new ({binary=>1})
  or die "Cannot use CSV: ".Text::CSV->error_diag();

open my $fh, "<:encoding(utf8)", "$filename" or die "$filename: $!";


# get column headers out of our way
my $firstRow = $csv->getline($fh);

# Data structure
#
# Index Data
#   0   Page
#   1   Title
#   2   Elements
#   3   Subgroup
#   4   Subgroup Title
#   5   Key
#   6   Title
#   7   Score
#   8   Trend

#  Each different element type will require different handling

my @lastrow;
my $output = "";

while (my $row_r = $csv->getline($fh)){

  my @row = @{$row_r};
  my $page = $row[0];

  next if ($page ne "community-tapestry-page");

  if ($output eq "") { # new page data
    $output = $output . processPageStart(\@row);
  }
  if ($row[2] eq "pieCharts") {
    my $pieChartJSON = processPieChart(\@row,\@lastrow);
    $output = $output . $pieChartJSON;
  }
  if ($row[2] eq "pieChartDetail") {
    my $pieChartDetailJSON = processPieChartDetail(\@row,\@lastrow);
    $output = $output . $pieChartDetailJSON;
  }
  if ($row[2] eq "scoreCards"){
    my $scorecardJSON = processScoreCard(\@row,\@lastrow);
    $output = $output . $scorecardJSON;
  }

  @lastrow = @row; # previous row's data - sometimes needed for context
}

# Close off the page

$output = $output . processPageEnd();

# Close CSV input file

$csv->eof or $csv->error_diag();
close $fh;

# Write output to file

mkdir ($output_dir) unless (-d $output_dir);
open (my $output_fh, '>', $output_dir . $output_filename);
print $output_fh $output;
close $output_hf;

# Functions

sub processPageStart {
  my @row= @{$_[0]};

  my $page_output = <<"END_OUTPUT";
/* global exports  */
/* global require  */

require('../../../models/page');

exports.Page = [{
  key: '$row[0]',
  title: '$row[1]',
END_OUTPUT

  return $page_output;
}

sub processPageEnd {
  my $page_output = <<"END_OUTPUT";
        }]
      }
    }]
  }]
}];
END_OUTPUT

  return $page_output;
}

sub processPieChart {
  my @row= @{$_[0]};
  my @lastrow = @{$_[1]};
  my $piechart_output;

  if ($lastrow[2] ne "pieCharts" && $lastrow[2] ne "pieChartDetail") {  # add preamble for the first pie chart

    $piechart_output = <<"END_OUTPUT";
  pieCharts: [{
    key: '$row[3]',
    data: [{
END_OUTPUT

  } else { # close off pie chart section and start a new one

    if ($lastrow[2] ne "pieCharts") {

      $piechart_output = $piechart_output . <<"END_OUTPUT";
        }]
      }
    }, {
END_OUTPUT

    } else {

      $piechart_output = $piechart_output . <<"END_OUTPUT";
      details: {
        key: 'pie-chart-details-key',
        data: []
      }
    }, {
END_OUTPUT

    }
  }

  $piechart_output = $piechart_output .  <<"END_OUTPUT";
      x: '$row[6]',
      y: $row[7],
END_OUTPUT

  return $piechart_output;
}

sub processPieChartDetail {
  my @row= @{$_[0]};
  my @lastrow = @{$_[1]};
  my $piechartdetail_output;

  if ($lastrow[2] eq "pieCharts") { # open detail section

    $piechartdetail_output = $piechartdetail_output . <<"END_OUTPUT";
      details: {
        key: '$row[5]',
        data: [{
END_OUTPUT

  } else {

    if ($lastrow[6] ne $row[6]) { # close off detail entry and open next one

    $piechartdetail_output = $piechartdetail_output . <<"END_OUTPUT";
        }, {
END_OUTPUT

    }
  }

  $piechartdetail_output = $piechartdetail_output . <<"END_OUTPUT";
          indicator: '$row[6]',
          values: ['$row[7]']
END_OUTPUT

}
