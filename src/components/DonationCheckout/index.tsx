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
			<ConfirmButton onPress={goBackHome}>
				<ConfirmBtnText>Concluir</ConfirmBtnText>
			</ConfirmButton>
		</Container>
	);
}
