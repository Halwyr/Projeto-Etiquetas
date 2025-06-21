import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

import * as Animatable from "react-native-animatable";
import Icon from "react-native-vector-icons/Feather";


// import { useNavigation } from "@react-navigation/native";

export default function SignIn() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Animatable.View
        animation="fadeInLeft"
        delay={500}
        style={styles.containerHeader}
      >
        <Text style={styles.message}> Boas-vindas</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Insira seu usuário</Text>
        <View style={styles.userContainer}>
          <Icon name="user" size={20} color="#00a9cc" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Usuário..."
            placeholderTextColor="#666"
          />
        </View>

        <Text style={styles.title}>Insira sua senha</Text>
        <View style={styles.passwordContainer}>
          <Icon name="lock" size={20} color="#00a9cc" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Senha..."
            placeholderTextColor="#666"
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        
        {/* Criar algo nesse carinha aqui */}
        <TouchableOpacity style={styles.buttonRegister}> 
          <Text style={styles.registerText}>
            Não tem usuário ou esqueceu sua senha? Por favor, contate o
            administrador do sistema.
          </Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00a9cc",
  },
  containerHeader: {
    marginTop: "14%",
    marginBottom: "8%",
    paddingHorizontal: 20,
  },
  message: {
    fontSize: 28,
    fontWeight: "700",
    color: "#FFF",
  },
  containerForm: {
    flex: 1,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 16,
    color: "#333",
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    height: 48,
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    color: "#333",
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    height: 48,
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    color: "#333",
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  button: {
    backgroundColor: "#00a9cc",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "600",
  },
  buttonRegister: {
    marginTop: 16,
    alignSelf: "center",
  },
  registerText: {
    color: "#00a9cc",
    fontSize: 14,
  },
});
