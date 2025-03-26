import { useNavigation } from "@react-navigation/native";
import {
    View,
    Text,
    KeyboardAvoidingView,
    Image,
    TextInput,
    Pressable,
    StyleSheet,
} from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const Login = () => {
    const navigation = useNavigation();

    function goToRecoverPassword() {
        navigation.navigate("RecoverPassword");
    }

    const goToHome = () => {
        navigation.navigate("Main");
    };

    return (
        <KeyboardAvoidingView style={styles.container}>
            <Image
                style={styles.logo}
                source={require("../Images/AY_VOY_logo.png")}
                resizeMode="contain"
            />

            <Text style={styles.title}>¡Bienvenido!</Text>

            <View style={styles.inputContainer}>
                <FontAwesome5 name="at" size={24} color="#ca2193" />
                <TextInput
                    style={styles.input}
                    placeholder="Correo Electrónico"
                    placeholderTextColor="#444"
                />
            </View>

            <View style={styles.inputContainer}>
                <FontAwesome5 name="lock" size={24} color="#ca2193" />
                <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    placeholder="Contraseña"
                    placeholderTextColor="#444"
                />
            </View>

            <View>
                <Pressable style={styles.buttonLogin} onPress={goToHome}>
                    <Text style={styles.buttonLogin.buttonText}>
                        Iniciar Sesión
                    </Text>
                </Pressable>
            </View>

            <View>
                <Pressable>
                    <Text
                        style={styles.buttonLogin.forgetPasswordText}
                        onPress={goToRecoverPassword}
                    >
                        ¿Olvidaste tu Contraseña?
                    </Text>
                </Pressable>
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#252569",
    },

    logo: {
        height: 100,
        marginVertical: 100,
    },

    title: {
        top: -60,
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#01e5fd",
    },

    inputContainer: {
        top: -25,
        flexDirection: "row",
        alignItems: "center",
        width: "85%",
        height: 55,
        borderColor: "#ccc",
        borderRadius: 15,
        paddingHorizontal: 15,
        marginBottom: 25,
        backgroundColor: "#cbd3d4",
    },

    input: {
        flex: 1,
        fontSize: 16,
        marginHorizontal: 5,
    },

    buttonLogin: {
        width: 230,
        top: -40,
        height: 50,
        backgroundColor: "#7950b6",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
        paddingHorizontal: 20,
        marginVertical: 30,

        buttonText: {
            color: "#fff",
            fontSize: 18,
            fontWeight: "bold",
        },

        forgetPasswordText: {
            top: -45,
            color: "#cbd3d4",
        },
    },
});

export default Login;
