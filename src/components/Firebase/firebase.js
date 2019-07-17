import app from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: "AIzaSyA0L6a0FvDUSajzh5muzW4UPsCWKGGci4o",
  authDomain: "yea-i-did-that.firebaseapp.com",
  databaseURL: "https://yea-i-did-that.firebaseio.com",
  projectId: "yea-i-did-that",
  storageBucket: "",
  messagingSenderId: "422369385769",
  appId: "1:422369385769:web:59b5ad302b27ec3c"
};
// Initialize Firebase
class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.database();
  }
  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

  // *** User API ***

  user = uid => this.db.ref("users/${uid}");

  users = () => this.db.ref("users");
}

export default Firebase;
