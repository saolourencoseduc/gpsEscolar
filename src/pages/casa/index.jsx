import React, { useState } from "react"
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native"
import styles from "./style"

export default function CadastroCasa() {

const [casa, setCasa]= useState(null)
const [errorMessage, setErrorMessage]= useState(null)

    
function preencherCasa(){
    if (casa != null){
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

                <Text style={styles.formLabel}>Endereço da sua casa:</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                onChangeText={setCasa}
                style={styles.formInput}
                keyboardType="web-search"
                placeholder= "Digite seu endereço"
                ></TextInput>

                <Text  onPress={() =>  {Linking.openURL('https://reactnative.dev/')}}> 
                Escolher no Mapa</Text>
                {/* Chamar API que leva o app ao maps */}

                <TouchableOpacity style={styles.buttonEffect}
                    onPress={() =>  preencherCasa()}
                ><Text style={styles.buttonText}>Próximo</Text>
                </TouchableOpacity>
  
                </View>
            </View>
        </View>
        
    );
                
}