Meteor.startup(function () {
  logEvent({
    name: "firstRun",
    unique: true, // will only get logged a single time
    important: true
  })
});

// if (getSetting('mailUrl'))
//   process.env.MAIL_URL = getSetting('mailUrl');

  process.env.MAIL_URL="smtp://postmaster@301.semammerlaan.nl:7d92bc346654651fdb1950b80b2b8da1@smtp.mailgun.org:465/";
