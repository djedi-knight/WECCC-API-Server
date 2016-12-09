#!/usr/bin/perl

# Process WECCC spreadsheet data and export JSON
# Assumes rows are in page and section order given in sample SS

use Text::CSV;

my $filename = "progresstracker.csv";
my $output_dir = "output";
my $output_filename = "/communityPattern.js";
my @rows; # input document rows

my $csv = Text::CSV->new ({binary=>1})
  or die "Cannot use CSV: ".Text::CSV->error_diag();

open my $fh, "<:encoding(utf8)", "$filename" or die "$filename: $!";


my @lastrow;
my $output = "";

# Header section
my $firstRow_r = $csv->getline($fh); # report key

my $titleRow_r = $csv->getline($fh); # title row

my @keyRow = @{$firstRow_r};
my @titleRow = @{$titleRow_r};
$output = $output . processPageStart(\@keyRow,\@titleRow);

# Table section
$firstrow = $csv->getline($fh); # actual header row
# Data structure
#
# Index Data
#   0   Section
#   1   Indicator
#   2   Goal
#   3   Baseline
#   4   Change
#   5   Trend
#   6   colourCode

while (my $row_r = $csv->getline($fh)){

  my @row = @{$row_r};

  my $JSON = processProgressTracker(\@row,\@lastrow);
    $output = $output . $JSON;

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
  my @keyRow= @{$_[0]};
  my @titleRow = @{$_[1]};

  my $page_output = <<"END_OUTPUT";
/* global exports  */
/* global require  */
require('../../../models/report');
exports.Page = [{
  key: '$keyRow[1]',
  title: '$titleRow[1]',
  data:[{
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

sub processProgressTracker {
  my @row= @{$_[0]};
  my @lastrow = @{$_[1]};
  my $progress_output;

  if ($lastrow[0] ne $row[0]) { # add header for report section
    if ($lastrow[0] ne ""){ # not first row
      $progress_output = $progress_output . <<"END_OUTPUT";
      }]
      },{
END_OUTPUT
    }
    $progress_output = $progress_output . <<"END_OUTPUT";
    header: '$row[0]',
    rows:[{
END_OUTPUT
  }else{

    $progress_output = $progress_output . <<"END_OUTPUT";
    }, {
END_OUTPUT
      }


  $progress_output = $progress_output . <<"END_OUTPUT";
    indicator: '$row[1]',
    goal: '$row[2]',
    baseline: '$row[3]',
    change: '$row[4]',
    trend: '$row[5]',
    colourCode: '$row[6]'
END_OUTPUT

return $progress_output;
}
