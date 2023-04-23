// Import the functions you need from the SDKs you need
import { app } from "../services/firebase_init";
import {
	createUserWithEmailAndPassword,
	updateProfile,
	signInWithEmailAndPassword,
	getAuth,
	signOut,
} from "firebase/auth";

export const auth = getAuth(app);

export const signUp = async (email, password, displayName) => {
	try {
		const userCreds = await createUserWithEmailAndPassword(
			auth,
			email,
			password
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
				const temp = err.message.toString();
				if (temp.length < 20) errMsg = temp;
		}
		console.log(errMsg);
		return errMsg;
	}
};

export const login = async (email, password) => {
	try {
		const userCreds = await signInWithEmailAndPassword(auth, email, password);
		const user = userCreds.user;
		return user;
	} catch (err) {
		let errMsg = "Something went wrong";
		switch (err.code) {
			case "auth/user-not-found":
				errMsg = "Email address not registered";
				break;
			case "auth/wrong-password":
				errMsg = "Password is incorrect";
				break;
			default:
				const temp = err.message.toString();
				if (temp.length < 100) errMsg = temp;
		}
		console.log(errMsg);
		return errMsg;
	}
};

export function logout() {
	signOut(auth);
}

// With the Auth Context Approach there shouldn't be a need for such a Function
// export function getCurrentUser() {
// 	try {
// 		if (auth.currentUser === null || auth.currentUser === undefined) {
// 			throw new Error("User doesn't exist");
// 		}
// 		console.log(auth.currentUser);
// 		return auth.currentUser;
// 	} catch (err) {
// 		console.log(err.message);
// 	}
// }
