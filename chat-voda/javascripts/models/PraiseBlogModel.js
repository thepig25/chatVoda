/*global Mongo, PraisePosts */
/*jshint -W020 */
PraisePosts  = new Mongo.Collection('praisePosts');
Ground.Collection(PraisePosts, 'praisePosts');