import { ref, getStorage, getDownloadURL, uploadBytes } from "firebase/storage";

// Upload profile Pic and Username on Account Sign up

export async function uploadImage(userId, displayImg) {
	return new Promise(async (resolve) => {
		// Store Image in Firebase Storage
		const storage = getStorage();
		const storageRef = ref(storage, `profile-pics/${userId}`);

		var url = "";

		await uploadBytes(storageRef, displayImg).then(async (snapshot) => {
			await getDownloadURL(snapshot.ref).then((downloadURL) => {
				console.log(downloadURL.toString());
				url = downloadURL.toString();
			});
		});

		resolve(url);
	});
}
