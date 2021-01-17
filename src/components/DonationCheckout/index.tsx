import React, { useState } from 'react';
import {
	Container,
	Title,
	Subtitle,
	ConfirmButton,
	ConfirmBtnText,
	Wrapper,
} from './styles';
import { useNavigation } from '@react-navigation/native';

export default function index() {
	const navigation = useNavigation();
	const goBackHome = () => {
		navigation.navigate('Routes');
	};

	return (
		<Container>
			<Wrapper>
				<Title>Obrigado por registrar seu item ;)</Title>
				<Subtitle>Agora põe tudo na caixa que vamos fazer a coleta!</Subtitle>
			</Wrapper>

			{/* <LottieView
				source={require('../../../assets/donate.json')}
				autoPlay
				loop
				speed={2}
				autoSize
				resizeMode='cover'
				style={{
					width: '100%',
					height: 500,
				}}
			/> */}
			<ConfirmButton onPress={goBackHome}>
				<ConfirmBtnText>Concluir</ConfirmBtnText>
			</ConfirmButton>
		</Container>
	);
}
