import React from "react";
import {
  View,
  Alert,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

// import { useTheme } from "../../../styles/ThemeContext"; // Caso for criar o tema dark
import Icon from "react-native-vector-icons/Feather";

const Settings = ({ navigation }) => {
  const handleLogout = () => {
    navigation.replace("SignIn");
  };

  const confirmLogout = () => {
    Alert.alert(
      "Confirmação!",
      "Você deseja sair?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Sair",
          onPress: handleLogout,
          style: "destructive",
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      {/* Header fixo */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Configurações</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Preferências do Sistema */}
        <Text style={styles.sectionTitle}>Preferências do Sistema</Text>

        <TouchableOpacity style={styles.item}>
          <View style={styles.itemLeft}>
            <Icon name="moon" size={20} color="#00a9cc" />
            <Text style={styles.itemLabel}>Tema</Text>
          </View>
          <Icon name="chevron-right" size={20} color="#ccc" />
        </TouchableOpacity>

        {/* Sincronização e Dados */}
        <Text style={styles.sectionTitle}>Sincronização e Dados</Text>

        <TouchableOpacity style={styles.item}>
          <View style={styles.itemLeft}>
            <Icon name="refresh-cw" size={20} color="#00a9cc" />
            <Text style={styles.itemLabel}>Forçar Sincronização</Text>
          </View>
          <Icon name="chevron-right" size={20} color="#ccc" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <View style={styles.itemLeft}>
            <Icon name="file" size={20} color="#00a9cc" />
            <Text style={styles.itemLabel}>Exportar Dados</Text>
          </View>
          <Icon name="chevron-right" size={20} color="#ccc" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <View style={styles.itemLeft}>
            <Icon name="delete" size={20} color="#00a9cc" />
            <Text style={styles.itemLabel}>
              {" "}
              Limpar Histórico de Impressões
            </Text>
          </View>
          <Icon name="chevron-right" size={20} color="#ccc" />
        </TouchableOpacity>

        {/* Conta e Acesso */}
        <Text style={styles.sectionTitle}>Conta e Acesso</Text>

        <TouchableOpacity style={styles.item}>
          <View style={styles.itemLeft}>
            <Icon name="user" size={20} color="#00a9cc" />
            <Text style={styles.itemLabel}>Perfil do Usuário</Text>
          </View>
          <Icon name="chevron-right" size={20} color="#ccc" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={confirmLogout}>
          <View style={styles.itemLeft}>
            <Icon name="log-out" size={20} color="#00a9cc" />
            <Text style={styles.itemLabel}>Logout</Text>
          </View>
          <Icon name="chevron-right" size={20} color="#ccc" />
        </TouchableOpacity>

        {/* Sobre o App */}
        <Text style={styles.sectionTitle}>Sobre o App</Text>

        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate("AboutUs")}>
          <View style={styles.itemLeft}>
            <Icon name="info" size={20} color="#00a9cc" />
            <Text style={styles.itemLabel}>Sobre Nós</Text>
          </View>
          <Icon name="chevron-right" size={20} color="#ccc" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <View style={styles.itemLeft}>
            <Icon name="code" size={20} color="#00a9cc" />
            <Text style={styles.itemLabel}>Versão: 1.0.0.1 </Text>
          </View>
          <Icon name="chevron-right" size={20} color="#ccc" />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
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
  scrollContent: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#00a9cc",
    marginTop: 20,
    marginBottom: 10,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
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
    color: "#333",
    fontWeight: "bold",
  },
});
