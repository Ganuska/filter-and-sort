import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyDxGZf3d8qB0VS5hse-8DZgY14o3lUEqjE',

  authDomain: 'testtask-55ab8.firebaseapp.com',

  projectId: 'testtask-55ab8',

  storageBucket: 'testtask-55ab8.appspot.com',

  messagingSenderId: '197236905609',

  appId: '1:197236905609:web:e38b9b80b0bf6597afd858'
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
