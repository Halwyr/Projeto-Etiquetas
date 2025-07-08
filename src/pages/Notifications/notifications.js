import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "../../../styles/ThemeContext";

export default function Notifications() {
    const { theme } = useTheme();
  return (
    <View style={[styles.containerHeader, { backgroundColor: theme.background }]}>
      {/* Header fixo */}
      <View style={[styles.header, { backgroundColor: theme.primary }]}>
        <Text style={[styles.headerTitle, {color: "#fff" }]}>Notificações</Text>
      </View>

      <View contentContainerStyle={styles.container}>
        <Text style={[styles.text, {color: theme.text }]}>Nenhuma notificação</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerHeader: {
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
    container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#D4D4D4",
  },
  text: {
    fontSize: 16,
    color: "#333",
    lineHeight: 24,
    marginBottom: 12,
    textAlign: 'center',
  },
});