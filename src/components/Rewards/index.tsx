import React from 'react';
import { View, Text, Image } from 'react-native';
import {
	Container,
	Header,
	Title,
	TitleContainer,
	ProfilePic,
	Points,
	PointsContainer,
	ProgressBarContainer,
	Progress,
} from './styles';

import Coin from '../../../assets/coin.png';
import ProfilePicture from '../../../assets/profile-pic.png';

export default function Rewards() {
	return (
		<Container>
			<Header>
				<TitleContainer>
					<Title>Seus pontos</Title>
					<ProfilePic source={ProfilePicture} />
				</TitleContainer>
				<PointsContainer>
					<Image source={Coin} />
					<Points>1450 pts</Points>
				</PointsContainer>
				<ProgressBarContainer>
					<Progress />
				</ProgressBarContainer>
			</Header>
		</Container>
	);
}
