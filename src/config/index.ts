// // Import the functions you need from the SDKs you need
// import firebase from "firebase/app";
// import "firebase/storage";


// // Your web app's Firebase configuration

// const firebaseConfig = {
//   apiKey: "AIzaSyAvQkDMpz1PrzLfAEwxhvS0APcMg3RSFRI",
//   authDomain: "carefinder-5d7ab.firebaseapp.com",
//   projectId: "carefinder-5d7ab",
//   storageBucket: "carefinder-5d7ab.appspot.com",
//   messagingSenderId: "254537297009",
//   appId: "1:254537297009:web:9d58a790af15e22253ffd0",
//   measurementId: "G-LMKKYQDQWH"
// };



// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// // Export the Firebase storage service
// const storage = firebase.SDK_VERSION

// export { storage, firebase as default };

import firebase from "firebase/app";
import "firebase/storage";


// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAvQkDMpz1PrzLfAEwxhvS0APcMg3RSFRI",
  authDomain: "carefinder-5d7ab.firebaseapp.com",
  projectId: "carefinder-5d7ab",
  storageBucket: "carefinder-5d7ab.appspot.com",
  messagingSenderId: "254537297009",
  appId: "1:254537297009:web:9d58a790af15e22253ffd0",
  measurementId: "G-LMKKYQDQWH"
};



// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Export the Firebase storage service
const storage = firebase.SDK_VERSION

export { storage, firebase as default };