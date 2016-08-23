/*global Deps, Meteor, Template, PraisePosts, PraisePostService, moment*/
/*jshint -W020 */
/**
 * Separate player logic into an own service singleton for better testability and reusability.
 * @type {{}}
 */

Deps.autorun(function() {
	Meteor.subscribe('offlineUsers');
	Meteor.subscribe('onlineUsers');
	Meteor.subscribe('allUsers');
	Meteor.subscribe('praisePosts');
});

PraisePostService = {
	praisePosts: function() {
		return PraisePosts.find({}, {
			sort: {
				createdAt: 1
			}
		});
	},
	postCount: function() {
		return PraisePosts.find().count();
	}
};
// Events
Template.praiseBlog.events({
	'submit .newPraisePostForm': function(event) {
		// This function is called when the new task form is submitted
		if (event.target.text.value.length > 1) {
			var text = event.target.text.value;

			Meteor.call('addPost', text);

			// Clear form
			event.target.text.value = '';
			// Prevent default form submit
		}
		return false;
	},
	'keyup .addNewPraisePost': function(event) {
		if (event.which === 13) {
			// This function is called when the new task form is submitted
			var text = event.target.value;
			if (event.target.value.length > 1) {
				Meteor.call('addPost', text);
				// Clear form
				event.target.value = '';
				// Prevent default form submit
			}
			return false;

		}
	}
});


//Helpers

Template.praiseBlog.helpers({
	'offlineUsers': function() {
		return Meteor.users.find({
			'status.online': false,
			_id: {
				$ne: Meteor.userId()
			}
		});
	},
	'onlineUsers': function() {
		return Meteor.users.find({
			'status.online': true,
			_id: {
				$ne: Meteor.userId()
			}
		});
	},
	'allUsers': function() {
		var usersLower = Meteor.users.find({
			_id: {
				$ne: Meteor.userId()
			}
		}).fetch();
		var usernameArray = _.pluck(usersLower, 'username');
		usernameArray.sort(function(a, b) {
			return a.toLowerCase().localeCompare(b.toLowerCase());
		});
		return usernameArray;
	}

});
Template.showPlaudits2.onRendered(function () {
	 $(".chat-box").scrollTop($(".chat-box")[0].scrollHeight);;
});
Template.showPlaudits.onRendered(function () {
	 $(".chat-box").scrollTop($(".chat-box")[0].scrollHeight);
});
Template.praisePost.onRendered(function () {
	$(".chat-box").scrollTop($(".chat-box")[0].scrollHeight);
});

Template.showPlaudits.helpers({
	praisePosts: function() {
		return PraisePostService.praisePosts();
	}

});
Template.showPlaudits2.helpers({
	praisePosts: function() {
		return PraisePostService.praisePosts();
	}

});


Template.yourPlaudits.helpers({
	praisePosts: function() {
		return PraisePostService.praisePosts();
	}

});


Template.praisePost.helpers({
	createdAtFormatted: function() {
		return moment(this.createdAt).format('MM/DD/YYYY, HH:MM');
	}
});

