import 'react-native-gesture-handler';
import React from 'react';
import Routes from './src/routes';
import DonationForm from './src/components/DonationForm';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
	const Stack = createStackNavigator();

	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name='Routes'
					component={Routes}
					options={{ headerShown: false }}
				/>

				<Stack.Screen
					name='DonationForm'
					component={DonationForm}
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
