// HomeScreen.js
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  const handleEnter = () => {
    // Navega para a tela principal do app
    navigation.navigate("Welcome"); // ou qualquer outra tela que você criou
  };

  const handleLogout = () => {
    // Aqui você pode limpar o token, estado, etc.
    navigation.replace("SignIn"); // volta pra tela de login
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Bem-vindo ao App de Etiquetas!</Text>

      <TouchableOpacity style={styles.button} onPress={handleEnter}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.buttonLogout]}
        onPress={handleLogout}
      >
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  welcome: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 40,
    color: "#333",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#2e86de",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 15,
    width: "80%",
    alignItems: "center",
  },
  buttonLogout: {
    backgroundColor: "#e74c3c",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
