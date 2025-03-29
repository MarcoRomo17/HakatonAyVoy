import axios from "axios";
import React, { useEffect, useState } from "react";
import {
    Text,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Rewards = () => {
    const [rewards, setRewards] = useState([]);
    const [reward, setReward] = useState("");

    useEffect(() => {
        getRewards();
    }, []);

    const getRewards = async () => {
        try {
            const res = await axios.get(
                "/recompensas/getAll"
            );
            setRewards(res.data.todasLasRecompensas)
        } catch (error) {
            console.log(error);
        }
    };

    const send = async () => {
        try {
            const data ={
                recompensa: reward,
                fecha: getDate(),
                conductor: await AsyncStorage.getItem("_id"),
            }
            await axios.post("/solicitud/create", data)
        } catch (error) {
            console.log("Error al generar solicitud: ", error)
        }
    }


    const getDate = () => {
        const fecha = new Date();
      
        const año = fecha.getFullYear();
        const mes = String(fecha.getMonth() + 1).padStart(2, '0');
        const día = String(fecha.getDate()).padStart(2, '0');
        const horas = String(fecha.getHours()).padStart(2, '0');
        const minutos = String(fecha.getMinutes()).padStart(2, '0');
        const segundos = String(fecha.getSeconds()).padStart(2, '0');
      
        return `${año}-${mes}-${día} ${horas}:${minutos}:${segundos}`;
      };

    const AdminAdvice = () => {
        console.log("AdminAdvice called");
        Alert.alert(
            "Confirmar Canje",
            "¿Estás seguro de que deseas canjear esta recompensa?",
            [
                {
                    text: "Cancelar",
                    onPress: () => console.log("Canje cancelado"),
                    style: "cancel",
                },
                {
                    text: "Aceptar",
                    onPress: () => {console.log("Recompensa canjeada"); send()},
                },
            ]
        );
    };

    return (
        <ScrollView style={styles.container}>
            {rewards.map((recompensa, index) => (
                <TouchableOpacity
                    key={index}
                    style={styles.rewardItem}
                    onPress={()=>{AdminAdvice(); setReward(recompensa._id); }} // Llama a AdminAdvice solo cuando se presiona
                >
                    <Text style={styles.rewardText}>Recompensa: {recompensa.concepto}</Text>
                    <Text style={styles.pointsText}>
                        Puntos Necesarios: {recompensa.puntos}
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
        backgroundColor: "#1D204D",
    },
    rewardItem: {
        backgroundColor: "#10132E",
        padding: 16,
        borderRadius: 20,
        marginBottom: 16,
    },
    rewardText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#6481ea",
    },
    pointsText: {
        fontSize: 16,
        color: "#fff",
        marginTop: 8,
    },
});

export default Rewards;
