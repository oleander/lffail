export default Ember.Route.extend({
  model(){
    var self = this;

    return self.store.createRecord("user", {}).save().then(function(user){
      console.info("created user", user.get("id"));
      return user.get("posts").createRecord({});
    }).then(function(post){
      console.info("with post", post.get("id"));
      return self.store.findAll("user");
    })
    // Preloading all posts doesn't work
    // .then(function(users){
    //   return self.store.findAll("post").then(function(){
    //     return users;
    //   });
    // });
  }
});