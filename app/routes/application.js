export default Ember.Route.extend({
  model(){
    var self = this;

    return self.store.createRecord("user", {}).save().then(function(user){
      console.info("created user", user.get("id"));
      return user.get("posts").createRecord({});
    }).then(function(post){
      console.info("with post", post.get("id"));
      return self.store.findAll("user");
    }).then(function(users){
      return Promise.all(users.getEach("posts")).then(function(){
        console.info("loaded all posts")
        return users;
      });
    });
  }
});