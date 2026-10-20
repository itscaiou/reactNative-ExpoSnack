import React, { useState } from 'react';
import { View, TextInput, Text, Button, ScrollView, TouchableOpacity } from
'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons' ;
import AsyncStorage from '@react-native-async-storage/async-storage';
import style from './Styles'

function TelaContato({navigation}){

  const [text_nome, setText_nome] =
    useState('');

  const [text_email, setText_email]
    = useState('');

  const [message, setMessage] =
    useState('');

  const salvarContato = async () => {
    try {
    const contato = {
    nome: text_nome,
    email: text_email,
    mensagem: message,
    };
    await AsyncStorage.setItem('@contato', JSON.stringify(contato));
    alert('Sucesso', 'Mensagem salva localmente!');
    setText_nome('');
    setText_email('');
    setMessage('');
    } catch (error) {
    alert('Erro', 'Não foi possível salvar os dados');
    console.error(error);
    }
  };



 return (
 <View style={style.container_contato}>

  <View style={style.container_icone_voltar_contato}>
    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
    <MaterialCommunityIcons name='keyboard-backspace' size={40}
    color='white'/>
    </TouchableOpacity>
  </View>

  <View style={style.view_texto_contato}>
    <Text style={style.texto_contato}> Entre em Contato
    Conosco </Text>
  </View>

  <View>
    <TextInput
    style={style.input_contato}
    placeholder="Digite seu nome..."
    placeholderTextColor = 'gray'
    value={text_nome}
    onChangeText={setText_nome}
    />
  </View>

  <TextInput
    style={style.input_contato}
    placeholder="Digite seu email..."
    placeholderTextColor = 'gray'
    value={text_email}
    onChangeText={setText_email}
  />

  <ScrollView
    style={style.input_contato_scrowlView}>
    <TextInput
    placeholder="Escreva a sua mensagem aqui..."
    placeholderTextColor = 'gray'
    value={message}
    onChangeText={setMessage}
    multiline={true}
    numberOfLines={15}
    style={style.textarea}
    />
  </ScrollView>

  <View>
    <Button title="Enviar" onPress={() => {alert('Mensagem Enviada!')}} />
  </View>


 </View>
 );
}

export default TelaContato;