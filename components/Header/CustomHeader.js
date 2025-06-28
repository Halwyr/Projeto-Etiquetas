import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../../styles/ThemeContext";

const CustomHeader = ({ userName = "Gabriel Moura" }) => {
  const navigation = useNavigation();
  const { theme } = useTheme();
  return (
    <View style={[styles.wrapper, {backgroundColor: theme.primary }]}>
      <Text style={[styles.userName, { color: "#fff" }]}>{userName}</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("Notifications")}
        style={styles.notifyIcon}
      >
        <Icon name="bell" size={24} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.openDrawer()}
        style={styles.menuIcon}
      >
        <Icon name="menu" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
  },
  userName: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
    top: 20,
  },
  menuIcon: {
    position: "absolute",
    left: 16,
    top: 80,
  },
  notifyIcon: {
    position: "absolute",
    right: 16,
    top: 80,
  },
});
