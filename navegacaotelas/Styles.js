import { StyleSheet } from 'react-native';
const cor_fundo = '#000000';
const styles = StyleSheet.create({
 container_principal:{
  flex:1,
  backgroundColor:'#000000'
 },
 container_infos:{
   flex:1,
   paddingLeft: 20,
   justifyContent: 'center',
   alignItems: 'center',
 },
 texto_apresentacao:{
   color: 'white',
   fontWeight: 'bold',
   fontSize: 25,
 },
 texto:{
   color: 'white',
   fontWeight: 'bold',
 },
 texto_instituicao:{
 color:'#87cefa',
 textDecorationLine:'underline',
 },
 texto_basic:{
   color: 'white'
 },
  imagem:{
    width: 150,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 300,
    borderWidth: 3,
    borderColor:'purple'
  },
  container_redes:{
    flex: 0.5,
    flexDirection:'row',
    justifyContent: 'center',
    paddingTop: 50,
  },
  botao:{
    backgroundColor: 'white',
    width: 100,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  texto_botao:{
    fontSize: 15,
    fontWeight: 'bold',
  },
   container_rodape:{
    flex:.3,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    paddingBottom: 30,
  },
  container_contato:{
    flex: 1,
    padding: 20,
    backgroundColor: cor_fundo,
  },
  container_icone_voltar_contato:{
    alignItems:'flex-start',
  },
  view_texto_contato:{
    alignItems: 'center',
  },
  texto_contato:{
    color:'white',
    fontWeight: 'bold',
    padding: 10,
    fontSize: 20,
  },
  input_contato:{
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    color: 'white',
  },
  input_contato_scrowlView:{
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
  textarea: {
    height: 150,
    textAlignVertical: 'top',
    marginBottom: 15,
    color: 'white',
  },
});
export default styles;