import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, TouchableOpacity} from
'react-native';
import style from './Styles'

import { db } from './fireBaseConfig';

function cardapio(){

  const [text_produto, set_textProduto] = useState('');

  const [text_categoria, set_textCategoria] = useState('');

  const [text_preco, set_textPreco] = useState('');

  const [text_qtd, set_textQtd] = useState('');

  const enviarCadastro = async () => {
    if (text_produto && text_categoria && text_preco && text_qtd){
      const novoCadastro = {
        produto: text_produto,
        categoria: text_categoria,
        preco: text_preco,
        quantidade: text_qtd,
        data : new Date().toISOString()
        };

        try {
        console.log('Firestore DB:', db);
        await db.collection('T197_24MAB').add(novoCadastro);
        alert('Mensagem enviada com sucesso!');
        set_textProduto('');
        set_textCategoria('');
        set_textPreco('');
        set_textQtd('');
        } catch (error) {
        alert('Erro ao enviar: ' + error.message);
        }
      } else{
        alert('Por favor, preencha todos os campos.');
      }
    };

  return(
    <View style={style.container_principal}>

    <View style={style.container_titulo}>
    <Text style={style.texto_titulo}>Meu Cardápio</Text>
    <Text style={style.texto_sub}>Cadastro de produtos</Text>
    </View>

    <View style={style.container_dados}>
    <View>
    <Text style={style.texto}>Nome do Produto</Text>
    <TextInput
      style={style.input_email}
      placeholder="Ex: Hambúrguer Artesanal, Pizza de Calabresa"
      placeholderTextColor = 'gray'
      value={text_produto}
      onChangeText={set_textProduto}
    />
    </View>

    <View>
    <Text style={style.texto}>Categoria</Text>
    <TextInput
      style={style.input_email}
      placeholder="Ex: Hambúrguer, Pizza..."
      placeholderTextColor = 'gray'
      value={text_categoria}
      onChangeText={set_textCategoria}
    />
    </View>

    <View>
    <Text style={style.texto}>Preço</Text>
    <TextInput
      style={style.input_email}
      placeholder="Ex: 12.99; 15.50..."
      placeholderTextColor = 'gray'
      value={text_preco}
      onChangeText={set_textPreco}
    />
    </View>

    <View>
    <Text style={style.texto}>Quantidade Disponível</Text>
    <TextInput
      style={style.input_email}
      placeholder="Ex: 6; 7..."
      placeholderTextColor = 'gray'
      value={text_qtd}
      onChangeText={set_textQtd}
    />
    </View>
    </View>

    <View style={style.container_rodape}>
    <TouchableOpacity style={style.botao} onPress = {enviarCadastro}>
    <Text style={style.texto_botao}>Cadastrar Produto</Text>
    </TouchableOpacity>
    </View>

    </View>
  );
}
export default cardapio;