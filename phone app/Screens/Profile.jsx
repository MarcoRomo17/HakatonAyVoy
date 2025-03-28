import React, { useState, useEffect } from "react";
import {
    Text,
    View,
    ScrollView,
    Pressable,
    Image,
    StyleSheet,
} from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProfileCard = ({ value }) => (
    <View style={styles.card}>
        <Text style={styles.cardTitle}>{value}</Text>
    </View>
);

const Profile = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        lastName: "",
    });

    useEffect(() => {
        getUser();
    }, []);

    const navigation = useNavigation();

    const getUser = async () => {
        const sUser = {
            name: await AsyncStorage.getItem("name"),
            email: await AsyncStorage.getItem("email"),
            lastNameP: await AsyncStorage.getItem("ap"),
            lastNameM: await AsyncStorage.getItem("am"),
        };
        setUser(sUser);
    };
    return (
        <View style={styles.container}>
            {/* Navbar */}
            <ScrollView contentContainerStyle={styles.contentContainer}>
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

                {/* Contenido del perfil */}
                <Text style={styles.title}>Mi Perfil</Text>
                <Image
                    source={require("../Images/IconUser.png")}
                    style={styles.userImg}
                />
                <Text style={styles.personalInfo}>Información personal</Text>

                <Text style={styles.subtitle}>Nombre:</Text>
                <ProfileCard label="Nombre" value={user.name} />

                <Text style={styles.subtitle}>Apellido Paterno:</Text>
                <ProfileCard label="Apellido" value={user.lastNameP} />

                <Text style={styles.subtitle}>Apellido Materno:</Text>
                <ProfileCard label="Apellido" value={user.lastNameM} />

                <Text style={styles.subtitle}>Correo:</Text>
                <ProfileCard label="Correo" value={user.email} />

                <Text style={styles.miniText}>
                    Si necesita actualizar su correo electrónico o contraseña,
                    por favor, comuníquese con el personal autorizado.
                </Text>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#252569",
    },
    contentContainer: {
        flexGrow: 1,
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

    userImg: {
        width: 100,
        height: 100,
        borderRadius: 100,
        marginBottom: 20,
    },

    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#01e5fd",
        marginBottom: 20,
    },

    personalInfo: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#009BB0",
        alignSelf: "flex-start",
        marginLeft: 25,
        marginBottom: 15,
    },

    subtitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
        alignSelf: "flex-start",
        marginLeft: 25,
        marginBottom: 15,
    },
    card: {
        backgroundColor: "#141433",
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
        marginHorizontal: 25,
        width: "90%",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#B9BAB3",
    },

    miniText: {
        width: "90%",
        alignSelf: "flex-start",
        textAlign: "center",
        fontSize: 15,
        color: "#fff",
        marginLeft: 25,
        marginBottom: 15,
    },
});

export default Profile;
