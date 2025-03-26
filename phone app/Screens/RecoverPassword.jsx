import {
    KeyboardAvoidingView,
    Image,
    StyleSheet,
    Text,
    View,
    TextInput,
    Pressable,
} from "react-native";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useNavigation } from "@react-navigation/native";

const RecoverPassword = () => {
    const navigation = useNavigation()
    
    const recoverPass = () => {
        navigation.navigate('Login')
    } 


    return (
        <KeyboardAvoidingView style={styles.container}>
            <Image
                style={styles.logo}
                source={require("../Images/AY_VOY_logo.png")}
                resizeMode="contain"
            />

            <Text style={styles.title}>Recuperar Contraseña</Text>
            <Text style={styles.text}>
                Ingresa tu correo electrónico. Te enviaremos un correo para que
                puedas recuperar tu contraseña.
            </Text>

            <View style={styles.inputContainer}>
            <FontAwesome5 name="lock" size={24} color="#ca2193" />

                <TextInput
                    style={styles.input}
                    placeholder="Correo Electrónico"
                    placeholderTextColor="#444"
                />
            </View>

            <View>
                <Pressable style={styles.buttonRecover} onPress={recoverPass} >
                    <Text style={styles.buttonRecover.buttonText} >Enviar correo</Text>
                </Pressable>
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#252569",
        alignItems: "center",
    },

    title: {
        top: 0,
        fontSize: 24,
        marginBottom: 20,
        fontWeight: '500',
        color: "#01e5fd",
    },

    logo: {
        top: 50,
        height: 100,
        marginVertical: 100,
    },

    text: {
        color: "#fff",
        fontSize: 16,
        width: "83%",
        textAlign: "center",
    },

    inputContainer: {
        top: 25,
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

    buttonRecover: {
        width: 200,
        top: 0,
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
    },
});

export default RecoverPassword;
