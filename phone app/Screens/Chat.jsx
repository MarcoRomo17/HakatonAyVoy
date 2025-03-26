import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Image, Pressable } from "react-native";

const Chat = () => {
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
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#252569',
    },
    contentContainer: {
      flexGrow: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    toppingContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '95%',
      marginTop: 20,
      paddingHorizontal: 20,
    },
    logo: {
      width: 150,
      height: 150,
    },
  
    menuButton: {
      marginLeft: 20,
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
  });

export default Chat;
