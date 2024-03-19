import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { AuthContext, useAuth } from '../../context'; 
import CustomButton from '../../components/customButton/index';

const CadastroScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    if (!email || !password) {
      Alert.alert('Por favor, preencha o e-mail e senha.');
      return;
    }

    // logica da API COM VICTOR 
    console.log('Cadastro realizado com sucesso!');
  };

  return (
    <View style={styles.container}>
      <CadastroLogo /> {/* Componente separada para a logo*/}
      <Text style={styles.title}>Cadastro</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
      />

      <CustomButton title={'Entrar'} onPress={handleSubmit} />

      <Text style={styles.hiperlinkText}>Ou conectar por e-mail</Text>

      <Text style={styles.legalText}>
        Utilizar o nosso aplicativo significa que você concorda com nossos Termos de Uso e Política de Privacidade.
      </Text>
    </View>
  );
};

const CadastroLogo = () => {
  <Image source={require('../assets/sr.png')} />
;

  return (
    <Image source={logo} style={styles.logo} />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
  hiperlinkText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
    color: "#0382C1",
    textDecorationLine: 'underline',
  },
  legalText: {
    fontSize: 12,
    textAlign: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    margin: 20,
    marginVertical: 20,
    color: 'gray',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});

export default CadastroScreen;