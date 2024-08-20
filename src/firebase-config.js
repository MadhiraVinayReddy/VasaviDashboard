import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDChP7KHbGCmwEb2UlD7IU6gKB1nCmj7Lg",
  authDomain: "busproject-44a4b.firebaseapp.com",
  databaseURL: "https://busproject-44a4b-default-rtdb.firebaseio.com",
  projectId: "busproject-44a4b",
  storageBucket: "busproject-44a4b.appspot.com",
  messagingSenderId: "48717027477",
  appId: "1:48717027477:web:d7173bfa0ecfec2385639c",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
