import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useEffect, useState } from "react";
import MapView, { Polyline, Marker } from "react-native-maps";
import SelectDropdown from "react-native-select-dropdown";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";


const MapRoutes = () => {
   const navigation = useNavigation();

   const [message, setMessage] = useState([]);

   const [route, setRoute] = useState([]);
   const [selectedRoute, setSelectedRoute] = useState("");

   useEffect(() => {
      getRoutes();
      getMesssages();

      const interval = setInterval(() => {
         getMesssages();
      }, 1000);

      return () => clearInterval(interval);
   }, []);

   const getMesssages = async () => {
      try {
         const res = await axios.post("/msg/getMsg", {
            rutaID: await AsyncStorage.getItem("ruta"),
         });
         const msg = res.data.mensajesDeLaRuta;

         // Filtrado de mensajes que tienen coordenadas
         const messagesWithCoords = msg.filter(
            (msg) =>
               msg.coordenadas &&
               msg.coordenadas.latitude &&
               msg.coordenadas.longitude
         );

         setMessage([...messagesWithCoords]);
      } catch (error) {
         console.log("Ocurrio un error al obtener mensajes:", error);
      }
   };

   const getRoutes = async () => {
      try {
         const res = await axios.get("/ruta/getAll");
         const routes = res.data.TodasLasRutas;

         const routesWithoutId = routes.map((rout) => ({
            _id: rout._id,
            numeroRuta: rout.numeroRuta,
            coordenadas: rout.coordenadas.map(({ _id, ...coords }) => coords), // Elimina _id de las coordenada
         }));

         setRoute(routesWithoutId);
      } catch (error) {
         console.log("Ocurrio un error enviar mensaje:", error);
      }
   };

   const selectRoutes = [{ title: "24" }, { title: "37" }, { title: "50" }];
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

         <View>
            <Text style={styles.title}>Rutas</Text>
         </View>

         <SelectDropdown
            styles={styles.dropdownStyle}
            data={selectRoutes}
            onSelect={(selectedItem, index) => {
               setSelectedRoute(selectedItem.title);
            }}
            renderButton={(selectedItem, isOpened) => {
               return (
                  <View style={styles.dropdownButtonStyle}>
                     <Text style={styles.dropdownButtonTxtStyle}>
                        {(selectedItem && selectedItem.title) ||
                           "Selecciona una Ruta"}
                     </Text>
                  </View>
               );
            }}
            renderItem={(item, index, isSelected) => {
               return (
                  <View
                     style={{
                        ...styles.dropdownItemStyle,
                        ...(isSelected && {
                           backgroundColor: "#D2D9DF",
                        }),
                     }}
                  >
                     <Text style={styles.dropdownItemTxtStyle}>
                        Ruta: {item.title}
                     </Text>
                  </View>
               );
            }}
            showsVerticalScrollIndicator={false}
            dropdownStyle={styles.dropdownMenuStyle}
         />
         <View style={styles.yellowContainer}>
            <MapView
               style={styles.map}
               showsUserLocation={true}
               initialRegion={{
                  latitude: 21.88234,
                  longitude: -102.28259,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
               }}
            >
               {route.map((r, i) =>
                  selectedRoute == r.numeroRuta ? (
                     <Polyline
                        key={i}
                        coordinates={r.coordenadas}
                        strokeColor="blue"
                        strokeWidth={5}
                     />
                  ) : null
               )}
               {message.map((c, i) => (
                  <Marker
                     key={i}
                     coordinate={{
                        latitude: c.coordenadas.latitude,
                        longitude: c.coordenadas.longitude,
                     }}
                     title={`Mensaje: ${c.texto}`}
                  >
                     <FontAwesome5
                        name="comments"
                        size={30}
                        color="black"
                        solid
                     />
                  </Marker>
               ))}

               <Marker
                  coordinate={{
                     latitude: 21.886085,
                     longitude: -102.250835,
                  }}
                  title="Ubicación actual"
               >
                  <Image
                     source={require("../Images/camionsito.png")}
                     style={{ width: 32, height: 16 }}
                  />
               </Marker>
            </MapView>
         </View>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#252569",
   },

   title: {
      textAlign: "center",
      fontSize: 28,
      fontWeight: "bold",
      color: "#01e5fd",
   },

   yellowContainer: {
      height: "70%",
      borderWidth: 5,
      borderColor: "yellow",
   },
   toppingContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "95%",
      marginTop: 20,
      paddingHorizontal: 20,
   },
   logo: {
      width: 150,
      height: 150,
   },

   menuButton: {
      marginLeft: 20,
      flexDirection: "row",
      justifyContent: "flex-end",
   },
   map: {
      width: "100%",
      height: "100%",
   },

   dropdownButtonStyle: {
      top: 12,
      width: "100%",
      borderEndEndRadius: 10,
      borderTopEndRadius: 10,
      height: 50,
      backgroundColor: "yellow",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 12,
   },
   dropdownButtonTxtStyle: {
      flex: 1,
      fontSize: 18,
      fontWeight: "500",
      color: "#151E26",
   },
   dropdownButtonArrowStyle: {
      fontSize: 28,
   },
   dropdownMenuStyle: {
      backgroundColor: "#E9ECEF",
      width: "100%",
      borderRadius: 8,
   },
   dropdownItemStyle: {
      width: "100%",
      flexDirection: "row",
      paddingHorizontal: 12,
      justifyContent: "center",
      alignItems: "center",
      paddingVertical: 8,
   },
   dropdownItemTxtStyle: {
      flex: 1,
      fontSize: 18,
      fontWeight: "500",
      color: "#151E26",
   },
   dropdownItemIconStyle: {
      fontSize: 28,
      marginRight: 8,
   },
});

export default MapRoutes;
