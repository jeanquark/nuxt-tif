import firebase from 'firebase'
// firebase = require('firebase');
import axios from 'axios'


export default function ({ store, redirect, error }) {
	console.log('Entering admin-check')
    if (process.client) {
    	console.log('process client')
	  	firebase.auth().currentUser.getIdTokenResult().then((idTokenResult) => {
		    // console.log(idTokenResult)
	     	if (!!idTokenResult.claims.admin) {
	     		console.log('User is admin')
	     	} else {
	       		console.log('User is not admin')
	     	}
	 	})
	  	.catch((error) => {
	    	console.log(error)
	  	})
	}
}
