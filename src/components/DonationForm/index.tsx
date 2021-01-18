import React, { useState } from 'react';
import {
	Container,
	Title,
	Subtitle,
	Input,
	InputDesc,
	ThiccInput,
	CameraBtn,
	CameraBtnText,
} from './styles';
import { Picker } from '@react-native-picker/picker';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';

export default function index() {
	const [name, setName] = useState('');
	const [category, setCategory] = useState('Computadores');
	const [year, setYear] = useState('2021');
	const [description, setDescription] = useState('');

	const navigation = useNavigation();
	const navigateToCamera = () => {
		navigation.navigate('DonationCamera');
	};

	return (
		<Container>
			<Title>Quero doar</Title>
			<Subtitle>Conta pra gente do seu item ;)</Subtitle>
			<InputDesc>Nome</InputDesc>
			<Input
				style={{ paddingHorizontal: 15 }}
				defaultValue={name}
				onChangeText={(text) => setName(text as any)}
				placeholder={'Placa mãe, gabinete...'}
			></Input>

			<InputDesc>Categoria</InputDesc>
			<Picker
				selectedValue={category}
				style={{
					height: 50,
					width: 330,
					color: 'black',
					backgroundColor: 'white',
					marginTop: 5,
				}}
				mode='dropdown'
				onValueChange={(itemValue, itemIndex) => setCategory(itemValue as any)}
			>
				<Picker.Item
					label='Computadores de mesa'
					value='Computadores de mesa'
				/>
				<Picker.Item label='Notebooks' value='Notebooks' />
				<Picker.Item label='Gabinetes' value='Gabinetes' />
				<Picker.Item label='Acessórios' value='Acessórios' />
				<Picker.Item label='Monitores' value='Monitores' />
				<Picker.Item label='Impressoras' value='Impressoras' />
				<Picker.Item label='Outros' value='Outros' />
			</Picker>

			<InputDesc>Ano</InputDesc>
			<Picker
				selectedValue={year}
				style={{
					height: 50,
					width: 330,
					color: 'black',
					backgroundColor: 'white',
					marginTop: 5,
				}}
				mode='dropdown'
				onValueChange={(itemValue, itemIndex) => setYear(itemValue as any)}
			>
				<Picker.Item label='2021' value='2021' />
				<Picker.Item label='2020' value='2020' />
				<Picker.Item label='2019' value='2019' />
				<Picker.Item label='2018' value='2018' />
				<Picker.Item label='2017' value='2017' />
				<Picker.Item label='2016' value='2016' />
				<Picker.Item label='2015' value='2015' />
				<Picker.Item label='2014' value='2014' />
				<Picker.Item label='2013' value='2013' />
				<Picker.Item label='2012' value='2012' />
				<Picker.Item label='2011' value='2011' />
				<Picker.Item label='2010' value='2010' />
				<Picker.Item label='2009' value='2009' />
			</Picker>

			{/* <InputDesc>Descrição</InputDesc>
			<ThiccInput
				style={{ paddingHorizontal: 15 }}
				multiline={true}
				numberOfLines={4}
				defaultValue={description}
				onChangeText={(text) => setDescription(text as any)}
				placeholder={'Insira aqui uma breve descrição sobre seu item...'}
			></ThiccInput> */}

			<View
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignSelf: 'center',
					alignItems: 'flex-end',
					flex: 1,
				}}
			>
				<CameraBtn onPress={navigateToCamera}>
					<Feather
						name='camera'
						size={50}
						color='white'
						style={{ alignSelf: 'center', marginTop: 30 }}
					/>

					<CameraBtnText>
						Agora tira uma foto bem legal pra gente!
					</CameraBtnText>
				</CameraBtn>
			</View>
		</Container>
	);
}
