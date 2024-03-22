import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    title:{
        color:"#0382C1",
        fontSize:24,
        fontWeight:"bold",
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 40,
        textAlign: 'center',
    },
    textLabel:{
        color:"#000000",
        fontSize: 16,
        margin: 5,
        marginBottom:0,
        marginStart: 20,
    },
    input:{
        width: '90%',
        height: 40,
        borderColor: '#069AC9',
        borderWidth: 1.3,
        borderRadius: 8,
        padding: 10,
        marginBottom: 20,
        alignSelf:'center',
    },
    hiperlinkText: {
        fontSize: 16,
        textAlign: 'center',
        margin: 10,
        color: "#0382C1",
        textDecorationLine: 'underline',
      },
    errorMessage:{
        fontSize:10,
        color: "#FF0000",
        marginStart: 20,
        marginBottom:3,
    }
    
});

export default styles 
