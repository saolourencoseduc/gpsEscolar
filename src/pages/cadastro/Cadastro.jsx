import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { AuthContext, useAuth } from '../../context'; 
import CustomButton from '../../components/customButton/index';

const CadastroScreen = () => {
  const {handleLogin} = useAuth() 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    if (!email || !password) {
      Alert.alert('Por favor, preencha o e-mail e senha.');
      return;
    }else
      handleLogin({
        email:email,
        password:password
      })
    // logica da API COM VICTOR   
    Alert.alert('Cadastro realizado com sucesso!');
  };

  return (
    <View style={styles.container}>
      {/* <CadastroLogo /> Componente separada para a logo */}
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


const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#fff',
  },
  title:{
    color:"#0382C1",
    fontSize:24,
    fontWeight:"bold",
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 40,
    textAlign: 'center',
},
  input:{
    width: '90%',
    height: 40,
    borderColor: '#069AC9',
    borderWidth: 1.3,
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    alignSelf:'center',
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
    alignSelf:'center',
    position: 'absolute',
    bottom: 0,
    margin: 20,
    color: 'gray',
  },
  logo: { //VER
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});

export default CadastroScreen;