import React, { useState } from "react";
import { View, Text, TextInput, Picker, Image, ScrollView, Alert } from "react-native";
import styles from "./style";
import CustomButton from '../../components/customButton/index';

export default function Form() {
  const [nome, setNome] = useState(null);
  const [cpf, setCpf] = useState(null);
  const [data, setData] = useState(''); // Initialize data as an empty string
  const [genero, setGenero] = useState('');
  const [deficiencia, setDeficiencia] = useState(null);
  const [responsavel, setResponsavel] = useState(null);
  const [parentesco, setParentesco] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const generos = [
    { label: 'Masculino', value: 'masculino' },
    { label: 'Feminino', value: 'feminino' },
    { label: 'Não Binário', value: 'naoBinario' },
  ];

  const handleDataChange = (text) => {
    // permitir apenas dígitos e barra
    const cleanText = text.replace(/[^0-9/]/g, '');
    //Limite de 10 caracteres (tamanho máximo para DD/MM/AAAA)
    const limitedText = cleanText.slice(0, 10);
    // Formate a entrada com separadores (opcional)
    const formattedData = limitedText.replace(/^(\d{2})(\d{2})(\d{4})?/, '$1/$2/$3');
    setData(formattedData);
  };
  
  const handleCpfChange = (text) => {
    // Remove  caracteres não numéricos
    const cleanText = text.replace(/[^0-9]/g, '');
    // Aplicar formatação do CPF com pontos e hífen
    const formattedCpf = cleanText.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
  const limitedCpf = formattedCpf.slice(0, 14); // Limita a 14 caracteres (11 dígitos + pontos + hífen)
    setCpf(formattedCpf);
    setCpf(limitedCpf);
  };


  function preencherForms() {
    if (nome != null && cpf != null && data != null && genero !== '' && deficiencia != null && responsavel != null && parentesco != null) {
      // Chamar função que armazena os dados do usuário no banco de dados do BACK END
      // Adicionar rota para a próxima página FRONT END
      setErrorMessage(null);
      alert("Dados preenchidos com sucesso!");
    } else {
      setErrorMessage("Campo obrigatório*");
      Alert.alert("Preencha todos os campos solicitados!");
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <Image source={require("../../../assets/logo.png")} style={styles.image}></Image>
        <Text style={styles.title}>Bem vinde ao seu GPS</Text>
        <Text style={styles.infoText}>Vamos nos conhecer?!</Text>

        <View style={styles.form}>
          <Text style={styles.textLabel}>Nome Completo:</Text>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
          <TextInput
            onChangeText={setNome}
            style={styles.input}
            keyboardType="default"
            placeholder="Digite seu nome completo"
          />

          <Text style={styles.textLabel}>CPF:</Text>
          <TextInput
           value={cpf}
           onChangeText={handleCpfChange}
           placeholder="000.000.000-00"
           style={styles.input}
           keyboardType="numeric"
          />

          <Text style={styles.textLabel}>Data de Nascimento:</Text>
          <TextInput
            value={data}
            onChangeText={handleDataChange}
            placeholder="DD/MM/AAAA"
            style={styles.input}
            />

          <Text style={styles.textLabel}>Gênero:</Text>
          <Picker
            selectedValue={genero} // seleção de genero 
            style={styles.picker}
            onValueChange={(itemValue) => setGenero(itemValue)}
          >
            {generos.map((item) => (
              <Picker.Item label={item.label} value={item.value} key={item.value} />
            ))}
          </Picker>

          <Text style={styles.textLabel}>Deficiência:</Text>
          <TextInput
            onChangeText={setDeficiencia}
            style={styles.input}
            keyboardType="numeric"
            placeholder="Digite a deficiência (opcional)"
          />

          <Text style={styles.textLabel}>Nome do responsável:</Text>
          <TextInput
            onChangeText={setResponsavel}
            style={styles.input}
            keyboardType="default"
            placeholder="Nome do responsável"
          />

          <Text style={styles.textLabel}>Grau de parentesco:</Text>
          <TextInput
            onChangeText={setParentesco}
            style={styles.input}
            keyboardType="default"
            placeholder="Grau de parentesco"
          />

          <CustomButton title={'Próximo'} onPress={() => preencherForms()} />
        </View>
      </ScrollView>
    </View>
  );
}