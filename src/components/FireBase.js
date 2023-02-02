import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDcA5ZW3WTVhz2u4ww2mqw087rCDiZzLWE",
    authDomain: "shop-react-63b40.firebaseapp.com",
    projectId: "shop-react-63b40",
    storageBucket: "shop-react-63b40.appspot.com",
    messagingSenderId: "54449995660",
    appId: "1:54449995660:web:3c0450d620e15e9f6aa0a9"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)