import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function AboutUs() {
  return (
    <View style={styles.containerHeader}>
      {/* Header fixo */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Sobre Nós</Text>
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Sobre o Software</Text>
        <Text style={styles.text}>
          Este aplicativo foi desenvolvido com o objetivo de facilitar a gestão
          de produtos, permitir a consulta de preços e gerar etiquetas de forma
          rápida e intuitiva. Nossa missão é transformar tarefas operacionais em
          experiências simples e eficientes.
        </Text>
        <Text style={styles.text}>Desenvolvido por Gabriel Moura.</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  containerHeader: {
    flex: 1,
    backgroundColor: "#D4D4D4",
  },
  header: {
    paddingTop: 80,
    paddingBottom: 20,
    backgroundColor: "#00a9cc",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#D4D4D4",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: 'center',
    color: "#333",
  },
  text: {
    fontSize: 16,
    color: "#333",
    lineHeight: 24,
    marginBottom: 12,
  },
});
