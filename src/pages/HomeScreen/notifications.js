import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Notifications() {
  return (
    <View style={styles.containerHeader}>
      {/* Header fixo */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notificações</Text>
      </View>

      <View contentContainerStyle={styles.container}>
        <Text style={styles.text}>Nenhuma notificação</Text>
      </View>
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
  text: {
    fontSize: 16,
    color: "#333",
    lineHeight: 24,
    marginBottom: 12,
    textAlign: 'center',
  },
});
