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
import { useTheme } from "../../styles/ThemeContext";

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

  const { theme } = useTheme();

  return (
    <View
      style={[styles.drawerContainer, { backgroundColor: theme.background }]}
    >
      <View style={styles.userSection}>
        <Image
          source={require("../../src/assets/avatar.png")}
          style={styles.avatar}
        />
        <Text style={[styles.greeting, { color: theme.text }]}>Olá,</Text>
        <Text style={[styles.userName, { color: theme.text }]}>
          Gabriel Moura
        </Text>
      </View>

      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <Icon
            name="home"
            size={20}
            color={theme.text}
            style={styles.icon}
          />
          <Text style={[styles.buttonText, { color: theme.text }]}>Início</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Settings")}
        >
          <Icon
            name="settings"
            size={20}
            color={theme.text}
            style={styles.icon}
          />
          <Text style={[styles.buttonText, { color: theme.text }]}>
            Configurações
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={confirmLogout}>
          <Icon
            name="log-out"
            size={20}
            color={theme.text}
            style={styles.icon}
          />
          <Text style={[styles.buttonText, { color: theme.text }]}>Sair</Text>
        </TouchableOpacity>
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
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 16,
  },
  icon: {
    marginRight: 10,
  },
});