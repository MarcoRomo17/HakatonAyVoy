import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Image, Pressable, ScrollView, TouchableOpacity, TextInput, Text  } from "react-native";
import { useEffect, useState } from 'react';
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Chat = () => {
  const navigation = useNavigation();

  const [text, setText] = useState("")
  const [message, setMessage] = useState([])

  useEffect(()=>{
    getMesssages()
    
  },[])
  
  const getMesssages  = async () =>{
    try {
      const res = await axios.post("http://172.16.32.77:4010/msg/getMsg", { rutaID:await AsyncStorage.getItem("ruta") })
      const msg = res.data.mensajesDeLaRuta
     
      setMessage([...msg])

    } catch (error) {
      console.log("Ocurrio un error al obtener mensajes:", error)
    }
  }
 
  const sendmessage = async ()=>{
    if(text){
      const data= {
        conductor: await AsyncStorage.getItem("_id"),
        ruta: await AsyncStorage.getItem("ruta"),
        texto: text,
        fecha: getDate()
      }
      try {
       await axios.post("http://172.16.32.77:4010/msg/create", data)
       getMesssages()
      } catch (error) {
        console.log("Ocurrio un error enviar mensaje:", error)
      }
      //setMessage([...message, Addmessage])
      setText("")
    }
  }
  
  const getDate = () => {
    const fecha = new Date();
  
    const año = fecha.getFullYear();
    const mes = String(fecha.getMonth() + 1).padStart(2, '0');
    const día = String(fecha.getDate()).padStart(2, '0');
    const horas = String(fecha.getHours()).padStart(2, '0');
    const minutos = String(fecha.getMinutes()).padStart(2, '0');
    const segundos = String(fecha.getSeconds()).padStart(2, '0');
  
    return `${año}-${mes}-${día} ${horas}:${minutos}:${segundos}`;
  };
  
  
    return (
        <View style={styles.container}>
            {/* Navbar */}
            <View style={styles.toppingContainer}>
                <Image
                    source={require("../Images/AY_VOY_logo.png")}
                    style={styles.logo}
                    resizeMode="contain"
                />
                <Pressable
                    style={styles.menuButton}
                    onPress={() => {
                        navigation.dispatch(DrawerActions.toggleDrawer());
                    }}
                >
                    <FontAwesome5 name="bars" size={30} color="white" />
                </Pressable>
            </View>
      
            <Text style={styles.Title}>CHAT RUTA: 50</Text>
            <ScrollView style={styles.ChatContainer}>
            
            {
                  message.map((m)=>(
                <TouchableOpacity
                key={m._id}
                onPress={() => navigation.navigate('ChatProfil', { user: m })}> 
                <Text style={styles.Date}>{m.fecha} </Text>
                  <Text style={styles.MessageContainer}>
                    <Text style={styles.Name}>{m.conductor.name}</Text>
                    <Text style={styles.Camion}>(Una ruta delante): </Text>
                    <Text style={styles.Text}>{m.texto} </Text>
                  
                  </Text>
                </TouchableOpacity>
                  ))
                }
              </ScrollView>

              <View style={styles.inputContainer}>
                <TextInput value={text} onChangeText={(text) => setText(text)} style={styles.Input} placeholder='Escribir Mensaje'></TextInput>
                <TouchableOpacity style={styles.SendButton} onPress={sendmessage}>
                  <Text>Enviar</Text>
                </TouchableOpacity>
              </View>

    </View>
    );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#252569',
    },
    contentContainer: {
      flexGrow: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    toppingContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '95%',
      marginTop: 20,
      paddingHorizontal: 20,
    },
    logo: {
      width: 150,
      height: 150,
    },
  
    menuButton: {
      marginLeft: 20,
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },


    Header:{
      flexDirection: "row",
      padding: 10
    },
    Title:{
      color: "#01e5fd",
      fontSize: 30,
      fontWeight: "bold",
      marginBottom: 20,
      alignSelf: "center",
    },
    BackButton: {
      width: "10%",
      paddingBottom: 10,
      justifyContent: "center",
      alignItems: "center",
    },
  
    ChatContainer:{
      borderRadius: 10,
      backgroundColor: "#252569",
      padding: 10,
      marginBottom: 10
    },
    MessageContainer:{
      fontSize: 20,
      padding: 7,
      marginVertical: 5,
      borderWidth: 1,
      backgroundColor: "#252599",
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      borderTopRightRadius: 20,
      borderBottomRightRadius: 20,
      alignSelf: "flex-start",
    },
    Name:{
      color: "#ca2193"
    },
    Camion:{
      color: "#e55a14"
    },
    Text: {
      color: "white",
    },
    Date: {
      fontSize: 10, 
      color: '#888', 
      paddingLeft: 20,
  
    },
    Admin:{
      color: "#d4e300"
    },
    
    inputContainer:{
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: "white",
      borderRadius:50,
      padding: 5,
      marginBottom: 2
    },
    Input:{
      borderRadius: 100,
      backgroundColor: "white",
      width: "70%",
      fontSize: 15
    },
    SendButton:{
      borderRadius: 100,
      borderWidth: 1,
      backgroundColor: "white",
      padding: 2,
      justifyContent: "center",
      alignItems: "center",
      width: "20%"
    },
  });

export default Chat;
