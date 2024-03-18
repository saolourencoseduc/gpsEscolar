import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 70,
      },
    boxTitle:{
        alignItems:"flex-start",
        justifyContent:"center",
        display: "flex",
    },
    textTitle:{
        color:"#069AC9",
        fontSize:24,
        fontWeight:"bold",
        marginLeft: 50,
        marginTop: 50,
    },
    image:{
        width: 75,
        height: 75,
        marginLeft: 300,
        display: "flex",
        float: "left",
        marginRight: 10,
    },
    formContext:{
        width:"100%",
        height:"100%",
        bottom:0,
        backgroundColor: "#ffffff",
        alignItems:"center",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
    },
    form: {
        width:"100%",
        height:"auto",
        marginTop:10,
        padding:10,
    },
    formLabel:{
        color:"#000000",
        fontSize:15,
        peddingLeft:20,
    },
    formInput:{
        width:"90%",
        height:35,
        margin: 10,
        borderRadius: 50,
        backgroundColor: "#9BD7E9",
        paddingLeft:10,
    },
    buttonEffect:{
        borderRadius: 50,
        alignItems:"center",
        justifyContent:"center",
        width:"90%",
        backgroundColor:"#069AC9",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        margin: 30,
    },
    buttonText:{
        fontSize:20,
    },
    errorMessage:{
        fontSize:10,
        color: "#FF0000",
    }
});

export default styles 
