// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_API_KEY,
  authDomain: "ai-trip-planner-b9ed4.firebaseapp.com",
  projectId: "ai-trip-planner-b9ed4",
  storageBucket: "ai-trip-planner-b9ed4.appspot.com",
  messagingSenderId: "458136359951",
  appId: "1:458136359951:web:39aafa585e775898993f7a",
  measurementId: "G-XVCFDHRC32",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
