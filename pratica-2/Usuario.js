import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from
'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons' ;
import style from './Styles'

function Usuario({route, navigation}){

  const { mensagem } = route.params || {mensagem: ''};

  return(
    <View style={style.container_principal}>

      <View style={style.container_cabecalho_usuario}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={style.container_icone}>
        <MaterialCommunityIcons name='keyboard-backspace' size={40}
        color='white'/>
        </TouchableOpacity>
        <Text style={style.texto_titulo}>Área do Usuário</Text>
      </View>

      <View style={style.container_principal_usuario}>

        <Text style={style.texto_basic}>E-Mail: <Text style={style.texto_basic}>{mensagem}</Text></Text>

      </View>
      
    </View>
  );
}

export default Usuario;