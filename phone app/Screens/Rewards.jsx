import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';

const Rewards = () => {
  const BusRewards = [
    {
      reward: 'Despensa',
      pointsRequired: 150,
    },
    {
      reward: 'Bono Económico 1',
      pointsRequired: 500,
    },
    {
      reward: 'Día Libre',
      pointsRequired: 2500,
    },
    {
      reward: 'Tarjeta de Regalo $100',
      pointsRequired: 1000,
    },
    {
      reward: 'Entrada al Cine',
      pointsRequired: 300,
    },
    {
      reward: 'Cena para Dos',
      pointsRequired: 800,
    },
    {
      reward: 'Curso en Línea',
      pointsRequired: 1200,
    },
    {
      reward: 'Kit de Productividad',
      pointsRequired: 1500,
    },
  ];

  const AdminAdvice = () => {
    console.log('AdminAdvice called'); 
    Alert.alert(
      'Confirmar Canje',
      '¿Estás seguro de que deseas canjear esta recompensa?',
      [
        {
          text: 'Cancelar',
          onPress: () => console.log('Canje cancelado'),
          style: 'cancel',
        },
        {
          text: 'Aceptar',
          onPress: () => console.log('Recompensa canjeada'),
        },
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      {BusRewards.map(({ reward, pointsRequired }, index) => (
        <TouchableOpacity
          key={index}
          style={styles.rewardItem}
          onPress={AdminAdvice} // Llama a AdminAdvice solo cuando se presiona
        >
          <Text style={styles.rewardText}>Recompensa: {reward}</Text>
          <Text style={styles.pointsText}>
            Puntos Necesarios: {pointsRequired}
          </Text>
        </TouchableOpacity>
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
    color: '#6481ea',
  },
  pointsText: {
    fontSize: 16,
    color: '#fff',
    marginTop: 8,
  },
});

export default Rewards;