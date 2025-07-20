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
import { useTheme } from "../../../styles/ThemeContext";

export default function SignIn() {
  const navigation = useNavigation();
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.primary }]}>
      <Animatable.View
        animation="fadeInLeft"
        delay={500}
        style={styles.containerHeader}
      >
        <Text style={[styles.message, { color: "#fff" }]}>Boas-vindas</Text>
      </Animatable.View>

      <Animatable.View
        animation="fadeInUp"
        style={[styles.containerForm, { backgroundColor: theme.background }]}
      >
        <Text style={[styles.title, { color: theme.text }]}>
          Insira seu usuário
        </Text>
        <View
          style={[
            styles.inputContainer,
            {
              backgroundColor: theme.inputBackground,
              borderColor: theme.border,
            },
          ]}
        >
          <Icon
            name="user"
            size={20}
            color={theme.primary}
            style={styles.icon}
          />
          <TextInput
            style={[styles.input, { color: theme.text }]}
            placeholder="Usuário..."
            placeholderTextColor={theme.placeholder}
          />
        </View>

        <Text style={[styles.title, { color: theme.text }]}>
          Insira sua senha
        </Text>
        <View
          style={[
            styles.inputContainer,
            {
              backgroundColor: theme.inputBackground,
              borderColor: theme.border,
            },
          ]}
        >
          <Icon
            name="lock"
            size={20}
            color={theme.primary}
            style={styles.icon}
          />
          <TextInput
            style={[styles.input, { color: theme.text }]}
            placeholder="Senha..."
            placeholderTextColor={theme.placeholder}
            secureTextEntry
          />
        </View>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: theme.primary }]}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonRegister}
          onPress={() => navigation.navigate("ForgotPassword")}
        >
          <Text style={[styles.registerText, { color: theme.primary }]}>
            Esqueceu sua senha?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonRegister}
          onPress={() => navigation.navigate("RegisterUser")}
        >
          <Text style={[styles.registerText, { color: theme.primary }]}>
           Cadastre-se
          </Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerHeader: {
    marginTop: "14%",
    marginBottom: "8%",
    paddingHorizontal: 20,
  },
  message: {
    fontSize: 28,
    fontWeight: "700",
  },
  containerForm: {
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 48,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
    borderWidth: 1,
  },
  input: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
  },
  button: {
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
    fontSize: 14,
  },
});
