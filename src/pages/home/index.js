import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    
    <View style={styles.container}>
      <Image
        source={require("./assets/sr.png")}
        style={styles.logo}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}> Bora nessa </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginBottom: 20, // Alterei para um valor fixo
    width: 220,
    height: 200
  },
  button: {
    backgroundColor: "#1976D2",
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: -250, // Ajuste a margem inferior para separar do logo
    marginTop: 180, // Removi o marginTop anterior
    borderRadius: 8,
    borderWidth: 0.5, // Define a largura da borda
    borderColor: 'white',     
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: '',
  }
});
