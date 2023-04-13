import { app } from "../services/firebase_init";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export const createUser = async (uid, name, email, profilePhotoURL) => {
	// Add a new document in collection "cities"
	await setDoc(doc(db, "users", uid), {
		uid: uid,
		name: name,
		email: email,
		"profile-pic": profilePhotoURL,
	});
};
