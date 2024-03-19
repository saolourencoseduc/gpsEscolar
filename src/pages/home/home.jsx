import { StyleSheet, View, Image } from 'react-native';
import CustomButton from '../../components/customButton/index';

export default function Home({navigation}) {
  return (
    
    <View style={styles.container}>
      
      <Image
        source={require("../../../assets/logo.png")}
        style={styles.logo}
      />

      <CustomButton
      title={'Cadastro'}
      onPress={() =>{navigation.navigate("Cadastro")}}
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
    marginBottom: 100, // Alterei para um valor fixo
    width: 320,
    height: 300
  },

});
