// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFireStore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

type FbConfigType = {
	[key: string]: string;
}

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig: FbConfigType = {
	apiKey: "AIzaSyAOEe5KtHQfYCzWE92d9zxYYqzXSy46mLM",
	authDomain: "twitter-clone-33b6a.firebaseapp.com",
	projectId: "twitter-clone-33b6a",
	storageBucket: "twitter-clone-33b6a.appspot.com",
	messagingSenderId: "1068809347727",
	appId: "1:1068809347727:web:e8f193aa14d1e2075d06fa",
	measurementId: "G-CLETGE2YJ7"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFireStore();
const storage = getStorage()


export default app;
export { db, storage };