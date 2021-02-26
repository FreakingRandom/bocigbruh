var cron = require("cron");

function test() {
  console.log("Action executed.")
  ;
}

let job1 = new cron.CronJob('01 05 01,13 * * *', test); // fires every day, at 01:05:01 and 13:05:01
let job2 = new cron.CronJob('00 00 08-16 * * 1-5', test); // fires from Monday to Friday, every hour from 8 am to 16

// To make a job start, use job.start()
job1.start();
// If you want to pause your job, use job.stop()
job1.stop();