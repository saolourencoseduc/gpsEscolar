import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { AuthContext, useAuth } from '../../context';

const CadastroScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const {handleLogin} = useAuth()



  const handleSubmit = ()=>{
    if(!phoneNumber || !(typeof phoneNumber === 'number')){
      Alert.alert("Por favor digite seu número")
    }else{
      
      handleLogin({
        phone:phoneNumber
      })
    }

  }
  
  return (
    <View style={styles.container}>
      <Text> Digite seu número </Text>
      
      <TextInput
        style={styles.input}
        placeholder="Digite seu número"
        onChangeText={(t)=>setPhoneNumber(Number(t))}
      />
      <Text style={styles.infoText}>
        Enviaremos um código por mensagem de texto para verificar seu telefone.
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Enviar código</Text>
      </TouchableOpacity>

      <Text style={styles.alternativeText}>Ou conectar por e-mail</Text>
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