Template[getTemplate('users')].helpers({
  settings: function() {
    return {
      collection: 'all-users',
      rowsPerPage: 20,
      showFilter: true,
      fields: [
        { key: 'avatar', label: '', tmpl: Template.users_list_avatar, sortable: false },
        { key: 'username', label: 'Gebruiker', tmpl: Template.users_list_username },
        { key: 'profile.name', label: 'Naam' },
        { key: 'profile.email', label: 'Email', tmpl: Template.users_list_email },
        { key: 'createdAt', label: 'Gebruiker sinds', tmpl: Template.users_list_created_at, sort: 'descending' },
        { key: 'postCount', label: 'Klussen' },
        { key: 'commentCount', label: 'Reacties op klussen' },
        // { key: 'karma', label: 'Karma', fn: function(val){return Math.round(100*val)/100} },
        // { key: 'inviteCount', label: 'Invites' },
        // { key: 'isInvited', label: 'Invited', fn: function(val){return val ? 'Yes':'No'} },
        { key: 'isAdmin', label: 'Admin', fn: function(val){return val ? 'Ja':'Nee'} },
        { key: 'actions', label: 'Actie', tmpl: Template.users_list_actions, sortable: false }
      ]
    };
  }
});
