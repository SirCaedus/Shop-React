import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { dotenv } from 'dotenv'

dotenv.config()

const { DB_API_KEY, DB_AUTH_DOMAIN, DB_PROYECT_ID, 
        DB_STORAGE_BUCKET, DB_MESSAGING_SENDER_ID, DB_APP_ID } = process.env

const firebaseConfig = {
    apiKey: DB_API_KEY,
    authDomain: DB_AUTH_DOMAIN,
    projectId: DB_PROYECT_ID,
    storageBucket: DB_STORAGE_BUCKET,
    messagingSenderId: DB_MESSAGING_SENDER_ID,
    appId: DB_APP_ID
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)