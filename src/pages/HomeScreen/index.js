import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomHeader from "../../../components/Header/CustomHeader";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();
  const handleMenu = () => {
    // Aqui devo criar a função para abrir o menu
    console.log("Menu aberto para teste.");
  };

  const loginUser = () => {
    // Aqui devo criar uma função para pegar o usuário que foi logado.
  };

  const handleNotify = () => {
    // Aqui devo criar a função para abrir a notificação
    console.log("Notificações abertas para teste.");
  };

  return (
    <View style={styles.container}>
      <CustomHeader
        userName="Gabriel Moura"
        onMenuPress={handleMenu}
        onNotifyPress={handleNotify}
      />

      <View style={styles.content}>
        {/* // Aqui é onde virá o restante dos ícones para clicar  */}
        <Text> Conteúdo do App aqui abaixo da barra</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerSection: {
    flex: 1,
  },
  content: {
    flex: 6,
    padding: 16,
    backgroundColor: "#fff",
  },
});
