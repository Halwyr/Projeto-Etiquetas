import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import * as Animatable from "react-native-animatable";
import { useTheme } from "../../../styles/ThemeContext";
import { useNavigation } from "@react-navigation/native";

export default function ForgotPassword() {
  const { theme } = useTheme();
  const navigation = useNavigation();

  return (
    <Animatable.View
      animation="fadeInUp"
      duration={800}
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <Text style={[styles.title, { color: theme.text }]}>
        Entre em contato com os administradores do sistema:
      </Text>

      <View style={styles.contactRow}>
        <Icon
          name="phone"
          size={24}
          color={theme.primary}
          style={styles.icon}
        />
        <Text style={[styles.phone, { color: theme.text }]}>
          Gabriel - (34) 3431-8331
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("SignIn")}
        style={styles.backButton}
      >
        <Icon
          name="arrow-left"
          size={20}
          color="#fff"
          style={styles.backIcon}
        />
        <Text style={styles.backText}>Voltar para o Login</Text>
      </TouchableOpacity>
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  contactRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  icon: {
    marginRight: 10,
  },
  phone: {
    fontSize: 18,
    fontWeight: "600",
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
    backgroundColor: "#00a9cc",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  backIcon: {
    marginRight: 10,
  },
  backText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});