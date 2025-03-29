import axios from 'axios';
import { useEffect, useState } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const Historial = () => {

  const [historial, setHistorial] = useState([])

      useEffect(() => {
          getAll();
      }, []);

  const getAll = async ()=>{
    try {
      const res = await axios.get("/historial/getAll")
      const allRewards = res.data.todoHistorial
      setHistorial(allRewards)
    } catch (error) {
      
    }
  }

  return (
    <ScrollView style={styles.container}>
       {
        historial.map(({ recompensa, fecha}, index) => (
          <View key={index} style={styles.rewardItem}>
            <Text style={styles.rewardText}>Recompensa: {recompensa.concepto}</Text>
            <Text style={styles.pointsText}>Fecha de canje: {fecha}</Text>

          </View>
        ))
      }
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


export default Historial;
