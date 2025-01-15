import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCjGV6Xm-ZrCjxqhR_HMy7X3TMpt0HR1pE',
  authDomain: 'er-telekom-test.firebaseapp.com',
  projectId: 'er-telekom-test',
  storageBucket: 'er-telekom-test.firebasestorage.app',
  messagingSenderId: '84507139939',
  appId: '1:84507139939:web:395082e196de8274adbd56'
};

export const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export const todosRef = collection(db, 'todos');
