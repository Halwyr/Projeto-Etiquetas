import React from "react";
import {
  View,
  Alert,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import Icon from "react-native-vector-icons/Feather";
import { useTheme } from "../../../styles/ThemeContext";

const Settings = ({ navigation }) => {
  const { theme, toggleTheme, darkMode } = useTheme();

  const handleLogout = () => {
    navigation.replace("SignIn");
  };

  const confirmLogout = () => {
    Alert.alert(
      "Confirmação!",
      "Você deseja sair?",
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Sair", onPress: handleLogout, style: "destructive" },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Header fixo */}
      <View style={[styles.header, { backgroundColor: theme.primary }]}>
        <Text style={[styles.headerTitle, { color: "#fff" }]}>Configurações</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Seção 1: Preferências */}
        <Text style={[styles.sectionTitle, { color: theme.primary }]}>Preferências do Sistema</Text>

        <TouchableOpacity
          style={[styles.item, { backgroundColor: theme.card }]}
          onPress={toggleTheme}
        >
          <View style={styles.itemLeft}>
            <Icon
              name={darkMode ? "sun" : "moon"}
              size={20}
              color={theme.primary}
            />
            <Text style={[styles.itemLabel, { color: theme.text }]}>
              Tema {darkMode ? "Claro" : "Escuro"}
            </Text>
          </View>
          <Icon name="chevron-right" size={20} color={theme.primary} />
        </TouchableOpacity>

        {/* Seção 2: Sincronização e Dados */}
        <Text style={[styles.sectionTitle, { color: theme.primary }]}>Sincronização e Dados</Text>

        <TouchableOpacity style={[styles.item, { backgroundColor: theme.card }]}>
          <View style={styles.itemLeft}>
            <Icon name="refresh-cw" size={20} color={theme.primary} />
            <Text style={[styles.itemLabel, { color: theme.text }]}>Forçar Sincronização</Text>
          </View>
          <Icon name="chevron-right" size={20} color={theme.primary} />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.item, { backgroundColor: theme.card }]}>
          <View style={styles.itemLeft}>
            <Icon name="file" size={20} color={theme.primary} />
            <Text style={[styles.itemLabel, { color: theme.text }]}>Exportar Dados</Text>
          </View>
          <Icon name="chevron-right" size={20} color={theme.primary} />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.item, { backgroundColor: theme.card }]}>
          <View style={styles.itemLeft}>
            <Icon name="trash-2" size={20} color={theme.primary} />
            <Text style={[styles.itemLabel, { color: theme.text }]}>Limpar Histórico</Text>
          </View>
          <Icon name="chevron-right" size={20} color={theme.primary} />
        </TouchableOpacity>

        {/* Seção 3: Conta */}
        <Text style={[styles.sectionTitle, { color: theme.primary }]}>Conta e Acesso</Text>

        <TouchableOpacity style={[styles.item, { backgroundColor: theme.card }]} onPress={() => navigation.navigate("ProfileScreen")}>
          <View style={styles.itemLeft}>
            <Icon name="user" size={20} color={theme.primary} />
            <Text style={[styles.itemLabel, { color: theme.text }]}>Perfil do Usuário</Text>
          </View>
          <Icon name="chevron-right" size={20} color={theme.primary} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.item, { backgroundColor: theme.card }]}
          onPress={confirmLogout}
        >
          <View style={styles.itemLeft}>
            <Icon name="log-out" size={20} color={theme.primary} />
            <Text style={[styles.itemLabel, { color: theme.text }]}>Logout</Text>
          </View>
          <Icon name="chevron-right" size={20} color={theme.primary} />
        </TouchableOpacity>

        {/* Seção 4: Sobre */}
        <Text style={[styles.sectionTitle, { color: theme.primary }]}>Sobre o App</Text>

        <TouchableOpacity
          style={[styles.item, { backgroundColor: theme.card }]}
          onPress={() => navigation.navigate("AboutUs")}
        >
          <View style={styles.itemLeft}>
            <Icon name="info" size={20} color={theme.primary} />
            <Text style={[styles.itemLabel, { color: theme.text }]}>Sobre Nós</Text>
          </View>
          <Icon name="chevron-right" size={20} color={theme.primary} />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.item, { backgroundColor: theme.card }]}>
          <View style={styles.itemLeft}>
            <Icon name="code" size={20} color={theme.primary} />
            <Text style={[styles.itemLabel, { color: theme.text }]}>Versão: 1.0.0.5</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Settings;

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
    padding: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemLabel: {
    fontSize: 16,
    marginLeft: 20,
    fontWeight: "bold",
  },
});