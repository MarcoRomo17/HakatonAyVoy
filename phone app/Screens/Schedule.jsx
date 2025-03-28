import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import {
   StyleSheet,
   View,
   Image,
   Pressable,
   Text,
   ScrollView,
} from "react-native";


const Schedule = () => {
   const routeSchedule = [
      {
         route: "Ruta 24",
         hour: "7: 55 am",
      },
      {
         route: "Ruta 24",
         hour: "10: 45 am",
      },
      {
         route: "Ruta 19",
         hour: "1: 15 pm",
      },
   ];

   const getDate = () => {
      const fecha = new Date();

      const year = fecha.getFullYear();
      const month = String(fecha.getMonth() + 1).padStart(2, "0");
      const day = String(fecha.getDate()).padStart(2, "0");

      return `${day}-${month}-${year}`;
   };

   const navigation = useNavigation();
   return (
      <View style={styles.container}>
         {/* Navbar */}
         <ScrollView>
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

            <View style={styles.contentContainer}>
               <Text style={styles.title}>Horarios</Text>
               <Text style={styles.subTitle}>
                  {" "}
                  Fecha: {getDate()}{" "}
                  <FontAwesome name="calendar" size={24} color="#009BB0" />{" "}
               </Text>

               {routeSchedule.map(({ route, hour }, index) => (
                  <View key={index} style={styles.routerContainer}>
                     <Text style={styles.miniTextRoute}>{route}</Text>
                     <Text style={styles.miniTextHour}>{hour}</Text>
                  </View>
               ))}
            </View>
         </ScrollView>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: "center",
      backgroundColor: "#252569",
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

   title: {
      justifyContent: "center",
      color: "#01e5fd",
      fontSize: 35,
      textAlign: "center",
      fontWeight: 500,
      marginBottom: 10,
   },

   contentContainer: {
      display: "flex",
      justifyContent: "center",
   },

   routerContainer: {
      marginLeft: "5%",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#ca2193",
      width: "90%",
      marginBottom: 20,
      borderRadius: 20,
      padding: 10,
   },

   subTitle: {
      fontSize: 22,
      fontWeight: "bold",
      color: "#009BB0",
      alignSelf: "flex-start",
      marginLeft: 25,
      marginBottom: 15,
   },

   miniTextRoute: {
      color: "white",
      fontSize: 22,
      textAlign: "center",
      fontWeight: "bold",
   },

   miniTextHour: {
      color: "white",
      fontSize: 18,
      textAlign: "center",
   },
});

export default Schedule;
