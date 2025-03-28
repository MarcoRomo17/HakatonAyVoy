import {
    Image,
    Pressable,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import { TabNavigator } from "../Components/Tabs";
import { useEffect, useState } from "react";
import axios from "axios";

const Points = () => {
    
    const [points, setPoints] = useState("0")

    useEffect(()=>{
        getPoints()
      },[])
    

    const getPoints = async () =>{
        try {
            const res = await axios.post("http://172.16.32.77:4010/conductor/signin", {email: await AsyncStorage.getItem("email"), password:await AsyncStorage.getItem("password") })
            const puntos = res.data.user.puntos
            setPoints(puntos)
            console.log(puntos)
        } catch (error) {
            console.log("Ocurrio un error al obtener los puntos:", error)
        }
    }

    const navigation = useNavigation();
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

            <View style={styles.contentContainer}>
                <Text style={styles.title}>Mis Puntos</Text>

                <View style={styles.infoContainer}>
                    <View>
                        <Text style={styles.totalPoints}>{points}</Text>
                    </View>

                    <TouchableOpacity style={styles.infoBtn}>
                        <Text style={styles.buttonText}>
                            ¿Cómo se obtienen los puntos?
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.tabs}>
                <TabNavigator />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#252569",
    },
    contentContainer: {
        justifyContent: "flex-start",
        alignItems: "center",
        paddingHorizontal: 20,
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
        fontSize: 24,
        fontWeight: "bold",
        color: "#01e5fd",
        marginBottom: 10,
        alignSelf: "flex-start",
    },
    infoContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        marginBottom: 20,
    },
    totalPoints: {
        color: "white",
        fontWeight: "bold",
        marginHorizontal: 15,
        fontSize: 42,
    },
    infoBtn: {
        width: 200,
        height: 60,
        backgroundColor: "#7950b6",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
        paddingHorizontal: 20,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        textAlign: "center",
    },
    tabs: {
        flex: 1,
        width: "100%",
    },
});

export default Points;
