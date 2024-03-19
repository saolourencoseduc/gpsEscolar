import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { AuthContext, useAuth } from '../../context';
import CustomButton from '../../components/customButton/index';


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
      <Text> Digite seu número:</Text>
      
      <TextInput
        style={styles.input}
        placeholder="(81) 99874-5423"
        onChangeText={(t)=>setPhoneNumber(Number(t))}
      />

      <Text style={styles.infoText}>
        Enviaremos um código por mensagem de texto para verificar seu telefone.
      </Text>

      <CustomButton
      title={'Enviar código'}
      onPress={handleSubmit}
      />

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
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  textTitle:{
    color:"#0382C1",
    fontSize:24,
    fontWeight:"bold",
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
},
  input: {
    width: '80%',
    height: 50,
    borderColor: '#069AC9',
    borderWidth: 1.3,
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10,
    paddingHorizontal: 50,
  },
  hiperlinkText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
    color:"#0382C1",
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
});

export default CadastroScreen;