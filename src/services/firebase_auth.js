// Import the functions you need from the SDKs you need
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth();
export const signUp = async (email, password) => {
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
				errMsg = err.message.toString().length() >= 20 ?? err.message;
		}
		console.log(errMsg);
		return errMsg;
	}
};

export function getCurrentUser() {
	const currentUser = auth.currentUser;
	console.log(currentUser);
	return currentUser;
}
