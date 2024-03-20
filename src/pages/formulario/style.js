import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    image:{
        width: 100,
        height: 100,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    form: {
        width:"100%",
        height:"auto",
        marginTop:20,
    },
    title:{
        color:"#0382C1",
        fontSize:24,
        fontWeight:"bold",
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
        textAlign: 'center',
    },
    infoText: {
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 10,
        paddingHorizontal: 50,
    },

    textLabel:{
        color:"#000000",
        fontSize: 16,
        margin: 5,
        marginStart: 20,
    },
    input:{
        width: '90%',
        height: 40,
        borderColor: '#069AC9',
        borderWidth: 1.3,
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
        alignSelf:'center',
    },
    errorMessage:{
        fontSize:10,
        color: "#FF0000",
        marginStart: 20,
        marginBottom:3,
    }
});

export default styles 