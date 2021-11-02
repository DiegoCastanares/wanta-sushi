import * as firebase from "firebase/app";
import "firebase/firestore";

//firebase index contiene la configuracion de firebase

const app = firebase.initializeApp({
  apiKey: "AIzaSyAm9RE-cRO1pmTVJevbXxK1mrpt4JWSsTg",

  authDomain: "wanta-sushi.firebaseapp.com",

  projectId: "wanta-sushi",

  storageBucket: "wanta-sushi.appspot.com",

  messagingSenderId: "876251514647",

  appId: "1:8762515 14647:web:5acb7dd57a077ae7db1952",

  measurementId: "G-NG307XF52Q",
});
export function getFirebase() {
  return app;
}
export function getFirestore() {
  return firebase.firestore(app);
}
