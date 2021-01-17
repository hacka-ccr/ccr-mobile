import React, { useState } from 'react';
import {
	SafeAreaView,
	View,
	FlatList,
	Text,
	Image,
	StatusBar,
} from 'react-native';
import {
	ConfirmText,
	RewardText,
	ValueWrapper,
	ConfirmBtnText,
	ConfirmButton,
	ButtonWrapper,
	CancelButton,
	CancelBtnText,
} from './styles';
import { StyleSheet, Dimensions } from 'react-native';
import Modal from 'react-native-modal';

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
	ModalContainer,
} from './styles';

import Coin from '../../../assets/coin.png';
import ProfilePicture from '../../../assets/profile-pic.png';
import Spotify3x from '../../../assets/spotify-3x.png';
import Netflix from '../../../assets/netflix.png';
import Confirmation from '../../../assets/confirmation.gif';

export default function Rewards() {
	const [modalVisible, setModalVisible] = useState(false);
	const [title, setTitle] = useState('');
	const [wallet, setWallet] = useState(1450);
	const [value, setValue] = useState(0);
	const [base64, setBase64] = useState('');
	const [confirmed, setConfirmed] = useState(false);

	const DATA = [
		{
			id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
			title: '3 meses de Spotify',
			value: 500,
			description: 'Ouça suas músicas favoritas por três meses!',
		},
		{
			id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
			title: 'R$ 100 no iFood',
			value: 500,
			description: 'Pra comer aquele lanche caprichado ;)',
		},
		{
			id: '58694a0f-3da1-471f-bd96-145571e29d72',
			title: '3 meses de Netflix',
			value: 500,
			img:
				'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG8AAABuCAYAAAApmU3FAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJnSURBVHgB7dzJURtRFEbhK2aKjR0BCoEQyMBkIBOBUzCZyBmYDAiBECABCqooZhB6DCuGElpx/nfOihLFhk+66n6vuwdVNSlDtlCGTTxw4oETD5x44MQDJx448cCJB048cOKBEw+ceODEAyceOPHAiQdOPHDigRMPnHjgxAMnHjjxwIkHTjxw4oETD5x44MQDJx448cCJB26pYI03Nmq0tvbh708nk/p5cjLX3+5dXNTfy8uiFPfJ+zEY1PYS7j05V5Fjc2d1tXooEm80xWufwK+2ucD6d0TiNbitxcU3r2++8xq52KPNP+vrlV4s3vby8lyjk1QsXoPbWVmp5KJP0kfhR53ReOmjM3557Hfwpy8e71fw9148XhudtJPvWetiV2E3dHR2gffZTgK5LvCG07GZuNPQzWZs4k5DN3iJJ+zd4D3tNISNzq6uYUlbbfECJHDigRMPXBze6cND9VIc3uH9fTeAkWPz3/V19VAk3v/b2+qhSLyDKd5RB6Mz9mizh9EZize+uqr0YvHa2DwI/+7D4bVbuGZt/+amkovGG4d/70UvjzXo5NEZv7aZPDrj8droTF0ui8dro7OtdybWxZbQHughAV+pC7zDu7uZRucxbLx2gddGZ+JyWTc76Yk7Dchr4drSVxuDbRye1fPu+esuQnvtvdr53u75+dPPw5cbT9oNKMOXhwxsAR820K6Fm33Jwr5VXoAETjxw4oETD5x44MQDJx448cCJB048cOKBEw+ceODEAyceOPHAiQdOPHDigRMPnHjgxAMnHjjxwIkHTjxw4oETD5x44MQDJx448cCJB+4RU0t97Zv41qoAAAAASUVORK5CYII=',
			description: 'Pra comer aquele lanche caprichado ;)',
		},
		{
			id: '58694a0f-f3da1-471f-bd96-145571e29d72',
			title: 'R$ 200 na PS Store',
			value: 500,
			description: 'Pra comprar aquele jogo que você tava esperando!',
		},

		{
			id: '58694a0f-3hda1-471f-bd96-145571e29d72',
			title: 'Third Item',
			value: 500,
			description: 'description',
		},

		{
			id: '58694a0fss-3da1-471f-bd96-145571e29d72',
			title: 'Third Item',
			value: 500,
			description: 'description',
		},
	];

	const Item = ({ title, description, id, img }: any) => (
		<ListItemContainer
			onPress={() => {
				let elem = DATA.filter((el) => {
					return el.id === id;
				});

				setTitle(elem[0].title);
				setValue(elem[0].value);
				setBase64(elem[0].img as any);
				setModalVisible(true);
			}}
		>
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
		<Item
			title={item.title}
			description={item.description}
			id={item.id}
			img={item.img}
		/>
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
					<Points>{wallet} pts</Points>
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

			<Modal
				isVisible={modalVisible}
				onBackdropPress={() => setModalVisible(false)}
			>
				<ModalContainer>
					{!confirmed ? (
						<>
							<ConfirmText>Deseja confirmar sua troca?</ConfirmText>
							<RewardText>{title}</RewardText>
							<Image
								source={{ uri: base64 }}
								style={{ width: 100, height: 100 }}
							/>
							<ValueWrapper>
								<Image source={Coin} style={{ width: 20, height: 20 }} />
								<Text style={{ fontSize: 18, marginLeft: 5 }}>{value} pts</Text>
							</ValueWrapper>
							<ButtonWrapper>
								<CancelButton>
									<CancelBtnText>Cancelar</CancelBtnText>
								</CancelButton>
								<ConfirmButton
									onPress={() => {
										setConfirmed(true);
										setWallet((wallet) => wallet - value);
									}}
								>
									<ConfirmBtnText>Confirmar</ConfirmBtnText>
								</ConfirmButton>
							</ButtonWrapper>
						</>
					) : (
						<>
							<ConfirmText>Troca confirmada!</ConfirmText>

							<Image
								source={Confirmation}
								style={{ width: 200, height: 200 }}
							/>
						</>
					)}
				</ModalContainer>
			</Modal>
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
