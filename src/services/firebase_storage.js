import {
	ref,
	getStorage,
	getDownloadURL,
	uploadBytesResumable,
} from "firebase/storage";

// Upload profile Pic and Username on Account Sign up

export async function uploadImage(userId, displayImg, downloadURL) {
	// Store Image in Firebase Storage
	const storage = getStorage();
	const storageRef = ref(storage, `profile-pics/${userId}`);
	const uploadTask = uploadBytesResumable(storageRef, displayImg);

	uploadTask.on(
		"state_changed",
		(snapshot) => {
			const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
		},
		(error) => {
			// Handle unsuccessful uploads
		},
		async () => {
			// Handle successful uploads on complete
			// For instance, get the download URL: https://firebasestorage.googleapis.com/...
			downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

			// On Successful Upload
		}
	);
}
