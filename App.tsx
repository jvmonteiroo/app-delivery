import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>  
     <StatusBar style="auto" />
     <View style={styles.logo}>
        <Text style={styles.logoText}>
          Logo
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
    borderWidth: 1,
    borderColor: "white",
    justifyContent: "center",
  },
  logoText: {
    color: "white",
  },
  boxText:{
    borderWidth:1,
    borderColor:"white",
  },
  bigText: {
    fontSize: 70,
    color:"white",
    lineHeight: 77,
  
  },
  boxButton: {
    borderWidth: 1,
    borderColor:"white",
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
    justifyContent:"center",
    alignItems: "center",
  },
  textButton: {
    color:"#7a1818"
  }
});
