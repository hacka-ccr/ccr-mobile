import styled from 'styled-components/native';

export const Container = styled.View`
	display: flex;
	flex-direction: column;
	justify-content: center;
	flex: 1;
	background-color: #275e4d;
`;

export const EarthImg = styled.Image`
	position: absolute;
	left: 20px;
	width: 550px;
	height: 550px;
`;

export const BannerContainer = styled.View`
	display: flex;
	flex-direction: column;
	flex: 5;
	justify-content: center;
`;

export const Title = styled.Text`
	font-size: 35px;
	color: white;
	margin-left: 25px;
	font-weight: bold;
	width: 100px;
`;

export const Footer = styled.View`
	display: flex;
	flex-direction: column;
	flex: 1;
`;

export const DonateBtn = styled.TouchableOpacity`
	width: 200px;
	height: 30px;
	background-color: rgba(200, 214, 49, 0.486);
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	border-radius: 12px;
	padding: 25px;
	align-self: center;
`;

export const DonateBtnText = styled.Text`
	color: white;
	font-size: 20px;
	text-align: center;
`;

export const ExtraText = styled.Text`
	color: white;
	font-size: 15px;
	text-align: center;
	margin-top: 10px;
`;
