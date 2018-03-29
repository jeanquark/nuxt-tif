const admin = require('firebase-admin');
// const key = require("../serviceAccountKey.json");
const key = require("../serviceAccountKey.js");

module.exports = admin.initializeApp({
    credential: admin.credential.cert(key),
    databaseURL: `https://${key.project_id}.firebaseio.com`
});
