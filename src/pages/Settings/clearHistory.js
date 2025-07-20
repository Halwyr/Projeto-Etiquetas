import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useHistorico } from "../../context/HistoricoContext";
import { useTheme } from "../../../styles/ThemeContext";

export default function ClearHistory() {
  const { adicionarHistorico } = useHistorico();
  const { theme } = useTheme();

  const confirmarLimpeza = () => {
    Alert.alert(
      "Confirmação",
      "Tem certeza que deseja limpar o histórico de impressão?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Limpar",
          style: "destructive",
          onPress: () => {
            adicionarHistorico(); // Aqui é a função correta
            Alert.alert("Sucesso", "Histórico limpo com sucesso!");
          },
        },
      ]
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={[styles.header, { backgroundColor: theme.primary }]}>
        <Text style={[styles.headerTitle, { color: "#fff" }]}>
          Limpar Histórico
        </Text>
      </View>

      <View style={styles.content}>
        <Text style={[styles.texto, { color: theme.text }]}>
          Você pode apagar todo o histórico de impressão salvo no dispositivo.
        </Text>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#D32F2F" }]}
          onPress={confirmarLimpeza}
        >
          <Text style={styles.buttonText}>🗑️ Limpar Histórico</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    paddingTop: 80,
    paddingBottom: 20,
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  texto: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 30,
  },
  button: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
