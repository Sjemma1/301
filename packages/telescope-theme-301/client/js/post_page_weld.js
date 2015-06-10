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
  }
  // profileDribbble: function(){
  //   var user = Meteor.users.findOne(this.userId);
  //   if(user)
  //     return getTwitterName(user);
  // }
});
