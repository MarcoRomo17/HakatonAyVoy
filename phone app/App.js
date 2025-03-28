import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./Screens/Login";
import RecoverPassword from "./Screens/RecoverPassword";
import { DrawerNavigator } from "./Components/Drawer";
import axios from "axios";
import constantes from "./config.js"
const Stack = createStackNavigator();

axios.defaults.baseURL = constantes.apiUrl
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{
                        headerShown: false,
                    }}
                />

                <Stack.Screen
                    name="RecoverPassword"
                    component={RecoverPassword}
                    options={{
                        headerShown: false,
                    }}
                />

                <Stack.Screen
                    name="Main"
                    component={DrawerNavigator}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
