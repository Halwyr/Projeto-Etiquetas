import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { useTheme } from "../../../styles/ThemeContext";

const mockUser = {
  name: "Gabriel Moura",
  department: "TI",
  admissionDate: "11/09/2019",
  avatar: require("../../../src/assets/avatar.png"), // pré-definido
};

export default function ProfileScreen() {
  const { theme } = useTheme();
  const [user, setUser] = useState(mockUser);

  const handleAvatarChange = () => {
    // Simulação: alternar entre 2 avatares (ou criar um modal futuramente)
    const nextAvatar =
      user.avatar === require("../../../src/assets/avatar.png")
        ? require("../../../src/assets/avatar2.png")
        : require("../../../src/assets/avatar3.png");
    setUser({ ...user, avatar: nextAvatar });
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: theme.text }]}>Meu Perfil</Text>
      </View>

      <View style={styles.avatarContainer}>
        <TouchableOpacity onPress={handleAvatarChange}>
          <Image source={user.avatar} style={styles.avatar} />
          <Text style={[styles.avatarText, { color: theme.primary }]}>
            Alterar Avatar
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <Icon name="user" size={20} color={theme.primary} />
          <Text style={[styles.infoLabel, { color: theme.text }]}>
            Nome:
          </Text>
          <Text style={[styles.infoValue, { color: theme.text }]}>
            {user.name}
          </Text>
        </View>

        <View style={styles.infoRow}>
          <Icon name="briefcase" size={20} color={theme.primary} />
          <Text style={[styles.infoLabel, { color: theme.text }]}>
            Departamento:
          </Text>
          <Text style={[styles.infoValue, { color: theme.text }]}>
            {user.department}
          </Text>
        </View>

        <View style={styles.infoRow}>
          <Icon name="calendar" size={20} color={theme.primary} />
          <Text style={[styles.infoLabel, { color: theme.text }]}>
            Admissão:
          </Text>
          <Text style={[styles.infoValue, { color: theme.text }]}>
            {user.admissionDate}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 60,
    paddingBottom: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  avatarContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: "#00a9cc",
  },
  avatarText: {
    marginTop: 10,
    fontSize: 18,
    textAlign: "center",
  },
  infoContainer: {
    paddingHorizontal: 20,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  infoLabel: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
    marginRight: 4,
  },
  infoValue: {
    fontSize: 18,
  },
  editButton: {
    marginTop: 40,
    marginHorizontal: 50,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
});