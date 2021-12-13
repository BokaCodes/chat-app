import React, { useContext } from 'react';
import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { AuthContext } from '../providers/auth-provider';
import { firebaseAuth } from '../providers/firebase';

function Profile() {
	const { user } = useContext(AuthContext);

	const logout = async () => {
		await firebaseAuth.signOut();
		window.location.href = '/login';
	};

	return (
		<Box h='100vh' bg='gray.800' textColor={'gray.400'}>
			<Box pt={12}>
				<Box maxW='xl' m='0 auto' bg='white' rounded='lg'>
					<Heading
						px={12}
						py={10}
						bgGradient='linear(to-r, blue.300, green.200)'
						color='white'
						roundedTop='lg'
					>
						Profile
					</Heading>

					<Box p={12}>
						{user ? (
							<Box>
								<Text>You are logged in.</Text>
								<Button
									mt={4}
									onClick={logout}
									colorScheme={'red'}
									variant={'outline'}
								>
									Logout
								</Button>
							</Box>
						) : (
							<Box>
								<Text>You are not logged in.</Text>
								<Button mt={4} as='a' href='/login'>
									Login
								</Button>
							</Box>
						)}
					</Box>
				</Box>
			</Box>
		</Box>
	);
}

export default Profile;
