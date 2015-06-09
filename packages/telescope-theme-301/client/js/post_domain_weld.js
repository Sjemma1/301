Template[getTemplate('postDomainWeld')].helpers({
  postLink: function(){
    return !!this.url ? getOutgoingUrl(this.url) : "/klus/"+this._id;
  }
});
