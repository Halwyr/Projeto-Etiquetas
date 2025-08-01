import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import CustomHeader from "../../../components/Header/CustomHeader";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../../../styles/ThemeContext";

export default function HomeScreen() {
  const navigation = useNavigation();
  const { theme } = useTheme();

  const handleMenu = () => {
    navigation.openDrawer();
  };

  const handleNotify = () => {
    console.log("Notificações abertas para teste.");
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.primary }]}>
      <CustomHeader
        userName="Gabriel Moura"
        onMenuPress={handleMenu}
        onNotifyPress={handleNotify}
      />

      <View
        style={[styles.containerMenu, { backgroundColor: theme.background }]}
      >
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("ProductList")}
        >
          <Image
            source={require("../../../src/assets/product.png")}
            style={styles.icon}
          />
          <Text style={[styles.label, { color: theme.primary }]}>
            Consultar Produtos
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("ScannerScreen")}
        >
          <Image
            source={require("../../../src/assets/searchprice.png")}
            style={styles.icon}
          />
          <Text style={[styles.label, { color: theme.primary }]}>
            Busca Preço
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("EtiquetasPreview")}
        >
          <Image
            source={require("../../../src/assets/print.png")}
            style={styles.icon}
          />
          <Text style={[styles.label, { color: theme.primary }]}>
            Gerar Etiquetas
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("HistoryScreen")}
        >
          <Image
            source={require("../../../src/assets/historical.png")}
            style={styles.icon}
          />
          <Text style={[styles.label, { color: theme.primary }]}>
            Histórico de Impressão
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("ManualLabelCreator")}
        >
          <Image
            source={require("../../../src/assets/edit.png")}
            style={styles.icon}
          />
          <Text style={[styles.label, { color: theme.primary }]}>
            Adicionar Etiqueta
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerMenu: {
    flex: 5,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    padding: 16,
  },
  card: {
    alignItems: "center",
    width: "50%",
    marginBottom: 10,
  },
  icon: {
    width: "70%",
    height: "50%",
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
