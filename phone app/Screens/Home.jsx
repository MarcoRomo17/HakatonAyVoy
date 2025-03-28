import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import StatBar from "../Components/StatusBar";

const Home = () => {
    const getData = async (key) => {
        try {
            const value = await AsyncStorage.getItem(key);
            if (value !== null) {
                return value;
            }
        } catch (error) {
            console.error("Error al recuperar los datos", error);
        }
    };

    const navigation = useNavigation();

    return (
        <ScrollView style={styles.container}>
            <StatBar />
            <View style={styles.contentContainer}>
                {/* Menú */}
                <View style={styles.toppingContainer}>
                    <Image
                        source={require("../Images/AY_VOY_logo.png")}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                    <View style={styles.bellBarsContainer}>
                        <TouchableOpacity style={styles.btnBellBars}>
                            <FontAwesome name="bell" size={30} color="white" />
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.btnBellBars}
                            onPress={() =>
                                navigation.dispatch(
                                    DrawerActions.toggleDrawer()
                                )
                            }
                        >
                            <FontAwesome5 name="bars" size={30} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Botones de ruta */}
                <TouchableOpacity
                    style={styles.routeContainer}
                    onPress={() => navigation.navigate("Schedule")}
                >
                    <View style={styles.routeContent}>
                        <FontAwesome5 name="bus" size={90} color="#fff" />

                        <View style={styles.routeTextContainer}>
                            <Text style={styles.routeTitle}>
                                Siguiente Ruta
                            </Text>
                            <View style={styles.routeDetails}>
                                <Text style={styles.routeText}>Ruta 43</Text>
                                <Text style={styles.routeText}>7:55 am</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

                {/* Contenedor de puntos y chat */}
                <View style={styles.miniContainer}>
                    <TouchableOpacity
                        style={styles.pointsContainer}
                        onPress={() => navigation.navigate("Points")}
                    >
                        <Text style={styles.miniTitle}>Puntos:</Text>
                        <Text style={styles.points}>{getData("puntos")}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.chatContainer}
                        onPress={() => navigation.navigate("Chat")}
                    >
                        <Text style={styles.miniTitle}>Chat</Text>
                        <FontAwesome name="comments" size={60} color="white" />
                    </TouchableOpacity>
                </View>

                {/* Botón del mapa de rutas */}
                <TouchableOpacity
                    style={styles.mapContainer}
                    onPress={() => navigation.navigate("MapRoutes")}
                >
                    <View style={styles.mapContent}>
                        <FontAwesome5
                            name="map-marker-alt"
                            size={65}
                            color="white"
                        />
                        <Text style={styles.mapTitle}>Mapa de Rutas</Text>
                    </View>
                </TouchableOpacity>

                {/* Botón de soporte técnico */}
                <TouchableOpacity
                    style={styles.supportContainer}
                    onPress={() => navigation.navigate("Support")}
                >
                    <View style={styles.supportContent}>
                        <FontAwesome5
                            name="headphones-alt"
                            size={30}
                            color="white"
                        />
                        <Text style={styles.supportTitle}>Soporte Técnico</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#252569",
    },
    contentContainer: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: 100,
    },

    toppingContainer: {
        position: "absolute",
        top: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        width: "90%",
        alignItems: "center",
    },

    logo: {
        width: 150,
        height: 150,
    },

    bellBarsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 20,
    },

    btnBellBars: {
        padding: 10,
        borderRadius: 10,
    },

    routeContainer: {
        marginTop: 40,
        width: "90%",
        padding: 20,
        backgroundColor: "#ca2193",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
    },

    routeTitle: {
        color: "#fff",
        fontSize: 24,
        fontWeight: "bold",
        alignSelf: "center",
    },

    routeContent: {
        flexDirection: "row",
        alignItems: "center",
    },

    routeTextContainer: {
        marginLeft: 15,
        flex: 1,
    },

    routeDetails: {
        marginTop: 5,
    },

    routeText: {
        color: "#fff",
        fontSize: 20,
        textAlign: "center",
    },

    miniContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "90%",
    },

    miniTitle: {
        color: "#fff",
        fontSize: 24,
        fontWeight: "bold",
        alignSelf: "center",
        marginBottom: 10,
    },

    points: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 40,
    },

    pointsContainer: {
        marginTop: 40,
        width: "45%",
        padding: 20,
        height: 150,
        backgroundColor: "#784fba",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
    },

    chatContainer: {
        marginTop: 40,
        width: "45%",
        padding: 20,
        height: 150,
        backgroundColor: "#e55a14",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
    },

    mapContainer: {
        marginTop: 40,
        width: "90%",
        padding: 20,
        height: 200,
        backgroundColor: "#fff325",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
    },

    mapContent: {
        flexDirection: "row",
        alignItems: "center",
    },

    mapTitle: {
        color: "#fff",
        fontSize: 32,
        fontWeight: "bold",
        marginLeft: 20,
    },

    supportContainer: {
        marginTop: 40,
        width: "90%",
        height: 100,
        padding: 20,
        backgroundColor: "#0dc8e2",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
    },

    supportContent: {
        flexDirection: "row",
        alignItems: "center",
    },

    supportTitle: {
        color: "#fff",
        fontSize: 24,
        fontWeight: "bold",
        marginLeft: 20,
    },
});

export default Home;
