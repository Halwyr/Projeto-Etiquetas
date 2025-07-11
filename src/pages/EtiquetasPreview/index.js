import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useEtiqueta } from "../../context/EtiquetaContext";
import { useTheme } from "../../../styles/ThemeContext";
import * as Print from "expo-print";
import { useHistorico } from "../../context/HistoricoContext";

export default function EtiquetaPreview() {
  const { etiquetas, limparEtiquetas } = useEtiqueta();
  const { theme } = useTheme();
  const { adicionarHistorico } = useHistorico();

  // const gerarHTML = () => {
  //   const etiquetasHtml = etiquetas.map((item) => {
  //     return `
  //     <div style="
  //       width: 300px;
  //       height: 120px;
  //       background-color: #FFDE59;
  //       padding: 10px 14px;
  //       margin: 10px;
  //       font-family: Arial, sans-serif;
  //       box-sizing: border-box;
  //       display: flex;
  //       flex-direction: column;
  //       justify-content: space-between;
  //       border: 1px solid #ccc;
  //       overflow: hidden;
  //     ">
  //       <!-- Topo: Descrição -->
  //       <div style="
  //         flex: 1;
  //         font-weight: bold;
  //         font-size: 14px;
  //         text-transform: uppercase;
  //         display: flex;
  //         align-items: center;
  //       ">
  //         ${item.desc}
  //       </div>

  //       <!-- Meio: Preço centralizado -->
  //       <div style="
  //         flex: 2;
  //         display: flex;
  //         align-items: center;
  //         justify-content: center;
  //         font-size: 32px;
  //         text-align: center;
  //         font-weight: bold;
  //       ">
  //         R$ ${item.price.toFixed(2).replace(".", ",")}
  //       </div>

  //       <!-- Rodapé: Código reduzido à esquerda, código de barras à direita -->
  //       <div style="
  //         flex: 1;
  //         display: flex;
  //         justify-content: space-between;
  //         align-items: flex-end;
  //         padding: 0 8px;
  //         font-size: 12px;
  //         font-weight: bold;
  //       ">
  //         <div style="font-size: 12px; font-weight: bold; letter-spacing: 1px;">
  //           ${item.code}
  //         </div>
  //         <div style="text-align: right;">
  //           <div style="
  //             width: 120px;
  //             height: 40px;
  //             margin-bottom: 2px;
  //           "></div>
  //           <div style="font-size: 10px; letter-spacing: 1px;">
  //             ${item.barcode}
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   `;
  //   });

  //   return etiquetasHtml.join("");
  // };

  const gerarHTML = () => {
    const etiquetasHtml = etiquetas.map((item) => {
      return `
      <div style="
        width: 300px;
        height: 120px;
        background-color: #FFDE59;
        padding: 10px 14px;
        margin: 10px;
        font-family: Arial, sans-serif;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border: 1px solid #ccc;
        overflow: hidden;
      ">
        <div style="
          height: 25px; 
          font-weight: bold;
          font-size: 14px;
          text-transform: uppercase;
          display: flex;
          align-items: center;
        ">
          ${item.desc}
        </div>

        <div style="
          flex-grow: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          text-align: center;
          font-weight: bold;
          padding-top: 10px;
          padding-bottom: 10px; 
        ">
          R$ ${item.price.toFixed(2).replace(".", ",")}
        </div>

        <div style="
          height: 35px; 
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          padding: 0 8px;
          font-size: 12px;
          font-weight: bold;
        ">
          <div style="font-size: 12px; font-weight: bold; letter-spacing: 1px;">
            ${item.code}
          </div>
          <div style="text-align: right;">
            <div style="
              width: 120px;
              height: 40px;
              margin-bottom: 2px;
            "></div>
            <div style="font-size: 10px; letter-spacing: 1px;">
              ${item.barcode}
            </div>
          </div>
        </div>
      </div>
    `;
    });

    return etiquetasHtml.join("");
  };
  const gerarPDF = async () => {
    if (etiquetas.length === 0) {
      Alert.alert("Lista vazia", "Adicione produtos antes de gerar o PDF.");
      return;
    }

    const html = gerarHTML();

    const { uri } = await Print.printToFileAsync({ html });

    etiquetas.forEach((item) => adicionarHistorico(item));

    Alert.alert("PDF Gerado", "Você pode visualizar ou imprimir o arquivo.", [
      {
        text: "Visualizar PDF",
        onPress: () => Print.printAsync({ uri }),
      },
      { text: "OK", style: "cancel" },
    ]);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={[styles.header, { backgroundColor: theme.primary }]}>
        <Text style={[styles.headerTitle, { color: "#fff" }]}>Gerar Etiquetas</Text>
      </View>

      <FlatList
        data={etiquetas}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ padding: 20 }}
        renderItem={({ item }) => (
          <View style={[styles.etiqueta, { backgroundColor: theme.card }]}>
            <Text style={[styles.text, { color: theme.text }]}>
              {item.desc}
            </Text>
            <Text style={[styles.text, { color: theme.text }]}>
              Cod: {item.code}
            </Text>
            <Text style={[styles.text, { color: theme.text }]}>
              R$ {item.price.toFixed(2)}
            </Text>
          </View>
        )}
      />

      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.primary }]}
        onPress={gerarPDF}
      >
        <Text style={styles.buttonText}>Gerar PDF de Etiquetas</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "red", marginTop: 10 }]}
        onPress={limparEtiquetas}
      >
        <Text style={styles.buttonText}>Limpar lista</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { paddingTop: 80, paddingBottom: 20 },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 60,
    marginBottom: 20,
    textAlign: "center",
  },
  etiqueta: {
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  text: {
    fontSize: 16,
  },
  button: {
    margin: 20,
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
