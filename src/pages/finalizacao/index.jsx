import { StyleSheet, View, Image, Text } from 'react-native';
import CustomButton from '../../components/customButton/index';

export default function Finalizacao() {
  return (
    
    <View style={styles.container}>
      
      <Text style={styles.title}>Cadastro reaizado com sucesso!</Text>

      <Image
        source={require("../../../assets/logo.png")}
        style={styles.logo}
      />

      <CustomButton
      title={'Iniciar'}
    //   onPress= Ir para a tela de inicio do apicativo
      />

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
  logo: { //Pretendo criar um componente para a logo também.
    marginBottom: 100, 
    width: 320,
    height: 300
  },
  title:{
    color:"#0382C1",
    fontSize:24,
    fontWeight:"bold",
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 40,
    textAlign: 'center',
    margin: 50,
}
});
