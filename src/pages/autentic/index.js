import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

const App = () => {
  const [remainingTime, setRemainingTime] = useState(20);

  useEffect(() => {
    const interval = setInterval(() => {
      if (remainingTime > 0) {
        setRemainingTime(remainingTime - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [remainingTime]);

  const handleRequestNewCode = () => {
    // TODO: Implementar a lógica para solicitar um novo código
    alert('Solicitando novo código...');
    setRemainingTime(20);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/background.png')}
        style={styles.background}
      />
      <Text style={styles.title}>Digite o código</Text>
      <TextInput
        style={styles.input}
        placeholder="Insira o código recebido"
      />
      <Text style={styles.remainingText}>
        {remainingTime > 0 ? `Você poderá solicitar o código novamente em ${remainingTime} segundos` : ' '}
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleRequestNewCode}>
        <Text style={styles.buttonText}>Solicitar novo código</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  remainingText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#000',
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default App;
