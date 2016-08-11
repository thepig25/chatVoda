/*global Meteor, PraisePosts */
Accounts.config({ restrictCreationByEmailDomain: 'vodafone.com.au' })

Meteor.methods({
	addPost: function(text, plaudit) {
		// Make sure the user is logged in before inserting a task
		if (!Meteor.userId()) {
			throw new Meteor.Error('not-authorized');
		}

		PraisePosts.insert({
			text: text,
			plaudit: plaudit,
			createdAt: new Date(),
			owner: Meteor.userId(),
			username: Meteor.user().username
		});
	},

	deletePraisePost: function(postId) {

		var post = PraisePosts.findOne(postId);
		if ((post.private && post.owner !== Meteor.userId()) || post.owner !== Meteor.userId()) {
			// If the task is private, make sure only the owner can delete it
			throw new Meteor.Error('not-authorized');
		} else {
			PraisePosts.remove(postId);
		}

	}

});