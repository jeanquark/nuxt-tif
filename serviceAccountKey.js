require('dotenv').config()
let config = require('./nuxt.config.js')

if (config.dev) {
  module.exports = {
    type: "service_account",
    project_id: process.env.PROJECT_ID,
    private_key_id: process.env.PRIVATE_KEY_ID,
    private_key: process.env.PRIVATE_KEY,
    client_email: process.env.CLIENT_EMAIL,
    client_id: process.env.CLIENT_ID,
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://accounts.google.com/o/oauth2/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: "https//www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-li5wg%40fir-auth-vue-1aa66.iam.gserviceaccount.com",
    football_api_key: process.env.FOOTBALL_API_KEY
  }
} else {
  module.exports = {
    type: "service_account",
    project_id: process.env.PROJECT_ID,
    private_key_id: process.env.PRIVATE_KEY_ID,
    private_key: JSON.parse(process.env.PRIVATE_KEY),
    // private_key: process.env.PRIVATE_KEY,
    client_email: process.env.CLIENT_EMAIL,
    client_id: process.env.CLIENT_ID,
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://accounts.google.com/o/oauth2/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: "https//www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-li5wg%40fir-auth-vue-1aa66.iam.gserviceaccount.com",
    football_api_key: process.env.FOOTBALL_API_KEY,
    // apiKey: process.env.API_KEY,
    // authDomain: process.env.AUTH_DOMAIN,
    // databaseURL: process.env.DATABASE_URL,
    // projectId: process.env.PROJECT_ID,
    // storageBucket: process.env.STORAGE_BUCKET,
    // messagingSenderId: process.env.MESSAGING_SENDER_ID
  }
}