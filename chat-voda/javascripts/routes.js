/*global Router*/

'use strict';

Router.map(function() {
	this.route('indexPage', {
		path: '/',
		layoutTemplate: 'baseLayout',
		waitOn: function(){
			return Meteor.subscribe('praisePosts');
		},
		loadingTemplate: 'loading'
	});

	this.route('praiseBlog', {
		path: '/sendChat',
		layoutTemplate: 'baseLayout',
		loadingTemplate: 'loading'
	});

	this.route('showPlaudits', {
		path: '/presenter',
		layoutTemplate: 'baseLayout',
		waitOn: function(){
			return Meteor.subscribe('praisePosts');
		},
		loadingTemplate: 'loading'
	});

	this.route('yourPlaudits', {
		path: '/yourPlaudits',
		layoutTemplate: 'baseLayout',
		waitOn: function(){
			return Meteor.subscribe('praisePosts');
		},
		loadingTemplate: 'loading'
	});

	this.route('leaderboard', {
		path: '/leaderboard',
		layoutTemplate: 'baseLayout',
		waitOn: function(){
			return Meteor.subscribe('praisePosts');
		},
		loadingTemplate: 'loading'
	});
});
