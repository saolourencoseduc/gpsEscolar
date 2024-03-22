<<<<<<< Updated upstream
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';


const CadastroScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSendCode = () => {
    // TODO: Implementar a lógica para enviar o código de verificação
    alert(`Enviando código para ${phoneNumber}`);
=======
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert, Button } from 'react-native';
import { AuthContext, useAuth } from '../../context'; 
import CustomButton from '../../components/customButton/index';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

const CadastroScreen = () => {
  const { handleLogin } = useAuth();
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  const navigation = useNavigation();

  GoogleSignin.configure({
    webClientId: '1059865455099-g6kuuen0e1rpae0v253lhe89p3fb8sbk.apps.googleusercontent.com', 
  });

  const onGoogleButtonPress = async () => {
    try {
      // Verifique se o dispositivo suporta o Google Play
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

      // Obtenha o token de identificação do usuário
      const { idToken } = await GoogleSignin.signIn();

      // Crie uma credencial do Google com o token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Faça login do usuário com a credencial
      const user = await auth().signInWithCredential(googleCredential);
      setUser(user); // Atualize o estado do usuário

      const uid = user.uid;
      const userRef = firestore().collection('users').doc(uid);

      // Verifique se o usuário já se logou antes
      const userDoc = await userRef.get();
      if (userDoc.exists) {
        // Verifique se o campo "firstLogin" existe
        if (userDoc.data().hasOwnProperty('firstLogin')) {
          // Se o campo "firstLogin" existe, o usuário já se logou antes
          navigation.navigate('Home');
        } else {
          // Se o campo "firstLogin" não existe, é a primeira vez que o usuário se loga
          await userRef.update({
            firstLogin: true, // Adicione o campo "firstLogin" com o valor "true"
          });
          navigation.navigate('Home'); // Direcione para a tela de Cadastro para completar o perfil
        }
      } else {
        // Crie um novo documento no banco de dados para o usuário
        await userRef.set({
          email: user.email,
          name: user.displayName,
          photoURL: user.photoURL,
          lastLogin: new Date(),
          firstLogin: true, // Adicione o campo "firstLogin" com o valor "true"
        });
        navigation.navigate('Home'); // Direcione para a tela de Cadastro para completar o perfil
      }
    } catch (error) {
      console.error(error); // Registre o erro para depuração
      const errorMessage = error.message.includes('auth/user-not-found') ? 'Usuário não encontrado. Por favor, cadastre-se.' : 'Erro ao entrar com Google. Tente novamente.';
      Alert.alert('Erro:', errorMessage); // Exiba uma mensagem de erro amigável ao usuário
    }
>>>>>>> Stashed changes
  };

  // Gerencie as mudanças de estado do usuário
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <View style={styles.container}>
<<<<<<< Updated upstream
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
=======
      {/* ... Inclua seus outros componentes aqui ... */}

      <CustomButton title={'Entrar com Google'} onPress={onGoogleButtonPress} />

      <Text style={styles.hiperlinkText}>Ou conectar por e-mail</Text>
    

      {/* ... Resto do seu código ... */}
    </View>
  );
};
  
>>>>>>> Stashed changes

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