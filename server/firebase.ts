import dotenv from 'dotenv';
dotenv.config();
import admin from 'firebase-admin';

admin.initializeApp({credential: admin.credential.applicationDefault()});

export const db = admin.firestore();