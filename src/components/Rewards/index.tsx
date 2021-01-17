import React from 'react';
import {
	SafeAreaView,
	View,
	FlatList,
	Text,
	Image,
	StatusBar,
} from 'react-native';
import { StyleSheet, Dimensions } from 'react-native';

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
	RewardsContainer,
	RewardsTitle,
	ListItemContainer,
	ItemImg,
	ItemTitle,
	ItemTextContainer,
	ItemDescription,
	CostContainer,
	ItemInfoContainer,
	CostText,
} from './styles';

import Coin from '../../../assets/coin.png';
import ProfilePicture from '../../../assets/profile-pic.png';
import Spotify3x from '../../../assets/spotify-3x.png';

export default function Rewards() {
	const DATA = [
		{
			id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
			title: '3 meses de Spotify',
			description: 'Ouça suas músicas favoritas por três meses!',
		},
		{
			id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
			title: 'R$ 100 no iFood',
			description: 'Pra comer aquele lanche caprichado ;)',
		},
		{
			id: '58694a0f-3da1-471f-bd96-145571e29d72',
			title: '3 meses de Netflix',
			description: 'Pra comer aquele lanche caprichado ;)',
		},
		{
			id: '58694a0f-f3da1-471f-bd96-145571e29d72',
			title: 'R$ 200 na PS Store',
			description: 'Pra comprar aquele jogo que você tava esperando!',
		},

		{
			id: '58694a0f-3hda1-471f-bd96-145571e29d72',
			title: 'Third Item',
			description: 'description',
		},

		{
			id: '58694a0fss-3da1-471f-bd96-145571e29d72',
			title: 'Third Item',
			description: 'description',
		},
	];

	const Item = ({ title, description }: any) => (
		<ListItemContainer>
			<ItemImg source={Spotify3x} />
			<ItemInfoContainer>
				<ItemTextContainer>
					<ItemTitle>{title}</ItemTitle>
					<ItemDescription>{description}</ItemDescription>
				</ItemTextContainer>
				<CostContainer>
					<Image source={Coin} style={{ width: 20, height: 20 }} />
					<CostText>x 400 pts</CostText>
				</CostContainer>
			</ItemInfoContainer>
		</ListItemContainer>
	);
	const renderItem = ({ item }: any) => (
		<Item title={item.title} description={item.description} />
	);

	return (
		<Container>
			<Header>
				<TitleContainer>
					<Title>Seus pontos</Title>
					<ProfilePic source={ProfilePicture} />
				</TitleContainer>
				<PointsContainer>
					<Image source={Coin} style={{ width: 25, height: 25 }} />
					<Points>1450 pts</Points>
				</PointsContainer>
				<ProgressBarContainer>
					<Progress />
				</ProgressBarContainer>
			</Header>
			<RewardsContainer>
				<RewardsTitle>Recompensas</RewardsTitle>
				<View style={styles.container}>
					<FlatList
						data={DATA}
						renderItem={renderItem}
						keyExtractor={(item) => item.id}
					/>
				</View>
			</RewardsContainer>
		</Container>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: StatusBar.currentHeight || 0,
	},

	title: {
		fontSize: 32,
	},
});
