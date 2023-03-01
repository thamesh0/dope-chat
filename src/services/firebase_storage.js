import { updateProfile } from "firebase/auth";
import {
	ref,
	getMetadata,
	getStorage,
	getDownloadURL,
	uploadBytesResumable,
} from "firebase/storage";

// Upload profile Pic and Username on Account Sign up
export async function uploadOnSignup(username, displayImg) {
	const storage = getStorage();

	// Upload file and metadata to the object 'images/mountains.jpg'
	const storageRef = ref(storage, username);
	const metdata = {
		"Access-Control-Allow-Origin": "*",
	};
	const uploadTask = uploadBytesResumable(storageRef, displayImg, metdata);
	uploadTask.on(
		"state_changed",
		snapshot => {
			// Observe state change events such as progress, pause, and resume
			// Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
			const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
			console.log("Upload is " + progress + "% done");
			switch (snapshot.state) {
				case "paused":
					console.log("Upload is paused");
					break;
				case "running":
					console.log("Upload is running");
					break;
				case "error":
					console.log("Error");
					break;
				case "canceled":
					console.log("Canceled");
					break;
				case "success":
					console.log("Upload successful");
					break;
			}
		},
		error => {
			// Handle unsuccessful uploads
			// A full list of error codes is available at
			// https://firebase.google.com/docs/storage/web/handle-errors
			switch (error.code) {
				case "storage/unauthorized":
					// User doesn't have permission to access the object
					console.error("User doesn't have permission to access the object");
					break;
				case "storage/canceled":
					// User canceled the upload
					console.log("User canceled the upload");

					break;

				// ...
				case "storage/unknown":
					// Unknown error occurred, inspect error.serverResponse
					console.log(error.message);
					break;
			}
		},
		() => {
			// Handle successful uploads on complete
			// For instance, get the download URL: https://firebasestorage.googleapis.com/...
			getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
				console.log("File available at", downloadURL);
				return downloadURL;
			});
		},
	);
}
