import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
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
        marginTop:10,
        padding:10,
    },
    // boxTitle:{
    //     alignItems:"flex-start",
    //     justifyContent:"center",
    //     display: "flex",
    // },
    textTitle:{
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
    // formContext:{
    //     width:"100%",
    //     height:"100%",
    //     bottom:0,
    //     backgroundColor: "#ffffff",
    //     alignItems:"center",
    //     borderTopLeftRadius:30,
    //     borderTopRightRadius:30,
    // },
    formLabel:{
        color:"#000000",
        fontSize:15,
        margin: 5,
        marginStart: 15,
    },
    input:{
        width: '95%',
        height: 40,
        borderColor: '#069AC9',
        borderWidth: 1.3,
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    errorMessage:{
        fontSize:10,
        color: "#FF0000",
        marginStart: 15,
    }
});

export default styles 