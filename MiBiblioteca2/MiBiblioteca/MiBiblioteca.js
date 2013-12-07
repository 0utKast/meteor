favoritos = new Meteor.Collection("Favoritos");
if (Meteor.isClient) {
  
 /*
  Template.hello.greeting = function () {
    return "Mis Favoritos";
  };

  Template.hello.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
*/
  Template.categories.favoritos = function () {
    return favoritos.find({}, {sort: {Category: 1}});
};
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}