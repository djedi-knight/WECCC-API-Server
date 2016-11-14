#!/usr/bin/perl

# Process WECCC spreadsheet data and export JSON
# Assumes rows are in page and section order given in sample SS

use Text::CSV;

my $filename = "dashboard.csv";
my @rows;                       # input document rows
my %pages;                      # output JSON documents organized by page

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
    my $rowdata; # processed row data
    my $page = $row[0];

    #print $page . "\n";
    next if ($page ne "shared-outcomes-page");

    if ($output eq ""){ # new page data

    $output = "[{".
              "key: '$row[0]',".
              "title: '$row[1]',";

    }
    if ($row[2] eq "infoboxes"){

        my $infoboxJSON = processInfobox(\@row,\@lastrow);
        $output = $output . $infoboxJSON;
    }
    if ($row[2] eq "scoreCards"){

        my $scorecardJSON = processScoreCard(\@row,\@lastrow);
        $output = $output . $scorecardJSON;
    }

    @lastrow = @row; # previous row's data - sometimes needed for context

}

# Close off unclosed arrays and 

$output = $output . "]\n}]\n}];";
print $output;

$csv->eof or $csv->error_diag();
close $fh;

sub processInfobox{
    # Shared outcomes page has one infobox. Those with a list will require a different
    # subroutine.
    my $infobox_output;
    
    my @row= @{$_[0]};

    my @lastrow = @{$_[1]};

    #print $row[0]."\n";

if ($lastrow[2] ne "infoboxes"){
    $infobox_output = "\ninfoboxes:[{"; # add preamble for infobox if it's the first
}else{
    $infobox_output = $infobox_output."},\n"; # close off infobox if it isn't
}
 $infobox_output = $infobox_output."key: '".$row[5]."',\n".
                                  "title: '".$row[6]."',\n".
                                  "value: '".$row[7]."'\n".
                                  "}]";

return $infobox_output;
}

sub processScoreCard{
    my $scorecard_output;

    my @row = @{$_[0]};

    my @lastrow = @{$_[1]};
    if ($lastrow[2] ne "scoreCards"){ # add preamble for scorecards if it's the first
        $scorecard_output = $scorecard_output.",\nscoreCards:[\n";
    }else{ 
        if ($lastrow[3] eq $row[3]){ # add comma unless we are closing off a list
            $scorecard_output = $scorecard_output.",";
        }
    }

    if ($lastrow[3] ne $row[3]){ # add preamble to new infoboxes
                if ($lastrow[3] ne ""){ # close off previous list if not first set infobox
                    $scorecard_output = $scorecard_output. "]\n},";
                }
            $scorecard_output = $scorecard_output .
            "{\nkey:'".$row[3]."',\n".
            "title:'".$row[4]."',\n".
            "list:[";
        
    }
    $scorecard_output = $scorecard_output."{key: '".$row[5]."',\n".
                                           "title:'".$row[6]."',\n".
                                           "score:'".$row[7]."'}\n";


}
