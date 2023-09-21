import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { images } from './images';

export default function App() {
  return (
    <View style={styles.container}>  
     <StatusBar style="auto" />
     <View style={styles.logo}>
        <Image style={styles.logoText} source={images.logo} resizeMode='contain' resizeMethod='resize'/>
        <Text style={styles.logoName}>
          GoRestaurant
        </Text>
        <Text style={styles.logoSlogan}>
          Comida italina, sim!
        </Text>
     </View>
      <View style={styles.boxText}>
          <Text style={styles.bigText}>
            Uma verdadeira experiência italiana.
          </Text>
      </View>
      <View style={styles.boxButton}>
        <TouchableOpacity style={styles.buttonOpacity}>
          <Text style={styles.textButton}>
            Entrar no retaurante
          </Text>
          <View style={styles.imageBoxEntrar}>
            <Image source={images.entrar} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#c72828",
    flex: 1,
    padding: 25,
  },
  logo: {
    height: 300,
    justifyContent: "center",
  },
  logoText: {
    width: 50,
  },
  boxText:{
  },
  bigText: {
    fontSize: 70,
    color:"white",
    lineHeight: 77,
  
  },
  boxButton: {
    height: 50,
    position: "absolute",
    width: "100%",
    bottom: 30,
    left: 25,
  },
  buttonOpacity: {
    backgroundColor:"#ffb84d",
    height: 48,
    borderRadius: 8,
    justifyContent:"space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  textButton: {
    color:"#7a1818",
    flex: 1,
    textAlign:"center",
    fontWeight: "bold",
    fontSize: 18,
  },
  imageBoxEntrar: {
    backgroundColor: "#FFC46B",
    height: "100%",
    width: 50,
    justifyContent: "center",
    alignItems:"center",
    borderTopRightRadius: 8,
    borderBottomRightRadius:8,
  },
  logoName: {
    fontSize: 32,
    color: "white",
    fontWeight:"bold",
  },
  logoSlogan: {
    fontsize: 12,
    color: "#FFB1B1"
  },
});
