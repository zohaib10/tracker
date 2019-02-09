import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyCwLWIkrveBV-U_EFDUe3tsRZ2aJHfmOkU',
  authDomain: 'tracker-19d59.firebaseapp.com',
  databaseURL: 'https://tracker-19d59.firebaseio.com',
  projectId: 'tracker-19d59',
  storageBucket: 'tracker-19d59.appspot.com',
  messagingSenderId: '97480559890'
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;

//need npm install --save firebase
