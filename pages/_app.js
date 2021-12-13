import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';

import theme from '../theme';
import { AuthProvider } from '../providers/auth-provider';

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<AuthProvider>
				<Component {...pageProps} />
			</AuthProvider>
		</ChakraProvider>
	);
}

export default MyApp;
