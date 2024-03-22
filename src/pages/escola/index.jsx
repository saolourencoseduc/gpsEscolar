import React, { useState } from "react"
import { View, Text, TextInput, Image } from "react-native"
import CustomButton from '../../components/customButton/index';
import styles from "./style"

export default function CadastroEscola() {

const [escola, setEscola]= useState(null)
const [serie, setSerie]= useState(null)
const [turma, setTurma]= useState(null)

const [errorMessage, setErrorMessage]= useState(null)

    
function preencherEscola(){
    if (escola != null && serie != null && turma != null){
        // Chamar função que armazena os dados do usuário no banco de dados do BACK END
        // Adicionar rota para a próxima página - escola - FRONT END
        setErrorMessage(null)
        alert("Dados preenchidos com sucesso!")
    } else {
        setErrorMessage("Campo obrigatório*")
        // alert("Preencha todos os campos solicitados!")
    }
}

    return (

        <View style={styles.container}>
        {/* <Image source={require("../../../assets/logo.png")} style={styles.image}></Image> */}

        <Text style={styles.title}>Escola</Text>

        
                <View style={styles.form}>

                <Text style={styles.textLabel}>Escola:</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                onChangeText={setEscola}
                style={styles.input}
                keyboardType="web-search"
                placeholder= "Digite o nome da sua escola"
                // Também deve ser um campo de seleção com puxando os dados de escola cadastrados no banco de dados
                ></TextInput>

                <Text style={styles.textLabel}>Série:</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                onChangeText={setSerie}
                style={styles.input}
                keyboardType="web-search"
                placeholder= "Ex.: 8 ano"
                // Também deve ser um campo de seleção com puxando os dados de escola cadastrados no banco de dados
                ></TextInput>

                <Text style={styles.textLabel}>Turma:</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                onChangeText={setTurma}
                style={styles.input}
                keyboardType="web-search"
                placeholder= "Ex.: A"
                // Também deve ser um campo de seleção com puxando os dados de escola cadastrados no banco de dados
                ></TextInput>

                <CustomButton
                title={"Ok"}
                onPress={() =>  preencherEscola()}
                />
  
                </View>
            </View>        
    );
                
}