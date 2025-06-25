import React from "react";
import {
  Alert,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

const CustomDrawerContent = ({ navigation }) => {
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
    <View style={styles.drawerContainer}>
      <View style={styles.userSection}>
        <Image
          source={require("../../src/assets/avatar.png")}
          style={styles.avatar}
        />
        {/* Futuramente devo mexer aqui para colocar o nome do usuário que foi logado. */}
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.userName}>Gabriel Moura</Text>
      </View>

      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <Icon name="home" size={20} color="#000" style={styles.icon} />
          <Text style={styles.buttonText}>Ínicio</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Settings")}
        >
          <Icon name="settings" size={20} color="#000" style={styles.icon} />
          <Text style={styles.buttonText}>Configurações</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={confirmLogout}>
          <Icon name="log-out" size={20} color="#000" style={styles.icon} />
          <Text style={styles.buttonText}>Sair</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.versionText}>Versão: 1.0.0.0</Text>
      </View>
    </View>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "#D4D4D4",
  },
  userSection: {
    marginTop: 40,
    alignItems: "center",
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 12,
  },
  greeting: {
    fontSize: 16,
    color: "#555",
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoutText: {
    fontSize: 16,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D4D4D4",
  },

  button: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },

  buttonText: {
    fontSize: 16,
    color: "#000",
  },
  icon: {
    marginRight: 10,
  },
  versionText: {
    textAlign: "center",
    fontSize: 16,
  },
});
