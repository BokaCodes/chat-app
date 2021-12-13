import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { FormControl, FormLabel, Stack, Button } from '@chakra-ui/react';
import { Box, Heading, Input } from '@chakra-ui/react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth } from '../providers/firebase';

function Register() {
	const email = useRef();
	const password = useRef();
	const [loading, setLoading] = useState(false);
	const [status, setStatus] = useState(
		//
		{
			error: false,
			success: false,
			message: '',
		}
		//
	);

	const register = async () => {
		setLoading(true);
		setStatus({
			error: false,
			success: false,
			message: '',
		});

		try {
			await createUserWithEmailAndPassword(
				firebaseAuth,
				email.current.value,
				password.current.value
			);

			setStatus({
				success: true,
				message: 'Successfully registered',
			});
		} catch (error) {
			setStatus({
				error: true,
				success: false,
				message: error.message,
			});
		}
		setLoading(false);
	};

	return (
		<Box h='100vh' bg='gray.800' textColor={'gray.400'}>
			<Box pt={12}>
				<Box maxW='xl' m='0 auto' bg='white' rounded='lg'>
					<Heading
						px={12}
						py={10}
						bgGradient='linear(to-r, purple.300, blue.200)'
						color='white'
						roundedTop='lg'
					>
						Register Account
					</Heading>

					<Stack p={12} spacing={4}>
						<FormControl id='email'>
							<FormLabel>Email address</FormLabel>
							<Input ref={email} type='email' placeholder='example@org.com' />
						</FormControl>

						<FormControl id='password'>
							<FormLabel>Password</FormLabel>
							<Input ref={password} type='password' placeholder='**********' />
						</FormControl>

						{status.error && (
							<Box p={2} bg='red.400' color='white' rounded='md'>
								{status.message}
							</Box>
						)}

						{status.success && (
							<Box p={2} bg='green.400' color='white' rounded='md'>
								{status.message}
							</Box>
						)}

						<Button isLoading={loading} onClick={register}>
							Register
						</Button>

						<Box textAlign={'center'}>
							<Link href='/login'>Already have an account?</Link>
						</Box>
					</Stack>
				</Box>
			</Box>
		</Box>
	);
}

export default Register;
