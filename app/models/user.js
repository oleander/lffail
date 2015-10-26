export default DS.Model.extend({
  posts: DS.hasMany("post", { async: false })
});