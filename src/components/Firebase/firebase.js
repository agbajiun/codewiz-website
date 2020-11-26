import firebase from 'firebase';
const config = {
    apiKey: "AIzaSyBLnSUy_FY-ctwsRcEudRoPyNZjwDnEym0",
    authDomain: "codewiz-website.firebaseapp.com",
    databaseURL: "https://codewiz-website.firebaseio.com",
    projectId: "codewiz-website",
    storageBucket: "codewiz-website.appspot.com",
    messagingSenderId: "941896441799",
    appId: "1:941896441799:web:a242f6e4a0f76f5ac283e2",
    measurementId: "G-54Q45J99QR"
  
};
firebase.initializeApp(config);
export default firebase;