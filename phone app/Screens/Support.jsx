import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Image, Pressable, Text, Alert } from "react-native";

const Support = () => {
    function WhatsappSupport() {
        Alert.alert("Mandando a Whatsapp");
    }

    function CallSupport() {
        Alert.alert("Mandando a Teléfono");
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

            <View>
                <Text style={styles.title}>Soporte Técnico</Text>
                <Text style={styles.description}>
                    ¡Hola de nuevo operador! Estamos aquí para ayudarte en lo
                    que necesites y responer tus dudas sobte AYVOY:
                </Text>
            </View>

            <View>
                <Text style={styles.subtitle}>Dudas Frecuentes:</Text>
            </View>
            <View style={styles.questionContainer}>
                <Text style={styles.questionText}>
                    ¿Cómo puedo ver el mapa?
                </Text>
            </View>

            <View style={styles.questionContainer}>
                <Text style={styles.questionText}>
                    ¿Cómo puedo comunicarme con mis compañeros?
                </Text>
            </View>

            <View style={styles.questionContainer}>
                <Text style={styles.questionText}>
                    ¿Cómo puedo ganar puntos?
                </Text>
            </View>

            <View>
                <Text style={styles.description}>
                    {" "}
                    Si tienes alguna otra duda, puedes contactarnos por mensaje
                    de Whatsapp, o si lo prefieres hacer una llamada y
                    responderemos todas tus dudas.{" "}
                </Text>
            </View>

            <View style={styles.miniContainer}>
                <Pressable
                    style={styles.WhatsContainer}
                    onPress={WhatsappSupport}
                >
                    <FontAwesome name="whatsapp" size={30} color="white" />
                    <Text style={styles.miniTitle}>Enviar Whatsapp</Text>
                </Pressable>

                <Pressable style={styles.callContainer} onPress={CallSupport}>
                    <FontAwesome5 name="phone-alt" size={30} color="white" />
                    <Text style={styles.miniTitle}>Realizar Llamada</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#252569",
        justifyContent: "flex-start",
        alignItems: "center",
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
    },

    description: {
        marginVertical: 18,
        color: "#fff",
        fontSize: 16,
        width: 350,
        textAlign: "center",
    },

    subtitle: {
        color: "#ca2193",
        right: 70,
        fontSize: 24,
        fontWeight: 500,
    },

    questionContainer: {
        backgroundColor: "#10132E",
        padding: 16,
        borderRadius: 20,
        marginVertical: 10,
        width: "90%",
        height: "auto",
    },

    questionText: {
        color: "white",
        textAlign: "center",
        fontSize: 20,
    },

    miniContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "90%",
    },

    miniTitle: {
        color: "#fff",
        fontSize: 18,
        marginHorizontal: 15,
        fontWeight: 500,
        alignSelf: "center",
        marginBottom: 10,
    },

    callContainer: {
        flexDirection: "row",
        width: "45%",
        padding: 20,
        height: "auto",
        backgroundColor: "#784fba",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
    },

    WhatsContainer: {
        width: "45%",
        flexDirection: "row",
        padding: 25,
        height: "auto",
        backgroundColor: "#2abb44",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
    },
});

export default Support;
