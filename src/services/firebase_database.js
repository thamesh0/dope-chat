import { app } from "../services/firebase_init";
import { getDocs, getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import { updateProfile } from "firebase/auth";
import { collection, query, where } from "firebase/firestore";
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export const uploadUserData = async (user, email, displayName, photoURL) => {
	// Add a new document in collection "cities"

	// Updates the Firebase User Profile
	await updateProfile(user, {
		displayName,
		photoURL,
	});

	console.log(user);
	// Uploads The Data to Firestore Database
	await setDoc(doc(db, "users", user.uid), {
		uid: user.uid,
		displayName: displayName,
		email: email,
		photoURL: photoURL,
	});
};

export const findUser = async (displayName) => {
	const usersRef = collection(db, "users");

	// Create a query against the collection.
	const q = query(usersRef, where("displayName", "==", displayName));
	const querySnap = await getDocs(q);
	querySnap.map((doc) => {
		console.log(doc.id + " => " + doc.data());
	});
	return q;
};
