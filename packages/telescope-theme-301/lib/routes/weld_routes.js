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

// Privacy Route
Router.route('/privacy', {
  name: 'privacyRedirect',
  loadingTemplate: 'loadingWeld',
  template: getTemplate('privacyRe'),
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
