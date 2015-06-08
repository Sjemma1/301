// Join Promo Page TODO: move to static hosting at join.weld.co?
// Router.route('/join', {
//   name: 'join',
//   loadingTemplate: 'loadingWeld',
//   template: getTemplate('join'),
//   layoutTemplate: 'blankLayout'
// });

// Members Page
Router.route('/profielen', {
  name: 'members',
  loadingTemplate: 'loadingWeld',
  template: getTemplate('membersPage'),
  waitOn: function() {
    return Meteor.subscribe('members');
  },
  data: function() {
    return { users: Meteor.users.find() }
  },
  fastRender: true
});

// Dallas Calendar Bookings
// Router.route('/dallas-bookings', {
//   name: 'dallasBookings',
//   loadingTemplate: 'loadingWeld',
//   template: getTemplate('calendarDallas'),
//   data: function() {
//     return Meteor.user();
//   },
// });

// More info Route
Router.route('/meer-info', {
  name: 'moreRedirect',
  loadingTemplate: 'loadingWeld',
  template: getTemplate('moreInfo'),
  data: function() {
    return Meteor.user();
  },
});

// FAQ Route
Router.route('/faq', {
  name: 'faqRedirect',
  loadingTemplate: 'loadingWeld',
  template: getTemplate('faqRe'),
  data: function() {
    return Meteor.user();
  },
});

// Terms Route
Router.route('/algemene-voorwaarden', {
  name: 'termsRedirect',
  loadingTemplate: 'loadingWeld',
  template: getTemplate('termsRe'),
  data: function() {
    return Meteor.user();
  },
});

// Projects Route
Router.route('/', {
  name: 'homeRedirect',
  loadingTemplate: 'loadingWeld',
  template: getTemplate('homeRe'),
  data: function() {
    return Meteor.user();
  },
});

// Nasvhille Calendar Bookings
// Router.route('/nashville-bookings', {
//   name: 'nashvilleBookings',
//   loadingTemplate: 'loadingWeld',
//   template: getTemplate('calendarNashville'),
//   data: function() {
//     return Meteor.user();
//   },
// });

// Instagram Authentication
// Router.route('/instagram', {
//   name: 'instagram',
//   loadingTemplate: 'loadingWeld',
//   template: getTemplate('instagram'),
//   data: function() {
//     return Meteor.user();
//   },
// });
