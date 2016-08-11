/*global Meteor, praisePosts, PraisePosts */

Meteor.publish('praisePosts', function() {
	return PraisePosts.find({});
});

Meteor.publish('offlineUsers', function() {
	return Meteor.users.find({
		'status.online': false
	}, {
		username: 1
	});
});

Meteor.publish('onlineUsers', function() {
	return Meteor.users.find({
		'status.online': true
	}, {
		username: 1
	});
});

Meteor.publish('allUsers', function() {
	return Meteor.users.find({
		username: 1
	});
});

