// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const projectId = import.meta.env.VITE_PROJ_ID;
const apiKey = import.meta.env.VITE_API_KEY;
const messagingSenderId = import.meta.env.VITE_SENDER_ID;
const appId = import.meta.env.APP_ID;
const measurementId = import.meta.env.VITE_MEASUREMENT_ID;

const firebaseConfig = {
	projectId: projectId,
	authDomain: `${projectId}firebaseapp.com`,
	storageBucket: `${projectId}.appspot.com`,
	apiKey: apiKey,
	messagingSenderId: messagingSenderId,
	appId: appId,
	measurementId: measurementId,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const signUp = async (email, password) => {
	const auth = getAuth();
	try {
		const userCreds = await createUserWithEmailAndPassword(
			auth,
			email,
			password,
		);
		const user = userCreds.user;
		return user;
	} catch (err) {
		let errMsg = "Something went wrong";
		switch (err.code) {
			case "auth/invalid-email":
				errMsg = "Invalid Email";
				break;
			case "auth/weak-password":
				errMsg = "Password should be at least 6 characters";
				break;
			case "auth/email-already-in-use":
				errMsg = "Email is already in use";
				break;
			default:
				console.log(err.message);
		}
		console.log(errMsg);
		return errMsg;
	}
};
