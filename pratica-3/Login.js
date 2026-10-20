import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, Button, Switch } from
'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import style from './Styles'

function Login(){

  const [text_email, setText_email] =
    useState('');

  const [text_senha, setText_senha]
    = useState('');

  const [lembrarEmail, setLembrarEmail] = useState(false);

  useEffect(() => { async function carregarEmail(){
    const emailSalvo = await AsyncStorage.getItem('text_email');
      if(emailSalvo !== null){
        setText_email(emailSalvo);
        setLembrarEmail(true);
        }
      }
  carregarEmail();
  }, []);

  async function entrar(){
    if(lembrarEmail){
      await AsyncStorage.setItem('text_email', text_email)
    } else {
      await AsyncStorage.removeItem('text_email');
    }
  }
  

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
  </View>

  <View style={style.container_lembrarEmail}>
      <Switch 
      value={lembrarEmail}
      onValueChange={setLembrarEmail}
      />
      <Text style={style.texto_basic}> Lembrar meu e-mail?</Text>
  
  </View>

  <View style={style.container_rodape}>
    <Button title='Entrar' onPress={entrar} />
  </View>

 </View>
 );
}

export default Login;