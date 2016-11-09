#!/usr/bin/perl

# Process WECCC spreadsheet data and export JSON
# Assumes rows are in page and section order given in sample SS

use Text::CSV;

my $filename = "dashboard.csv";
my @rows;                       # input document rows
my %pages;                      # output JSON documents organized by page

my $csv = Text::CSV-> new ({binary=>1})
    or die "Cannot use CSV: ".Text::CSV->error_diag();

open my $fh, "<:encoding(utf8)", "$filename" or die "$filename: $!";


# get column headers out of our way
$firstRow = $csv->getline($fh);

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

my $lastrow; 
my $lastpage = "";
while (my $row = $csv->getline($fh)){
    my $rowdata; # processed row data
    my $page = @$row[0];
    if ($page ne $lastpage){ # new page data
        $pages{$page} = <<"EOF";
[{
    key: '{@$row[5]}',
    title: '{@$row[6]}',

EO
    }

    if (@$row[2] eq "infoboxes"){
        my $infoboxJSON = processInfobox($row,$lastrow);
        $pages{$page} = $pages{$page} . $infoboxJSON;
    }
#    if (@$row[2] eq "scoreCards"){
#        $rowdata = processScoreCard($row,$lastrow);
#    }
#    if (@$row[2] eq "pieCharts"){
#        $rowdata = procesPieChart($row,$lastrow);
#    }
#    if (@$row[2] eq "pieChartDetail"){
#        $rowdata = processPieChartDetail($row,$lastrow);
#    }

    $lastpage = @$row[0]; # previous page name - check for change
    $lastrow = $row; # previous row's data - sometimes needed for context
}

foreach $page (keys %pages){
    print $pages{$page};
}

$csv->eof or $csv->error_diag();
close $fh;

sub processInfobox($row,$lastrow){
    my $output;
    if (@$lastrow[2] ne "infoboxes"){
        $output = "infoboxes:[{";

    }
    $output+=<<"EOL";
key: '{@$row[5]}',
title: '{@$row[6]}',
value: '{@$row[7]}'
EOL
print $output;
return $output;
}
