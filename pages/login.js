import React from 'react';
import Link from 'next/link';
import { FormControl, FormLabel, Stack, Button } from '@chakra-ui/react';
import { Box, Heading, Input } from '@chakra-ui/react';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth } from '../providers/firebase';

function Login() {
	const emailRef = React.useRef(null);
	const passwordRef = React.useRef(null);

	const [loading, setLoading] = React.useState(false);
	const [status, setStatus] = React.useState(
		//
		{
			error: false,
			message: '',
		}
		//
	);

	const login = async () => {
		const email = emailRef.current.value;
		const password = passwordRef.current.value;

		setLoading(true);
		setStatus({
			error: false,
			message: '',
		});

		try {
			await signInWithEmailAndPassword(firebaseAuth, email, password);

			window.location.href = '/profile';
		} catch (err) {
			setLoading(false);
			setStatus({
				error: true,
				message: err.message,
			});
		}
	};

	return (
		<Box h='100vh' bg='gray.800' textColor={'gray.400'}>
			<Box pt={12}>
				<Box maxW='xl' m='0 auto' bg='white' rounded='lg'>
					<Heading
						px={12}
						py={10}
						bgGradient='linear(to-r, orange.300, yellow.200)'
						color='white'
						roundedTop='lg'
					>
						Login Account
					</Heading>

					<Stack p={12} spacing={4}>
						<FormControl>
							<FormLabel>Email address</FormLabel>
							<Input
								id='email'
								ref={emailRef}
								type='email'
								placeholder='example@org.com'
							/>
						</FormControl>

						<FormControl>
							<FormLabel>Password</FormLabel>
							<Input
								id='pass'
								ref={passwordRef}
								type='password'
								placeholder='**********'
							/>
						</FormControl>

						{status.error && (
							<Box p={2} bg='red.400' color='white' rounded='md'>
								{status.message}
							</Box>
						)}

						<Button isLoading={loading} onClick={login}>
							Login
						</Button>

						<Box textAlign={'center'}>
							<Link href='/register'>Don&apos;t have an account?</Link>
						</Box>
					</Stack>
				</Box>
			</Box>
		</Box>
	);
}

export default Login;
