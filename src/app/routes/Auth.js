// Initialize Firebase
var config = {
  apiKey: "AIzaSyBPxTET_LZP8eiyxvUqZ7zF9ZdSFYUxaAs",
  authDomain: "metromeduc.firebaseapp.com",
  databaseURL: "https://metromeduc.firebaseio.com",
  storageBucket: "metromeduc.appspot.com",
};

const GOOGLE_PROVIDER_ID = '466589189893-li171g4hh0bprcd8a6ebatod8ap4j01l.apps.googleusercontent.com';
const FACEBOOK_PROVIDER_ID = '1518975501726591';
const TWITTER_PROVIDER_ID = 'bFqyw2C8ChwtXVHvsHn1Yw0Wc';
const GITHUB_PROVIDER_ID = 'cd5e904e3e0215e6930c';
const EMAIL_PROVIDER_ID = '466589189893-li171g4hh0bprcd8a6ebatod8ap4j01l.apps.googleusercontent.com';

// FirebaseUI config.
// var uiConfig = {
//   'signInSuccessUrl': '/',
//   'signInOptions': [
//     firebase.auth.GoogleAuthProvider.GOOGLE_PROVIDER_ID,
//     firebase.auth.FacebookAuthProvider.FACEBOOK_PROVIDER_ID,
//     firebase.auth.TwitterAuthProvider.TWITTER_PROVIDER_ID,
//     firebase.auth.GithubAuthProvider.GITHUB_PROVIDER_ID,
//     firebase.auth.EmailAuthProvider.EMAIL_PROVIDER_ID
//   ],
//   // Terms of service url.
//   // 'tosUrl': '<your-tos-url>',
// };

// Initialize the FirebaseUI Widget using Firebase.
// var app = firebase.initializeApp(config);
// var auth = app.auth();
// var ui = new firebaseui.auth.AuthUI(auth);

import React from 'react';

export default React.createClass({
  componentDidMount() {
    // The start method will wait until the DOM is loaded.
    ui.start(this.refs.authContainer, uiConfig);
  },
  render() {
    return (
      <section>
        <h3>Auth</h3>
        <div ref="authContainer"></div>
      </section>
    );
  }
});