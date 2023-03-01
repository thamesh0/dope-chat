// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	authDomain: "chat-app-f03bd.firebaseapp.com",
	projectId: "chat-app-f03bd",
	storageBucket: "chat-app-f03bd.appspot.com",
	apiKey: import.meta.env.VITE_API_KEY,
	messagingSenderId: import.meta.env.VITE_SENDER_ID,
	appId: import.meta.env.APP_ID,
	measurementId: import.meta.env.VITE_MEASUREMENT_ID,
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
		switch (err) {
			case "auth/invalid-email":
				errMsg = "Invalid Email";
				break;
			case "auth/weak-password":
				errMsg = "Password should be at least 6 characters";
				break;
			case "auth/email-already-in-use":
				errMsg = "Email is already in use";
			default:
				console.log(err.message);
		}
		return errMsg;
	}
};
