import { StyleSheet } from 'react-native';
const cor_fundo = '#000000';
const styles = StyleSheet.create({
  container_principal: {
    flex: 1,
    backgroundColor: '#000000',
  },
  container_titulo: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    paddingTop: 60,
  },
  container_dados: {
    flex: 1,
    padding: 30,
    backgroundColor: cor_fundo,
  },
  texto_titulo: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
  },
  texto_sub: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  texto: {
    color: 'white',
    fontWeight: 'bold',
  },
  texto_esqsenha: {
    color: '#ffffff',
    textAlign: 'right',
  },
  texto_basic: {
    color: 'white',
  },
  botao: {
    backgroundColor: 'white',
    width: 150,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  texto_botao: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  container_rodape: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    paddingBottom: 20,
  },
  container_cabecalho_usuario: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  texto_email: {
    color: 'white',
    fontWeight: 'bold',
    padding: 10,
    fontSize: 20,
  },
  input_email: {
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    color: 'white',
  },
  container_principal_usuario: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container_icone:{
    position: 'absolute',
    left: 10,
  },
  container_lembrarEmail:{
    flex: .1,
    flexDirection: 'row',
    padding: 20,
  }
});
export default styles;
