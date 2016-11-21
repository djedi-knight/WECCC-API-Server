#!/usr/bin/perl

# Process WECCC spreadsheet data and export JSON
# Assumes rows are in page and section order given in sample SS

use Text::CSV;

my $filename = "import_data.csv";
my $output_dir = "output";
my $output_filename = "/populationReach.js";
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

    next if ($page ne "population-reach-page");

    if ($output eq "") { # new page data
      $output = $output . processPageStart(\@row);
    }
    if ($row[2] eq "infoboxes") {
        my $infoboxJSON = processInfoBox(\@row,\@lastrow);
        $output = $output . $infoboxJSON;
    }
    if ($row[2] eq "scoreCards") {
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
  }]
}];
END_OUTPUT

  return $page_output;
}

sub processInfoBox {
  my @row= @{$_[0]};
  my @lastrow = @{$_[1]};
  my $infobox_output;

  if ($lastrow[2] ne "infoboxes") {  # add preamble for the first infobox

    $infobox_output = <<"END_OUTPUT";
  infoBoxes: [{
END_OUTPUT

  } else { # close off infobox and start a new one

    $infobox_output = $infobox_output . <<"END_OUTPUT";
  }, {
END_OUTPUT

  }

  $infobox_output = $infobox_output .  <<"END_OUTPUT";
    key: '$row[5]',
    title: '$row[6]',
    value: '$row[7]'
END_OUTPUT

  return $infobox_output;
}

sub processScoreCard {
    my @row= @{$_[0]};
    my @lastrow = @{$_[1]};
    my $scorecard_output;

    if ($lastrow[2] ne "scoreCards"){ # add preamble for scorecards

      $scorecard_output = <<"END_OUTPUT";
  }],
  scoreCards: [{
END_OUTPUT

    } else {
      if ($lastrow[3] eq $row[3]) { # add comma unless we are closing off a list

        $scorecard_output = $scorecard_output . <<"END_OUTPUT";
    }, {
END_OUTPUT

      }
    }

    if ($lastrow[3] ne $row[3]){
      if ($lastrow[2] eq "scoreCards"){ # close off previous list if not first set scorebox

        $scorecard_output = $scorecard_output . <<"END_OUTPUT";
    }]
  }, {
END_OUTPUT

      }

      $scorecard_output = $scorecard_output . <<"END_OUTPUT";
    key: '$row[3]',
    title: '$row[4]',
    list: [{
END_OUTPUT

    }

    $scorecard_output = $scorecard_output . <<"END_OUTPUT";
      key: '$row[5]',
      title: '$row[6]',
      score: '$row[7]'
END_OUTPUT

}
