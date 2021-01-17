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

export default function Donate() {
	return (
		<Container>
			<BannerContainer>
				<Title>Mude o futuro dos jovens.</Title>
				<EarthImg source={YoungEarth} />
			</BannerContainer>

			<Footer>
				<DonateBtn>
					<DonateBtnText>Fazer uma doação</DonateBtnText>
				</DonateBtn>
				<ExtraText>Conheça os nossos centros de coleta</ExtraText>
			</Footer>
		</Container>
	);
}
