Template[getTemplate('postDomainWeld')].helpers({
  postLink: function(){
    return !!this.url ? getOutgoingUrl(this.url) : "/post/"+this._id;
  }
}); 
