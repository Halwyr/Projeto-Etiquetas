import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useHistorico } from "../../context/HistoricoContext";
import { useTheme } from "../../../styles/ThemeContext";

export default function HistoricoScreen() {
  const { historico } = useHistorico();
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={[styles.header, { backgroundColor: theme.primary }]}>
        <Text style={[styles.headerTitle, { color: "#fff" }]}>
          Histórico de Impressão
        </Text>
      </View>
      <FlatList
        data={historico}
        keyExtractor={(item, index) => `${item.code}-${index}`}
        renderItem={({ item }) => (
          <View style={[styles.card, { backgroundColor: theme.card }]}>
            <Text style={{ color: theme.text }}>
              {item.desc} - R$ {item.price?.toFixed(2)}
            </Text>
            <Text style={{ color: theme.placeholder }}>
              {new Date(item.data).toLocaleString()}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { paddingTop: 80, paddingBottom: 20 },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 16 },
  card: {
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
});
