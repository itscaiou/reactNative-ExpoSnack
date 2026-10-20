import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
 container_principal:{
  flex:1,
  backgroundColor:'#000000'
 },
 container_up:{
   flex: .1,
   paddingTop: 40,
   justifyContent: 'center',
   alignItems: 'center',
 },
 container_infos:{
   flex:1,
   paddingLeft: 20,
   justifyContent: 'center',
   alignItems: 'Left',
 },
 container_inforows:{
   flexDirection: 'row',
   alignItens: 'center',
   gap: 10,
   paddingTop: 10,
 },
 container_rodape:{
  flex:1,
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
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
 texto_rodape:{
   textAlign: 'center',
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
    justifyContent: 'center'
  }
});
export default styles;