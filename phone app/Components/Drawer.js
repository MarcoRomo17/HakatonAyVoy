import { StyleSheet } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Home from "../Screens/Home";
import Points from "../Screens/Points";
import Chat from "../Screens/Chat";
import Schedule from "../Screens/Schedule";
import MapRoutes from "../Screens/MapRoutes";
import Profile from "../Screens/Profile";
import Support from "../Screens/Support";

const { createDrawerNavigator } = require("@react-navigation/drawer");

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerPosition: "right",
                drawerStyle: styles.drawer,
                drawerLabelStyle: styles.label,
                drawerActiveTintColor: styles.activeColor,
                drawerInactiveTintColor: styles.inactiveColor,
                drawerActiveBackgroundColor: "#1D204D",
            }}
        >
            <Drawer.Screen
                name="Home"
                component={Home}
                options={{
                    drawerLabel: "Inicio",
                    headerShown: false,
                    drawerIcon: () => (
                        <FontAwesome name="home" size={25} color="#d4c6ff" />
                    ),
                }}
            />

            <Drawer.Screen
                name="Profile"
                component={Profile}
                options={{
                    drawerLabel: "Mi Perfil",
                    headerShown: false,
                    drawerIcon: () => (
                        <FontAwesome5 name="user-alt" size={20} color="#d4c6ff" />
                    ),
                }}
            />

            <Drawer.Screen
                name="Schedule"
                component={Schedule}
                options={{
                    drawerLabel: "Horario",
                    headerShown: false,
                    drawerIcon: () => (
                        <FontAwesome5
                            name="calendar-week"
                            size={25}
                            color="#d4c6ff"
                        />
                    ),
                }}
            />

            <Drawer.Screen
                name="Points"
                component={Points}
                options={{
                    drawerLabel: "Puntos y Recompensas",
                    headerShown: false,
                    drawerIcon: () => (
                        <FontAwesome5 name="coins" size={24} color="#d4c6ff" />
                    ),
                }}
            />

            <Drawer.Screen
                name="Chat"
                component={Chat}
                options={{
                    drawerLabel: "Chat",
                    headerShown: false,
                    drawerIcon: () => (
                        <FontAwesome
                            name="comments"
                            size={24}
                            color="#d4c6ff"
                        />
                    ),
                }}
            />

            <Drawer.Screen
                name="MapRoutes"
                component={MapRoutes}
                options={{
                    drawerLabel: "Rutas",
                    headerShown: false,
                    drawerIcon: () => (
                        <FontAwesome5
                            name="map-marker-alt"
                            size={24}
                            color="#d4c6ff"
                        />
                    ),
                }}
            />

            <Drawer.Screen
                name="Support"
                component={Support}
                options={{
                    drawerLabel: "Soporte Técnico",
                    headerShown: false,
                    drawerIcon: () => (
                        <FontAwesome5
                            name="headphones-alt"
                            size={24}
                            color="#d4c6ff"
                        />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
};

const styles = StyleSheet.create({
    drawer: {
        backgroundColor: "#10132E",
        width: "80%",
    },

    container: {
        flex: 1,
        justifyContent: "space-between",
    },
    label: {
        color: "#d4c6ff",
        fontSize: 18,
        marginLeft: 5,
    },
    icon: {
        tintColor: "white",
    },
    activeColor: {
        color: "#d4c6ff",
    },
    inactiveColor: {
        color: "#d4c6ff",
    },
    activeBackgroundColor: {
        backgroundColor: "#fff",
    },
    separator: {
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        marginVertical: 10,
    },
});
