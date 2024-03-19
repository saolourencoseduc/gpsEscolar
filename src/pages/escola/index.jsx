import React, { useState } from "react"
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native"
import styles from "./style"

export default function CadastroEscola() {

const [escola, setEscola]= useState(null)
const [errorMessage, setErrorMessage]= useState(null)

    
function preencherEscola(){
    if (escola != null){
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

        <View style={styles.boxTitle}>
        {/* <Image source={require("../../../assets/logo.png")} style={styles.image}></Image> */}

            <View style={styles.formContext}>
                <View style={styles.form}>

                <Text style={styles.formLabel}>Escola:</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                onChangeText={setEscola}
                style={styles.formInput}
                keyboardType="web-search"
                placeholder= "Digite o nome da sua escola"
                // Também deve ser um campo de seleção com puxando os dados de escola cadastrados no banco de dados
                ></TextInput>


                <TouchableOpacity style={styles.buttonEffect}
                    onPress={() =>  preencherEscola()}
                ><Text style={styles.buttonText}>Ok</Text>
                </TouchableOpacity>
  
                </View>
            </View>
        </View>
        
    );
                
}