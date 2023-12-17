import { initializeApp } from 'firebase/app'
import { getAuth, initializeAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyD1E0_n_uW69dQetZDptOT7OB5KG0PPKns",
    authDomain: "autoads-345bd.firebaseapp.com",
    projectId: "autoads-345bd",
    storageBucket: "autoads-345bd.appspot.com",
    messagingSenderId: "633616246387",
    appId: "1:633616246387:web:22c4d5ab02cf4fb345ec06",
    measurementId: "G-2VCEBGLFN4"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);