import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";

const CustomHeader = ({
  userName = "Gabriel Moura",
  onMenuPress,
  onNotifyPress,
}) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.userName}>{userName}</Text>

      <TouchableOpacity onPress={onNotifyPress} style={styles.notifyIcon}>
        <Icon name="bell" size={24} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity onPress={onMenuPress} style={styles.menuIcon}>
        <Icon name="menu" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#00a9cc",
    justifyContent: "center",
  },
  userName: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
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
