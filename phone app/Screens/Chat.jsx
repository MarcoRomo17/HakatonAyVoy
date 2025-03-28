import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from '@expo/vector-icons/Ionicons';
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Image, Pressable, ScrollView, TouchableOpacity, TextInput, Text  } from "react-native";
import { useEffect, useState } from 'react';
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Modal from 'react-native-modal';


const Chat = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const navigation = useNavigation();

  const [route, setRoute] = useState({})

  const [PreMessage, setPreMessage] = useState([
    "Ruta Bloqueada",
    "Camion Lleno"
  ])
  const [text, setText] = useState("")
  const [message, setMessage] = useState([])

  useEffect(()=>{
    getMesssages()
    getRoute()

    const interval = setInterval(() => {
      getMesssages(); 
    }, 100); 
  
    return () => clearInterval(interval);
    
  },[])
  
  const getMesssages  = async () =>{
    try {
      const res = await axios.post("/msg/getMsg", { rutaID:await AsyncStorage.getItem("ruta") })
      const msg = res.data.mensajesDeLaRuta
     
      setMessage([...msg])

    } catch (error) {
      console.log("Ocurrio un error al obtener mensajes:", error)
    }
  }

  const getRoute = async ()=>{
    try {
      const res = await axios.get("/ruta/getOne", { rutaID:await AsyncStorage.getItem("ruta") })
      const route = res.data.RutaEncontrarda
      setRoute(route)
      console.log(res)
    } catch (error) {
      console.log("Ocurrio un error al obtener la ruta:", error)
    }
  }
 
  const sendmessage = async (message = null)=>{
    let sendText = text || message

    if(sendText){
      const data= {
        conductor: await AsyncStorage.getItem("_id"),
        ruta: await AsyncStorage.getItem("ruta"),
        texto: sendText,
        fecha: getDate()
      }
      try {
       await axios.post("/msg/create", data)
       getMesssages()

       setModalVisible(false)
       setText("")
        
      } catch (error) {
        console.log("Ocurrio un error enviar mensaje:", error)
      }
      //setMessage([...message, Addmessage])
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
      
            <Text style={styles.Title}>CHAT RUTA: {route.numeroRuta}</Text>
            <ScrollView style={styles.ChatContainer}>
            
            {
                  message.map((m)=>(
                <TouchableOpacity
                key={m._id}
                onPress={() => navigation.navigate('ChatProfil', { user: m })}> 
                  <Text style={styles.MessageContainer}>
                    <Text style={styles.Name}>{m.conductor.name} </Text>
                    <Text style={styles.Camion}>(Una ruta delante): </Text>
                    <Text style={styles.Text}>{m.texto} </Text>
                  
                  </Text>
                <Text style={styles.Date}>{m.fecha} </Text>
                </TouchableOpacity>
                  ))
                }
              </ScrollView>
              
              <Modal isVisible={isModalVisible}>
                <View>
                  {
                    PreMessage.map((m, i)=>(

                      <TouchableOpacity 
                        key={i} 
                        style={styles.PreMessageContainer} 
                        onPress={() => {
                          sendmessage(m)
                        }}>
                        <Text>{m}</Text>
                      </TouchableOpacity>

                    ))
                  }
                </View>
              </Modal>




              <TouchableOpacity style={styles.PreMessageButton} onPress={toggleModal}>
                  <Text style={styles.PreMessageButton.text} >()</Text>
                </TouchableOpacity>

              <View style={styles.inputContainer}>
                <TextInput value={text} onChangeText={(text) => setText(text)} style={styles.Input} placeholder='Escribir Mensaje'></TextInput>
                <TouchableOpacity style={styles.SendButton} onPress={sendmessage}>
                  <Text style={styles.SendButton.text} >Enviar</Text>
                  <Ionicons name="send-sharp" size={16} color="white" />
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
      borderRadius: 0,
      backgroundColor: "#252569",
      padding: 10,
      marginBottom: 10
    },

    MessageContainer:{
      fontSize: 18,
      padding: 15,
      marginVertical: 5,
      borderWidth: 1,
      backgroundColor: "#fff",
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      borderTopRightRadius: 20,
      borderBottomRightRadius: 20,
      alignSelf: "flex-start",
    },
    Name:{
      color: "#000",
      fontWeight: 500,
    },
    Camion:{
      color: "#e55a14"
    },
    Text: {
      color: "black",
    },
    Date: {
      fontSize: 12, 
      color: '#ddd', 
      paddingLeft: 20,
      marginBottom: 7,
  
    },
    Admin:{
      color: "#d4e300"
    },
    
    inputContainer:{
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: "white",
      borderRadius:0,
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
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: "#0dc8e2",
      padding: 5,
      justifyContent: "center",
      alignItems: "center",
      width: "23%",

      text : {
        color: 'white',
        paddingRight: 5,
        fontSize: 16
      }
    },
    PreMessageButton:{
      borderRadius: "100%",
      backgroundColor: "white",
      width: "50",
      height: "50",
      alignSelf: "flex-end",
      alignItems: "center",
      marginBottom: "10",
      marginRight: "5",


      text : {
        padding: 20,
        fontSize: 10
      }
    },
    Modal:{
      backgroundColor: "white"
    },
    
    PreMessageContainer:{
      fontSize: 18,
      padding: 15,
      marginVertical: 5,
      borderWidth: 1,
      backgroundColor: "#fff",
      borderRadius: 20,
      alignSelf: "center",
      width: "70%"
    },
  });

export default Chat;
