// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAckL3v-yie472Aots2zOOj5lXofRH4k2o",
    authDomain: "bejamas-b3939.firebaseapp.com",
    projectId: "bejamas-b3939",
    storageBucket: "bejamas-b3939.appspot.com",
    messagingSenderId: "328866397228",
    appId: "1:328866397228:web:1b0cd09d48ca2fa180a589",
    measurementId: "G-C5DZCLB07Y"
};

const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);

// Initialize Firebase
// const firebase = initializeApp(firebaseConfig);

// export default db



// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//     apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//     authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//     databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
//     projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// };


// const app = initializeApp(firebaseConfig);