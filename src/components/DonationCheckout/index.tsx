import React, { useState } from 'react';
import {
	Container,
	Title,
	Subtitle,
	Input,
	InputDesc,
	ThiccInput,
	CameraBtn,
	CameraBtnText,
} from './styles';
import { Picker } from '@react-native-picker/picker';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function index() {
	const navigation = useNavigation();
	const navigateToCamera = () => {
		navigation.navigate('DonationCamera');
	};

	return (
		<Container>
			<Title>Obrigado por registrar seu item ;)</Title>
			<Subtitle>Agora põe tudo na caixa que vamos fazer a coleta</Subtitle>
			<InputDesc>Nome</InputDesc>

			<CameraBtn onPress={navigateToCamera}>
				<Feather
					name='camera'
					size={50}
					color='white'
					style={{ alignSelf: 'center', marginTop: 30 }}
				/>

				<CameraBtnText>Agora tira uma foto bem legal pra gente!</CameraBtnText>
			</CameraBtn>
		</Container>
	);
}
