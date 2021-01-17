import React from 'react';
import {
	Container,
	Title,
	EarthImg,
	DonateBtn,
	DonateBtnText,
	BannerContainer,
	Footer,
	ExtraText,
} from './styles';
import YoungEarth from '../../../assets/young-earth.png';
import { useNavigation } from '@react-navigation/native';

export default function Donate() {
	const navigation = useNavigation();
	const navigateToDonationForm = () => {
		navigation.navigate('DonationForm');
	};

	return (
		<Container>
			<BannerContainer>
				<Title>Mude o futuro dos jovens.</Title>
				<EarthImg source={YoungEarth} />
			</BannerContainer>

			<Footer>
				<DonateBtn onPress={navigateToDonationForm}>
					<DonateBtnText>Fazer uma doação</DonateBtnText>
				</DonateBtn>
				<ExtraText>Conheça os nossos centros de coleta</ExtraText>
			</Footer>
		</Container>
	);
}
