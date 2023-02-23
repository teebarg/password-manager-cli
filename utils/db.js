require("dotenv").config();
const { initializeApp } = require("firebase/app");
const { getDatabase } = require("firebase/database");
const admin = require("firebase-admin");

// Initialize Firebase Admin SDK with your project credentials
const serviceAccount = require("/Users/macbook/Downloads/cli-password-firebase-adminsdk-9cwgt-9e69ddd8b7.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://cli-password-default-rtdb.firebaseio.com",
});

// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//     apiKey: process.env.API_KEY,
//     authDomain: process.env.AUTH_DOMAIN,
//     databaseURL: process.env.DATABASE_URL,
//     projectId: process.env.PROJECT_ID,
//     storageBucket: process.env.STORAGE_BUCKET,
//     messagingSenderId: process.env.MESSAGING_SENDER_ID,
//     appId: process.env.APP_ID,
// };

// const app = initializeApp(firebaseConfig);

// const db = getDatabase(app);
// console.log("🚀 ~ file: db.js:17 ~ database", db)

const db = admin.firestore();

exports.db = db;
exports.admin = admin;
