import React, { useState } from "react"
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native"
import styles from "./style"

export default function Form() {

const [nome, setNome]= useState(null)
const [cpf, setCpf]= useState(null)
const [data, setData]= useState(null)
const [genero, setGenero]= useState(null)
const [deficiencia, setDeficiencia]= useState(null)
const [responsavel, setResponsavel]= useState(null)
const [parentesco, setParentesco]= useState(null)
const [errorMessage, setErrorMessage]= useState(null)

    
function preencherForms(){
    if (nome != null && cpf != null && data != null && genero != null && deficiencia != null && responsavel != null && parentesco != null){
        // Chamar função que armazena os dados do usuário no banco de dados do BACK END
        // Adicionar rota para a próxima página FRONT END
        setErrorMessage(null)
        alert("Dados preenchidos com sucesso!")
    } else {
        setErrorMessage("Campo obrigatório*")
        // alert("Preencha todos os campos solicitados!")
    }
}

    return (

        
        <View style={styles.boxTitle}>
        <Image source={require("../../../assets/logo.png")} style={styles.image}></Image>

            <View style={styles.formContext}>
                <View style={styles.form}>

                <Text style={styles.formLabel}>Nome Completo:</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                onChangeText={setNome}
                style={styles.formInput}
                keyboardType="text"
                placeholder= "Digite seu nome completo"
                ></TextInput>

                <Text style={styles.formLabel}>CPF:</Text>
                <TextInput 
                onChangeText={setCpf}
                style={styles.formInput}
                keyboardType="number-pad"
                placeholder= "012.345.678-90"
                ></TextInput>

                <Text style={styles.formLabel}>Data de Nascimento:</Text>
                <TextInput 
                onChangeText={setData}
                style={styles.formInput}
                keyboardType="number-pad"
                placeholder= "DD/MM/AAAA"
                ></TextInput>

                <Text style={styles.formLabel}>Gênero:</Text>
                <TextInput 
                onChangeText={setGenero}
                style={styles.formInput}
                keyboardType="number-pad" 
                type="date"
                ></TextInput>

                <Text style={styles.formLabel}>Deficiência:</Text>
                <TextInput 
                onChangeText={setDeficiencia}
                style={styles.formInput}
                keyboardType="numeric"
                ></TextInput>

                <Text style={styles.formLabel}>Nome do responsável:</Text>
                <TextInput
                onChangeText={setResponsavel} 
                style={styles.formInput}
                keyboardType="text"
                ></TextInput>
                
                <Text style={styles.formLabel}>Grau de parentesco:</Text>
                <TextInput
                onChangeText={setParentesco} 
                style={styles.formInput}
                keyboardType="web-search"
                ></TextInput>

                <TouchableOpacity style={styles.buttonEffect}
                    onPress={() =>  preencherForms()}
                ><Text style={styles.buttonText}>Próximo</Text>
                </TouchableOpacity>
  
                </View>
            </View>
        </View>
        
    );
                
}
