import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FB_API_KEY,
	authDomain: 'fir-tut-5cc02.firebaseapp.com',
	projectId: 'fir-tut-5cc02',
	storageBucket: 'fir-tut-5cc02.appspot.com',
	messagingSenderId: '139559628271',
	appId: '1:139559628271:web:f04242258362d19f995a1a',
	measurementId: 'G-0GBXWMB651',
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
