import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import CustomHeader from "../../../components/Header/CustomHeader";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();
  const handleMenu = () => {
    navigation.openDrawer();
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

      <View style={styles.containerMenu}>
        <TouchableOpacity style={styles.card}>
          <Image
            source={require("../../../src/assets/searchprice.png")}
            style={styles.icon}
          />
          <Text style={styles.label}>Consultar Preço</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Image
            source={require("../../../src/assets/print.png")}
            style={styles.icon}
          />
          <Text style={styles.label}>Gerar Etiquetas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Image
            source={require("../../../src/assets/product.png")}
            style={styles.icon}
          />
          <Text style={styles.label}>Procurar Produto</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Image
            source={require("../../../src/assets/historical.png")}
            style={styles.icon}
          />
          <Text style={styles.label}>Histórico de Impressão</Text>
        </TouchableOpacity>
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
  containerMenu: {
    flex: 5,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    padding: 16,
    backgroundColor: '#D4D4D4'
  },
  card: {
    alignItems: "center",
    width: "50%",
    marginBottom: 10,
  },
  icon: {
    width: '70%',
    height: '50%',
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: "#00a9cc",
  },
});
