import { initializeApp } from "firebase/app";

const projectId = import.meta.env.VITE_PROJ_ID;
const apiKey = import.meta.env.VITE_API_KEY;
const messagingSenderId = import.meta.env.VITE_SENDER_ID;
const appId = import.meta.env.APP_ID;
const measurementId = import.meta.env.VITE_MEASUREMENT_ID;

// const firebaseConfig = {
//   projectId: projectId,
//   authDomain: `${projectId}firebaseapp.com`,
//   storageBucket: `${projectId}.appspot.com`,
//   apiKey: apiKey,
//   messagingSenderId: messagingSenderId,
//   appId: appId,
//   measurementId: measurementId,
// };

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCU2mm1DjFYtRuAvUsMOoFBuwss3J-7fsE",
  authDomain: "chat-app-26e6a.firebaseapp.com",
  projectId: "chat-app-26e6a",
  storageBucket: "chat-app-26e6a.appspot.com",
  messagingSenderId: "1047617972537",
  appId: "1:1047617972537:web:3cce2c7b0df1f2823c60e8",
  measurementId: "G-MLGJ830M24",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
