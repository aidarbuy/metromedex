var firebase = require("firebase/app");

// require("firebase/auth");
require("firebase/database");
require("firebase/storage");

// Set the configuration for your app
var config = {
	apiKey: "AIzaSyBPxTET_LZP8eiyxvUqZ7zF9ZdSFYUxaAs",
	authDomain: "metromeduc.firebaseapp.com",
	databaseURL: "https://metromeduc.firebaseio.com",
	storageBucket: "metromeduc.appspot.com",
};

// Initialize Firebase
firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();

// Get a reference to the storage service, which is used to create references in your storage bucket
var storage = firebase.storage();

module.exports = { database, storage };