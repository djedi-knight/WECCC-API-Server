#!/bin/bash

# create new files
perl /home/weccc/parse_community_tapestry.pl  
perl /home/weccc/parse_progress_tracker.pl  
perl /home/weccc/parse_vital_signs.pl
perl /home/weccc/parse_population_reach.pl    
perl /home/weccc/parse_shared_outcomes.pl
perl /home/weccc/parse_community_pattern.pl
perl /home/weccc/parse_value_impact.pl

# backup existing files

cp /home/ubuntu/WECCC-API-Server/app/fixtures/prod/pages/* /home/ubuntu/backup/pages/
cp /home/ubuntu/WECCC-API-Server/app/fixtures/prod/reports/* /home/ubuntu/backup/reports/

# move updated files into place

cp /home/weccc/output/sharedOutcomes.js /home/ubuntu/WECCC-API-Server/app/fixtures/prod/pages/
cp /home/weccc/output/vitalSigns.js /home/ubuntu/WECCC-API-Server/app/fixtures/prod/pages/
cp /home/weccc/output/populationReach.js /home/ubuntu/WECCC-API-Server/app/fixtures/prod/pages/
cp /home/weccc/output/communityTapestry.js /home/ubuntu/WECCC-API-Server/app/fixtures/prod/pages/
cp /home/weccc/output/progressTracker.js /home/ubuntu/WECCC-API-Server/app/fixtures/prod/reports/
cp /home/weccc/output/valueImpact.js /home/ubuntu/WECCC-API-Server/app/fixtures/prod/reports/
cp /home/weccc/output/communityPattern.js /home/ubuntu/WECCC-API-Server/app/fixtures/prod/reports/

# restart application service

pm2 restart all

