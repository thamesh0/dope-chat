// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
require("dotenv").config({ path: "./.env" });

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	authDomain: "chat-app-f03bd.firebaseapp.com",
	projectId: "chat-app-f03bd",
	storageBucket: "chat-app-f03bd.appspot.com",
	apiKey: process.env.API_KEY,
	messagingSenderId: process.env.SENDER_ID,
	appId: process.env.APP_ID,
	measurementId: process.env.MEASUREMENT_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const analytics = getAnalytics(app);
