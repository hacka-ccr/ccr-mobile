import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { useNavigation } from '@react-navigation/native';

export default function App() {
	const [hasPermission, setHasPermission] = useState(null as any);
	const [type, setType] = useState(Camera.Constants.Type.back);
	const [previewVisible, setPreviewVisible] = useState(false);
	const [capturedImage, setCapturedImage] = useState<any>(null);
	const navigation = useNavigation();

	useEffect(() => {
		(async () => {
			const { status } = await Camera.requestPermissionsAsync();
			setHasPermission(status === 'granted');
		})();
	}, []);

	const takePic = async () => {
		const navigateToCamera = () => {
			navigation.navigate('DonationCheckout');
		};
		navigateToCamera();
	};

	if (hasPermission === null) {
		return <View />;
	}
	if (hasPermission === false) {
		return <Text>No access to camera</Text>;
	}
	return (
		<View style={styles.container}>
			<Camera style={styles.camera} type={type}>
				<View style={styles.buttonContainer}>
					<View
						style={{
							position: 'absolute',
							bottom: 0,
							flexDirection: 'row',
							flex: 1,
							width: '100%',
							padding: 20,
							justifyContent: 'space-between',
						}}
					>
						<View
							style={{
								alignSelf: 'center',
								flex: 1,
								alignItems: 'center',
							}}
						>
							<TouchableOpacity
								onPress={takePic}
								style={{
									width: 70,
									height: 70,
									bottom: 0,
									borderRadius: 50,
									backgroundColor: '#fff',
								}}
							/>
						</View>
					</View>
				</View>
			</Camera>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	camera: {
		flex: 1,
	},
	buttonContainer: {
		flex: 1,
		backgroundColor: 'transparent',
		flexDirection: 'row',
		margin: 20,
	},
	button: {
		flex: 0.1,
		alignSelf: 'flex-end',
		alignItems: 'center',
	},
	text: {
		fontSize: 18,
		color: 'white',
	},
});
