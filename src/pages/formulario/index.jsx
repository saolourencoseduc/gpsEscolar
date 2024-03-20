import React, { useState } from "react";
import { View, Text, TextInput, Image, ScrollView, Alert } from "react-native";
import styles from "./style";
import CustomButton from '../../components/customButton/index';


export default function Form() {

    const [nome, setNome] = useState(null);
    const [cpf, setCpf] = useState(null);
    const [data, setData] = useState(null);
    const [genero, setGenero] = useState(null);
    const [deficiencia, setDeficiencia] = useState(null);
    const [responsavel, setResponsavel] = useState(null);
    const [parentesco, setParentesco] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    function preencherForms() {
        if (nome != null && cpf != null && data != null && genero != null && deficiencia != null && responsavel != null && parentesco != null) {
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
                        onChangeText={setCpf}
                        style={styles.input}
                        keyboardType="numeric"
                        placeholder="012.345.678-90"
                    />

                    <Text style={styles.textLabel}>Data de Nascimento:</Text>
                    <TextInput 
                        onChangeText={setData}
                        style={styles.input}
                        keyboardType="numeric"
                        placeholder="DD/MM/AAAA"
                    />

                    <Text style={styles.textLabel}>Gênero:</Text>
                    <TextInput 
                        onChangeText={setGenero}
                        style={styles.input}
                        keyboardType="default"
                        placeholder="Masculino/Feminino"
                    />

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

                    <CustomButton
                    title={'Próximo'}
                    onPress={() =>  preencherForms()}
                    ></CustomButton>

                    

                </View>
           
            </ScrollView>
            
        </View>
    );                
}

