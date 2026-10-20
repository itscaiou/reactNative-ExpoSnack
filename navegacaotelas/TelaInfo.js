import { Text, View, Image, Linking, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import styles from './Styles';
function TelaInfo({navigation}) {
  return (
  <View style={styles.container_principal}>

  <View style={styles.container_infos}>
  <Image style={styles.imagem} source={require('./assets/snack-icon.png')}/>

  <Text style={styles.texto_apresentacao}>Caio Victor</Text>

  <Text style={styles.texto_basic}><Text style={styles.texto}>Nome:</Text> Caio</Text>

  <Text style={styles.texto_basic}><Text style={styles.texto}>Idade:</Text> 24</Text>

  <Text style={styles.texto_basic}><Text style={styles.texto}>Ocupação:</Text> Estudante</Text>

  <Text style={styles.texto_basic}><Text style={styles.texto}>Instituição:</Text> <Text onPress={() => Linking.openURL('https://unifor.br/')} style={styles.texto_instituicao}>UNIFOR</Text></Text>

  </View>
  <Text>Universidade de Fortaleza</Text>
  <View style={styles.container_redes}>
    <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/seuLinkedIn/')}>
  <MaterialCommunityIcons name="linkedin" size={50} color="#ffffff"/>
  </TouchableOpacity>

  <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/seuLinkedIn/')}>
  <MaterialCommunityIcons name="github" size={50} color="#ffffff"/>
  </TouchableOpacity>
  </View>

  <View style={styles.container_rodape}>
    <TouchableOpacity style={styles.botao}
    onPress={() => navigation.navigate('Contato')}>
    <Text style={styles.texto_botao}>
    Contato </Text>
    </TouchableOpacity>
  </View>

  </View>
  );
}
export default TelaInfo;