import React from 'react';
import { StyleSheet, View } from 'react-native';
import Form from '../../components/forms';

export default function FormCadastro() {
  return (
    <View style={styles.container}>
      <Form/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 70,
  },
});
