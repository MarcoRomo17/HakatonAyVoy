import {View, Text, StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const Historial = () => {
  const BusRewardHistorial = [
    {
      reward: 'Día Libre',
      date: '19/02/2025',
    },
  ];

  return (
    <ScrollView style={styles.container}>
         {BusRewardHistorial.map(({reward, date}, index) => (
           <View key={index} style={styles.rewardItem}>
             <Text style={styles.rewardText}>Recompensa: {reward}</Text>
             <Text style={styles.pointsText}>Fecha de canje: {date}
             </Text>
           </View>
         ))}
       </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#1D204D',
  },
  rewardItem: {
    backgroundColor: '#10132E',
    padding: 16,
    borderRadius: 20,
    marginBottom: 16,
  },
  rewardText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0dc8e2',
  },
  pointsText: {
    fontSize: 16,
    color: '#fff',
    marginTop: 8,
  },
});


export default Historial;
