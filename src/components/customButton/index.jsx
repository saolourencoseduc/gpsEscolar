import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function Button({title, onPress}) {

    return (
        <View>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.buttonText}>{title}</Text>
            </TouchableOpacity>
        </View>
    );                
}

const styles = StyleSheet.create({
    button: {
        
        // width: "80%",
        height: 50,
        // marginBottom: -200, // Ajuste a margem inferior para separar do logo
        // marginTop: 125, // Removi o marginTop anterior

        borderWidth: 0.5, // Define a largura da borda
        borderColor: '#0382C1',     
        borderRadius: 10,
        alignItems: 'center',
        justifyContent:'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        width:"75%",
        backgroundColor:"#069AC9",
        paddingTop: 14,
        paddingBottom: 14,
        paddingHorizontal: 100,
        margin: 20,  
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    }
});