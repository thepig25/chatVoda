/*global Meteor, PraisePosts */
Accounts.config({ restrictCreationByEmailDomain: 'vodafone.com.au' })

Meteor.methods({
	addPost: function(text, plaudit) {

		PraisePosts.insert({
			text: text,
			plaudit: plaudit,
			createdAt: new Date()
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