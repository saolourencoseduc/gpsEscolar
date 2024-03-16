import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';

const CadastroScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSendCode = () => {
    // TODO: Implementar a lógica para enviar o código de verificação
    alert(`Enviando código para ${phoneNumber}`);
  };

  return (
    <View style={styles.container}>
      <Text> Digite seu número </Text>
      
      <TextInput
        style={styles.input}
        placeholder="Digite seu número"
        onChangeText={setPhoneNumber}
        value={phoneNumber}
      />
      <Text style={styles.infoText}>
        Enviaremos um código por mensagem de texto para verificar seu telefone.
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleSendCode}>
        <Text style={styles.buttonText}>Enviar código</Text>
      </TouchableOpacity>
      <Text style={styles.alternativeText}>Ou conectar por e-mail</Text>
      <Text style={styles.legalText}>
        Utilizar o nosso aplicativo significa que você concorda com nossos Termos de Uso e Política de Privacidade.
      </Text>
    </View>
  );
};

export  function App2() {
  const [user, setUser] = useState<{
    email: string;
    name: string;
    picture: string;
  } | null>(null);

  if (user) {
    return (
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 20,
            marginBottom: 10,
          }}
        >
          Seja Bem Vindo ✌
        </Text>
        <Image
          source={{
            uri: user.picture,
            width: 70,
            height: 70,
          }}
          borderRadius={40}
        />
        <Text
          style={{
            marginTop: 10,
            fontSize: 17,
          }}
        >
          {user.name}
        </Text>
        <Text
          style={{
            marginBottom: 20,
          }}
        >
          {user.email}
        </Text>
        <Button title='Sair' onPress={() => setUser(null)} />
        <StatusBar style='auto' />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login com Google</Text>
      <Button title='Entrar' disabled={false} onPress={() => {}} />
      <StatusBar style='auto' />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
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
  infoText: {
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
  alternativeText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
  legalText: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 10,
  },
});

export default CadastroScreen;