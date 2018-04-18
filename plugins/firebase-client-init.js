import * as firebase from 'firebase/app'
import 'firebase/auth';

// var config = {
//  	apiKey: "AIzaSyCCsNmyXzFJkFZG9g8Qp0bfk9hHC_QJcc8",
//     authDomain: "fir-auth-vue-1aa66.firebaseapp.com",
//     databaseURL: "https://fir-auth-vue-1aa66.firebaseio.com",
//     projectId: "fir-auth-vue-1aa66",
//     storageBucket: "fir-auth-vue-1aa66.appspot.com",
//     messagingSenderId: "392469771982"
// }

var config = {
    apiKey: "AIzaSyDWsmd2LkcWl_i9UBkjuEQ3XtdTeCJI5d0",
    authDomain: "thisisfan-71532.firebaseapp.com",
    databaseURL: "https://thisisfan-71532.firebaseio.com",
    projectId: "thisisfan-71532",
    storageBucket: "thisisfan-71532.appspot.com",
    messagingSenderId: "973998429266"
}

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app()
export const Auth = firebase.auth()
export const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider()
export const FacebookAuthProvider = new firebase.auth.FacebookAuthProvider()
