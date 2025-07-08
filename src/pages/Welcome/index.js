import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../../../styles/ThemeContext";

export default function Welcome() {
  const navigation = useNavigation();
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.primary }]}>
      <View style={[styles.containerLogo, { backgroundColor: theme.primary }]}>
        <Animatable.Image
          animation="flipInY"
          source={require("../../assets/icone.png")}
          style={{ width: "70%" }}
          resizeMode="contain"
        />
      </View>

      <Animatable.View
        delay={600}
        animation="fadeInUp"
        style={[styles.containerForm, { backgroundColor: theme.background }]}
      >
        <Text style={[styles.title, { color: theme.text }]}>
          Excelência em gestão de etiquetas, sem margem para erro.
        </Text>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: theme.primary }]}
          onPress={() => navigation.navigate("SignIn")}
        >
          <Text style={[styles.buttonText, { color: "#fff" }]}>
            Acessar
          </Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerLogo: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  containerForm: {
    flex: 1,
    position: "relative",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 28,
    marginBottom: 12,
    textAlign: "center",
  },
  button: {
    position: "absolute",
    borderRadius: 50,
    paddingVertical: 8,
    width: "60%",
    alignSelf: "center",
    transform: [{ translateY: -10 }],
    top: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});