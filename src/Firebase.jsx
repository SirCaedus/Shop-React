import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const { REACT_APP_DB_API_KEY, REACT_APP_DB_AUTH_DOMAIN, REACT_APP_DB_PROYECT_ID, 
        REACT_APP_DB_STORAGE_BUCKET, REACT_APP_DB_MESSAGING_SENDER_ID, REACT_APP_DB_APP_ID } = process.env

const firebaseConfig = {
    apiKey: REACT_APP_DB_API_KEY,
    authDomain: REACT_APP_DB_AUTH_DOMAIN,
    projectId: REACT_APP_DB_PROYECT_ID,
    storageBucket: REACT_APP_DB_STORAGE_BUCKET,
    messagingSenderId: REACT_APP_DB_MESSAGING_SENDER_ID,
    appId: REACT_APP_DB_APP_ID
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)