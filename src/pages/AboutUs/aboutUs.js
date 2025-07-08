import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useTheme } from "../../../styles/ThemeContext";

export default function AboutUs() {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Header fixo */}
      <View style={[styles.header, { backgroundColor: theme.primary }]}>
        <Text style={[styles.headerTitle, { color: "#fff" }]}>Sobre Nós</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={[styles.title, { color: theme.text }]}>
          Sobre o Software
        </Text>
        <Text style={[styles.text, { color: theme.text }]}>
          Este aplicativo foi desenvolvido com o objetivo de facilitar a gestão
          de produtos, permitir a consulta de preços e gerar etiquetas de forma
          rápida e intuitiva. Nossa missão é transformar tarefas operacionais em
          experiências simples e eficientes.
        </Text>
        <Text style={[styles.text, { color: theme.text }]}>
          Desenvolvido por Gabriel Moura.
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 80,
    paddingBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  scrollContent: {
    padding: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 12,
  },
});