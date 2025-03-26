import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Rewards from '../Screens/Rewards';
import Historial from '../Screens/Historial';


const Tab = createMaterialTopTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {fontSize: 14, fontWeight: 'bold'}, // Estilo del texto
        tabBarStyle: {backgroundColor: '#10132E'}, // Fondo del contenedor
        tabBarIndicatorStyle: {backgroundColor: '#d4c6ff'}, // Color del indicador
        tabBarActiveTintColor: '#d4c6ff', // Color del texto activo
        tabBarInactiveTintColor: 'gray', // Color del texto inactivo
      }}>
      <Tab.Screen
        name="Rewards"
        component={Rewards}
        options={{
          tabBarLabel: 'Recompensas',
        }}
      />
      <Tab.Screen
        name="Historial"
        component={Historial}
        options={{
          tabBarLabel: 'Historial de Recompensas',
        }}
      />
    </Tab.Navigator>
  );
};
