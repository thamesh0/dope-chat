import {
	ref,
	getStorage,
	getDownloadURL,
	uploadBytesResumable,
} from "firebase/storage";

// Upload profile Pic and Username on Account Sign up
export async function uploadImage(userId, displayImg) {
	const storage = getStorage();

	// Upload file and metadata to the object 'images/mountains.jpg'
	const storageRef = ref(storage, `profile-pics/${userId}`);
	const uploadTask = uploadBytesResumable(storageRef, displayImg);
}

export async function getProfilePhoto(userId, displayImg) {
	const storage = getStorage();
	const storageRef = ref(storage, `profile-pics/${userId}`);
	const url = await getDownloadURL(storageRef);
	return url;
}
