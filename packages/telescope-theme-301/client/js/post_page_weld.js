Template[getTemplate('postPageWeld')].helpers({
  authorName: function(){
    return getAuthorName(this);
  },
  profileUrl: function(){
    var user = Meteor.users.findOne(this.userId);
    if(user)
      return getProfileUrl(user);
  },
  postLink: function(){
    return !!this.url ? getOutgoingUrl(this.url) : "/posts/"+this._id;
  },
  postTarget: function() {
    return !!this.url ? '_blank' : '';
  },
  postProfileWeld: function () {
return getTemplate('postProfileWeld');
  },
  profileEmail: function(){
    var user = Meteor.users.findOne(this.userId);
    if(user)
      return getEmail(user);
  },
  profileTwitter: function(){
    var user = Meteor.users.findOne(this.userId);
    if(user)
      return getTwitterName(user);
  },
  profileBio: function(){
    var user = Meteor.users.findOne(this.userId);
    if(user)
      return getBio(user);
  },
  profileLocation: function(){
    var user = Meteor.users.findOne(this.userId);
    if(user)
      return getLocation(user);
  },
  profileSite: function(){
    var user = Meteor.users.findOne(this.userId);
    if(user)
      return getSite(user);
  },
  profilePhone: function(){
    var user = Meteor.users.findOne(this.userId);
    if(user)
      return getPhone(user);
  },
  profileDribbble: function(){
    var user = Meteor.users.findOne(this.userId);
    if(user)
      return getDribbble(user);
  }
});


// Router.map(function() {
//   this.route('public', {
//     path: '/',
//     template: 'public'
//   }),
//   this.route('admin', {
//     path: '/admin',
//     template: 'admin',
//     action: function() {
//       var self = this;
//       $.getScript('/js/moment.min.js', function(data, textStatus, jqxhr) {
//         if(jqxhr.status === 200) {
//           self.render();
//         }
//      });
//     }
//   })
// });

//
// Router.map( function () {
//   this.route('posts_list_weld',{
//     waitOn: IRLibLoader.load('https://cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.12/jquery.mousewheel.js')
//   });
// });

// Meteor.Router.filters({
//   'isCustomScriptLoaded': function(page) {
//     if(!Session.equals('isCustomScriptLoaded', true)){
//         Session.set('isCustomScriptLoaded', true);
//         var script = document.createElement('script');
//         script.type = 'text/javascript';
//         script.async = true;
//         script.src = "<EXTERNAL SCRIPT URL>";
//
//         var firstScript = document.getElementsByTagName('script')[0];
//         firstScript.parentNode.insertBefore(script, firstScript);
//     }
//   }
// });

// Meteor.Router.filter('isCustomScriptLoaded',{only: ['posts_list_weld'] });
//
// Template.posts_list_weld.created = function() {
//   scriptInsert = function () {
//     // $('head').append('<script type="text/javascript" src="/mousewheel.js">');
//     $(document).ready(function() {
//
//       $('html, body, *').mousewheel(function(e, delta) {
//         this.scrollLeft -= (delta * 40);
//         e.preventDefault();
//       });
//
//     });
//   }
// }

// Template.posts_list_weld.helpers({
//   posts: function () {
//     $('html, body, *').mousewheel(function(e, delta) {
//                      this.scrollLeft -= (delta * 40);
//                      e.preventDefault();
//                    });
//                  });
//     return Posts;
//   }
// });


// Template.posts_list_weld.rendered=function(){
//     var initializeOnlyOnce=_.once(function(){
//         $(document).ready(function() {
//               $('html, body, *').mousewheel(function(e, delta) {
//                 this.scrollLeft -= (delta * 40);
//                 e.preventDefault();
//               });
//             });
//     });
//     initializeOnlyOnce();
// };
