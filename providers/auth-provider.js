import { createContext, useEffect, useState } from 'react';
import { firebaseAuth } from './firebase';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		firebaseAuth.onAuthStateChanged((value) => {
			setUser(value);
		});
	}, []);

	return (
		<AuthContext.Provider
			value={{
				user,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
