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
        marginStart: 20,
    },
    infoText: {
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 10,
        paddingHorizontal: 50,
    },
    hiperlinkText: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 10,
        color: "#0382C1",
        textDecorationLine: 'underline',
      },
      legalText: {
        fontSize: 12,
        textAlign: 'center',
        alignSelf:'center',
        position: 'absolute',
        bottom: 0,
        margin: 20,
        color: 'gray',
      },
      errorMessage:{
        fontSize:10,
        color: "#FF0000",
        marginStart: 20,
        marginBottom:3,
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
    }
    // formContext:{
    //     width:"100%",
    //     height:"100%",
    //     bottom:0,
    //     backgroundColor: "#ffffff",
    //     alignItems:"center",
    //     borderTopLeftRadius:30,
    //     borderTopRightRadius:30,
    // },
    // boxTitle:{
    //     alignItems:"flex-start",
    //     justifyContent:"center",
    //     display: "flex",
    // },

});

export default styles 