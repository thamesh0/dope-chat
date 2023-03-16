import {
	ref,
	getStorage,
	getDownloadURL,
	uploadBytesResumable,
} from "firebase/storage";

// Upload profile Pic and Username on Account Sign up

export async function uploadImage(userId, displayImg) {
	const storage = getStorage();
	const storageRef = ref(storage, `profile-pics/${userId}`);
	const uploadTask = uploadBytesResumable(storageRef, displayImg);
	var url = "";
	// Register three observers:
	// 1. 'state_changed' observer, called any time the state changes
	// 2. Error observer, called on failure
	// 3. Completion observer, called on successful completion
	uploadTask.on(
		"state_changed",
		(snapshot) => {
			// Observe state change events such as progress, pause, and resume
			// Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
			const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
			console.log("Upload is " + progress + "% done");
			if (snapshot.state == "paused") {
				console.log("Upload is paused");
			}
		},
		(error) => {
			// Handle unsuccessful uploads
		},
		async () => {
			// Handle successful uploads on complete
			// For instance, get the download URL: https://firebasestorage.googleapis.com/...
			const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
			console.log(downloadURL);
			url = downloadURL;
		}
	);
}
