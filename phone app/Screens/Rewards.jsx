import axios from "axios";
import React, { useEffect, useState } from "react";
import {
    Text,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView,
} from "react-native";

const Rewards = () => {
    const [rewards, setRewards] = useState([]);

    useEffect(() => {
        getRewards();
    }, []);

    const getRewards = async () => {
        try {
            const res = await axios.get(
                "http://172.16.32.57:4010/recompensas/getAll"
            );
            setRewards(res.data.todasLasRecompensas)
        } catch (error) {
            console.log(error);
        }
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
                    onPress: () => console.log("Recompensa canjeada"),
                },
            ]
        );
    };

    return (
        <ScrollView style={styles.container}>
            {rewards.map(({ concepto, puntos }, index) => (
                <TouchableOpacity
                    key={index}
                    style={styles.rewardItem}
                    onPress={AdminAdvice} // Llama a AdminAdvice solo cuando se presiona
                >
                    <Text style={styles.rewardText}>Recompensa: {concepto}</Text>
                    <Text style={styles.pointsText}>
                        Puntos Necesarios: {puntos}
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

export default Rewards;
