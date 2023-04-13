import { initializeApp } from "firebase/app";

const projectId = import.meta.env.VITE_PROJ_ID;
const apiKey = import.meta.env.VITE_API_KEY;
const messagingSenderId = import.meta.env.VITE_SENDER_ID;
const appId = import.meta.env.APP_ID;
const measurementId = import.meta.env.VITE_MEASUREMENT_ID;

const firebaseConfig = {
	projectId: projectId,
	authDomain: `${projectId}firebaseapp.com`,
	storageBucket: `${projectId}.appspot.com`,
	apiKey: apiKey,
	messagingSenderId: messagingSenderId,
	appId: appId,
	measurementId: measurementId,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
