import { Text, View, Image, Linking, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import styles from './Styles';
function App() {
  return (
  <View style={styles.container_principal}>

  <View style={styles.container_up}>
  <Text style={styles.texto_apresentacao}>Caio Victor</Text>
  </View>

  <View style={styles.container_infos}>

  <View style={styles.container_inforows}>
  <MaterialCommunityIcons name="school" size={40} color='#ffffff'/>
  <Text style={styles.texto_basic}><Text style={styles.texto}>Curso:</Text>{'\n'}Ciência da Computação</Text>
  </View>

  <View style={styles.container_inforows}>
  <MaterialCommunityIcons name="email-outline" size={40} color='#ffffff'/> 
  <Text style={styles.texto_basic}><Text style={styles.texto}>E-mail:</Text>{'\n'}itscaio@edu.unifor.br</Text>
  </View>

  <View style={styles.container_inforows}>
  <MaterialCommunityIcons name="linkedin" size={40} color='#ffffff'/> 
  <Text style={styles.texto_basic}><Text style={styles.texto}>Linkedin:</Text >{'\n'}<Text onPress={() => Linking.openURL('https://br.linkedin.com/in/caio-victor-pereira-de-souza-9b5437284')} style={styles.texto_instituicao}>linkedin.com/caio-victor</Text></Text>
  </View>

  <View style={styles.container_inforows}>
  <MaterialCommunityIcons name="github" size={40} color='#ffffff'/> 
  <Text style={styles.texto_basic}><Text style={styles.texto}>GitHub:</Text> <Text onPress={() => Linking.openURL('https://github.com/itscaiou')} style={styles.texto_instituicao}>{'\n'}https://github.com/itscaiou</Text></Text>
  </View>

  </View>

  <View style={styles.container_rodape}>
  <Text style={styles.texto_rodape}>Universidade de Fortaleza - Av. Washingtom Soares, 1321</Text>
  </View>

  </View>
  );
}
export default App;