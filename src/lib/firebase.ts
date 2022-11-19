import { FirebaseOptions, getApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY_ID,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  authDomain: `${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}.firebaseapp.com`,
  databaseURL: `${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}.firebaseio.com`,
  storageBucket: `${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}.appspot.com`,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  // measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

function createFirebaseApp(config: FirebaseOptions) {
  try {
    return getApp();
  } catch (err) {
    return initializeApp(config);
  }
}

const firebaseApp = createFirebaseApp(firebaseConfig);

export const db = getFirestore(firebaseApp);
export const firebaseAuth = getAuth(firebaseApp);
