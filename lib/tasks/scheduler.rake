namespace :scheduler do
desc "This task is called by the Heroku scheduler add-on"
task :change_all => :environment do

  JobsFBCounts.update_all_counts
end

end

