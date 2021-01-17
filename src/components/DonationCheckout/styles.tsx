import styled from 'styled-components/native';
import { StatusBar } from 'react-native';

export const Container = styled.View`
	display: flex;
	flex-direction: column;
	flex: 1;
	background-color: #275e4d;
	padding-left: 40px;
	padding-right: 40px;
	justify-content: space-between;
`;

export const Wrapper = styled.View``;

export const Title = styled.Text`
	font-size: 35px;
	color: white;
	margin-top: ${(StatusBar.currentHeight as number) + 40}px;
	font-weight: bold;
	width: 250px;
`;

export const Subtitle = styled.Text`
	font-size: 25px;
	color: white;
	margin-top: 20px;
	width: 100%;
`;

export const InputDesc = styled.Text`
	font-size: 15px;
	color: white;
	margin-top: 20px;
`;

export const Input = styled.TextInput`
	font-size: 18px;
	background-color: white;
	margin-top: 7px;
	width: 100%;
	height: 43px;
`;

export const PickerTouchable = styled.TouchableOpacity`
	font-size: 25px;
	background-color: white;
	margin-top: 7px;
	width: 100%;
	height: 43px;
	border-radius: 12px;
`;

export const ThiccInput = styled.TextInput`
	font-size: 18px;
	background-color: white;
	margin-top: 7px;
	width: 100%;
	height: 100px;
`;

export const CameraBtn = styled.TouchableOpacity``;

export const CameraBtnText = styled.Text`
	font-size: 15px;
	font-weight: bold;
	color: white;
	text-align: center;
	margin-top: 10px;
`;

export const ConfirmButton = styled.TouchableOpacity`
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
	margin-bottom: 30px;
`;

export const ConfirmBtnText = styled.Text`
	color: white;
	font-size: 20px;
	text-align: center;
`;
