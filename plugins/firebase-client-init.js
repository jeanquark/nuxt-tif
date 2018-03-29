import * as firebase from 'firebase/app'
import 'firebase/auth';

var config = {
 	apiKey: "AIzaSyCCsNmyXzFJkFZG9g8Qp0bfk9hHC_QJcc8",
    authDomain: "fir-auth-vue-1aa66.firebaseapp.com",
    databaseURL: "https://fir-auth-vue-1aa66.firebaseio.com",
    projectId: "fir-auth-vue-1aa66",
    storageBucket: "fir-auth-vue-1aa66.appspot.com",
    messagingSenderId: "392469771982"
}

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app()
export const Auth = firebase.auth()
export const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider()
export const FacebookAuthProvider = new firebase.auth.FacebookAuthProvider()
