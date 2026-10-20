import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from
'react-native';
import style from './Styles'

function Login({navigation}){

  const [text_email, setText_email] =
    useState('');

  const [text_senha, setText_senha]
    = useState('');

 return (
 <View style={style.container_principal}>

  <View style={style.container_login}>
    <Text style={style.texto_titulo}> Login
    </Text>
  </View>

  <View style={style.container_dados}>
    <TextInput
    style={style.input_email}
    placeholder="E-mail"
    placeholderTextColor = 'gray'
    value={text_email}
    onChangeText={setText_email}
    />

  <TextInput
    style={style.input_email}
    placeholder="Senha"
    placeholderTextColor = 'gray'
    value={text_senha}
    onChangeText={setText_senha}
  />
  
  <Text style={style.texto_esqsenha}>Esqueceu a senha?</Text>
  </View>

  <View style={style.container_rodape}>
    <TouchableOpacity style={style.botao}
    onPress={() => navigation.navigate('Usuario', {mensagem: text_email})}>
    <Text style={style.texto_botao}>
    Entrar </Text>
    </TouchableOpacity>
  </View>

 </View>
 );
}

export default Login;