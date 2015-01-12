if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault("counter", 0);

  FView.registerView('TextareaSurface', famous.surfaces.TextareaSurface);

  Template.hello.helpers({
    counter: function () {
      return Session.get("counter");
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set("counter", Session.get("counter") + 1);
    },
    'touchmove': function(e) {
      // console.log('%c touch   ',  'background: #5D76DB; color: white; padding: 1px 15px 1px 5px;', e);

    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
