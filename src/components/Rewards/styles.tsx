import styled from 'styled-components/native';

export const Container = styled.View`
	display: flex;
	flex-direction: column;
	flex: 1;
	background-color: #e4e4e4;
`;

export const Header = styled.View`
	display: flex;
	flex-direction: column;
	height: 200px;
	background-color: #437f5b;
`;

export const TitleContainer = styled.View`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin: 40px 25px 15px 25px;
`;

export const ProfilePic = styled.Image`
	width: 53px;
	height: 53px;
	background-color: gray;
	border-radius: 50px;
`;

export const Title = styled.Text`
	font-size: 30px;
	color: white;
	font-weight: bold;
`;

export const PointsContainer = styled.View`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	margin-left: 25px;
`;

export const Points = styled.Text`
	font-size: 25px;
	margin-left: 7px;
	color: white;
`;

export const ProgressBarContainer = styled.View`
	display: flex;
	flex-direction: row;
	margin: 10px 25px 0px 25px;
	background-color: #adadad;
	width: 360px;
	height: 15px;
	border-radius: 12px;
`;

export const Progress = styled.View`
	position: absolute;
	background-color: #18b397;
	width: 180px;
	height: 15px;
	border-radius: 12px;
`;

export const RewardsContainer = styled.View`
	display: flex;
	flex-direction: column;
	background-color: #dbdbdb;
	height: 73%;
`;

export const RewardsTitle = styled.Text`
	margin: 30px 0px 0px 25px;
	font-size: 25px;
	color: black;
	font-weight: bold;
`;

export const ListItemContainer = styled.TouchableOpacity`
	background-color: #dbdbdb;
	padding: 15px;
	margin: 0px 25px 10px 25px;
	border-width: 1px;
	border-color: black;
	border-radius: 12px;
	display: flex;
	flex-direction: row;
	background-color: whitesmoke;
`;

export const ItemImg = styled.Image`
	background-color: #437f5b;
	width: 93px;
	height: 93px;
`;

export const ItemTextContainer = styled.View`
	display: flex;
	flex-direction: column;
	width: 220px;
	/* background-color: red; */
`;

export const ItemTitle = styled.Text`
	margin-left: 25px;
	font-size: 22px;
	color: black;
	font-weight: bold;
`;

export const ItemDescription = styled.Text`
	margin-left: 25px;
	font-size: 16px;
	color: black;
`;

export const CostContainer = styled.View`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	margin-top: 15px;
	flex: 1;
	height: 20px;
	align-items: center;
`;

export const CostText = styled.Text`
	font-size: 16px;
	color: black;
	margin-left: 7px;
	font-weight: bold;
`;

export const ItemInfoContainer = styled.View`
	display: flex;
	flex-direction: column;
`;

export const ModalContainer = styled.View`
	display: flex;
	flex-direction: column;
	background-color: white;
	width: 330px;
	align-self: center;
	height: 430px;
	border-radius: 12px;
	justify-content: space-around;
	align-items: center;
`;

export const ConfirmText = styled.Text`
	font-size: 22px;
	color: black;
	margin-left: 7px;
	font-weight: bold;
`;

export const RewardText = styled.Text`
	font-size: 22px;
	color: black;
	margin-left: 7px;
`;

export const ValueWrapper = styled.View`
	display: flex;
	flex-direction: row;
`;
export const ButtonWrapper = styled.View`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	width: 100%;
`;

export const ConfirmButton = styled.TouchableOpacity`
	width: 120px;
	height: 30px;
	background-color: rgba(200, 214, 49, 1);
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	border-radius: 12px;
	padding: 25px;
	align-self: center;
	margin-bottom: 20px;
`;
export const CancelButton = styled.TouchableOpacity`
	width: 120px;
	height: 30px;
	background-color: transparent;
	border-color: black;
	border-width: 1px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	border-radius: 12px;
	padding: 25px;
	align-self: center;
	margin-bottom: 20px;
`;

export const ConfirmBtnText = styled.Text`
	color: white;
	font-size: 17px;
	text-align: center;
`;

export const CancelBtnText = styled.Text`
	color: black;
	font-size: 17px;
	text-align: center;
`;
