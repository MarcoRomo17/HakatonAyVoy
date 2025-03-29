import React, { useState } from "react";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, Text, View, ScrollView } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Picker } from "@react-native-picker/picker";

const Survey = () => {
  const navigation = useNavigation();
  const [answers, setAnswers] = useState({
    attitude: "",
    driving: "",
    unnecessaryStop: "",
    routeDeviation: "",
    cashReceived: ""
  });

  const handleAnswerChange = (question, value) => {
    setAnswers(prev => ({
      ...prev,
      [question]: value
    }));
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.toppingContainer}>
        <Image
          source={require("../Images/AY_VOY_logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <Pressable
          style={styles.menuButton}
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        >
          <FontAwesome5 name="bars" size={30} color="white" />
        </Pressable>
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>Encuesta de Satisfacción</Text>

        <View style={styles.questionContainer}>
          {/* Pregunta 1 */}
          <Text style={styles.label}>¿Cómo calificarías la actitud del chofer?</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={answers.attitude}
              onValueChange={(value) => handleAnswerChange('attitude', value)}
              style={styles.picker}
              dropdownIconColor="#ca2193"
            >
              <Picker.Item label="Selecciona una opción" value="" />
              <Picker.Item label="Buena" value="buena" />
              <Picker.Item label="Mala" value="mala" />
            </Picker>
          </View>

          {/* Pregunta 2 */}
          <Text style={styles.label}>¿Cómo calificarías la conducción del chofer?</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={answers.driving}
              onValueChange={(value) => handleAnswerChange('driving', value)}
              style={styles.picker}
              dropdownIconColor="#ca2193"
            >
              <Picker.Item label="Selecciona una opción" value="" />
              <Picker.Item label="Buena" value="buena" />
              <Picker.Item label="Mala" value="mala" />
            </Picker>
          </View>

          {/* Pregunta 3 */}
          <Text style={styles.label}>¿Hizo alguna parada innecesaria?</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={answers.unnecessaryStop}
              onValueChange={(value) => handleAnswerChange('unnecessaryStop', value)}
              style={styles.picker}
              dropdownIconColor="#ca2193"
            >
              <Picker.Item label="Selecciona una opción" value="" />
              <Picker.Item label="Sí" value="si" />
              <Picker.Item label="No" value="no" />
            </Picker>
          </View>

          {/* Pregunta 4 */}
          <Text style={styles.label}>¿Se desvió de la ruta sin razón alguna?</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={answers.routeDeviation}
              onValueChange={(value) => handleAnswerChange('routeDeviation', value)}
              style={styles.picker}
              dropdownIconColor="#ca2193"
            >
              <Picker.Item label="Selecciona una opción" value="" />
              <Picker.Item label="Sí" value="si" />
              <Picker.Item label="No" value="no" />
            </Picker>
          </View>

          {/* Pregunta 5 */}
          <Text style={styles.label}>¿El chofer recibió dinero en efectivo?</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={answers.cashReceived}
              onValueChange={(value) => handleAnswerChange('cashReceived', value)}
              style={styles.picker}
              dropdownIconColor="#ca2193"
            >
              <Picker.Item label="Selecciona una opción" value="" />
              <Picker.Item label="Sí" value="si" />
              <Picker.Item label="No" value="no" />
            </Picker>
          </View>

          {/* Botón de enviar */}
          <Pressable 
            style={styles.submitButton}
            onPress={() => console.log("Respuestas:", answers)}
          >
            <Text style={styles.submitButtonText}>Enviar Encuesta</Text>
          </Pressable>
        </View>
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
    paddingBottom: 30,
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
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: "bold",
    color: "#01e5fd",
    marginBottom: 20,
    marginTop: 10,
  },
  questionContainer: {
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  label: {
    width: '100%',
    textAlign: 'center',
    color: '#ca2193',
    marginVertical: 15,
    fontWeight: '500',
    fontSize: 16,
  },
  pickerContainer: {
    width: '80%',
    marginBottom: 10,
    overflow: 'hidden',
    borderRadius: 20,
  },
  picker: {
    width: '100%',
    backgroundColor: 'white',
    color: '#252569',
  },
  submitButton: {
    marginTop: 30,
    backgroundColor: '#01e5fd',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    elevation: 3,
  },
  submitButtonText: {
    color: '#252569',
    fontWeight: 'bold',
    fontSize: 16,
  }
});

export default Survey;