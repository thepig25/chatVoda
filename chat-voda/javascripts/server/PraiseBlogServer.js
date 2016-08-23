/*global Meteor, PraisePosts */
Accounts.config({ restrictCreationByEmailDomain: 'vodafone.com.au' })

Meteor.methods({
	addPost: function(text, plaudit) {

		PraisePosts.insert({
			text: text,
			plaudit: plaudit,
			createdAt: new Date()
		});
	}

});