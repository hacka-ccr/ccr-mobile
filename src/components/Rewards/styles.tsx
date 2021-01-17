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
