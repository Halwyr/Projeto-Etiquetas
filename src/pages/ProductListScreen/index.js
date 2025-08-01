import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Modal,
  Alert,
} from "react-native";
import { useTheme } from "../../../styles/ThemeContext";
import Icon from "react-native-vector-icons/Feather";
import ExcelJS from "exceljs";
import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";
import * as Print from "expo-print";

// JSON contendo os produtos cadastrados
const mockProducts = [
  {
    id: "1",
    code: "000001",
    barcode: "7893698521475",
    desc: "Caneta Azul",
    price: 2.5,
    qty: 100,
  },
  {
    id: "2",
    code: "000002",
    barcode: "7898521479631",
    desc: "Caderno 1000 folhas",
    price: 15.0,
    qty: 50,
  },
  {
    id: "3",
    code: "000003",
    barcode: "7896541238526",
    desc: "SSD 1 TB",
    price: 500.0,
    qty: 3,
  },
  {
    id: "4",
    code: "000004",
    barcode: "7893214561235",
    desc: "Mouse Gamer",
    price: 150.0,
    qty: 6,
  },
  {
    id: "5",
    code: "000005",
    barcode: "7896541237412",
    desc: "Teclado Sem Fio Gamer",
    price: 399.0,
    qty: 3,
  },
  {
    id: "6",
    code: "000006",
    barcode: "7892583691475",
    desc: "Monitor 4K 42' Samsung",
    price: 1200.0,
    qty: 3,
  },
  {
    id: "7",
    code: "000007",
    barcode: "7891238521475",
    desc: "Controle PS5 - Black",
    price: 399.0,
    qty: 2,
  },
];

export default function ProductListScreen() {
  const { theme } = useTheme();
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState(mockProducts);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleSearch = (text) => {
    setSearch(text);
    const filtered = mockProducts.filter(
      (p) =>
        p.code.includes(text) ||
        p.desc.toLowerCase().includes(text.toLowerCase())
    );
    setProducts(filtered);
  };

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setModalVisible(false);
  };

  // Função para gerar relatório Excel
  const gerarRelatorioExcel = async () => {
    if (products.length === 0) {
      Alert.alert("Lista vazia", "Não há produtos para gerar relatório.");
      return;
    }

    try {
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet("Produtos");

      worksheet.columns = [
        { header: "Código", key: "code", width: 15 },
        { header: "Código de Barras", key: "barcode", width: 25 },
        { header: "Descrição", key: "desc", width: 30 },
        { header: "Preço (R$)", key: "price", width: 15 },
        { header: "Quantidade", key: "qty", width: 15 },
      ];

      products.forEach((p) => {
        worksheet.addRow({
          code: p.code,
          barcode: p.barcode,
          desc: p.desc,
          price: p.price,
          qty: p.qty,
        });
      });

      worksheet.getRow(1).eachCell((cell) => {
        cell.font = { bold: true, color: { argb: "FFFFFFFF" } };
        cell.fill = {
          type: "pattern",
          pattern: "solid",
          fgColor: { argb: "FF007ACC" },
        };
        cell.alignment = { horizontal: "center" };
      });

      const buffer = await workbook.xlsx.writeBuffer();
      const fileUri = FileSystem.cacheDirectory + "relatorio_produtos.xlsx";
      await FileSystem.writeAsStringAsync(fileUri, buffer.toString("base64"), {
        encoding: FileSystem.EncodingType.Base64,
      });

      if (await Sharing.isAvailableAsync()) {
        await Sharing.shareAsync(fileUri, {
          mimeType:
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          dialogTitle: "Compartilhar Relatório Excel",
        });
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Não foi possível gerar o relatório Excel.");
    }
  };

  // Função para gerar relatório PDF
  const gerarRelatorioPDF = async () => {
    if (products.length === 0) {
      Alert.alert("Lista vazia", "Não há produtos para gerar relatório.");
      return;
    }

    const html = `
      <html>
        <head>
          <style>
            body { font-family: Arial; padding: 20px; }
            h1 { text-align: center; color: #007ACC; }
            table { width: 100%; border-collapse: collapse; margin-top: 20px; }
            th, td { border: 1px solid #ddd; padding: 8px; text-align: center; }
            th { background-color: #007ACC; color: white; }
          </style>
        </head>
        <body>
          <h1>Relatório de Produtos</h1>
          <table>
            <tr>
              <th>Código</th>
              <th>Código de Barras</th>
              <th>Descrição</th>
              <th>Preço (R$)</th>
              <th>Quantidade</th>
            </tr>
            ${products
              .map(
                (p) => `
              <tr>
                <td>${p.code}</td>
                <td>${p.barcode}</td>
                <td>${p.desc}</td>
                <td>R$ ${p.price.toFixed(2).replace(".", ",")}</td>
                <td>${p.qty}</td>
              </tr>`
              )
              .join("")}
          </table>
        </body>
      </html>
    `;

    const { uri } = await Print.printToFileAsync({ html });

    if (await Sharing.isAvailableAsync()) {
      await Sharing.shareAsync(uri, {
        mimeType: "application/pdf",
        dialogTitle: "Compartilhar Relatório PDF",
      });
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Header */}
      <View style={[styles.header, { backgroundColor: theme.primary }]}>
        <Text style={[styles.headerTitle, { color: "#fff" }]}>
          Consultar Produtos
        </Text>
      </View>

      {/* Campo de busca + Impressora */}
      <View style={styles.searchRow}>
        <TextInput
          style={[
            styles.input,
            {
              backgroundColor: theme.card,
              color: theme.text,
              borderColor: theme.primary,
            },
          ]}
          placeholder="Buscar por código ou descrição..."
          placeholderTextColor={theme.placeholder}
          value={search}
          onChangeText={handleSearch}
        />

        {/* Botão de menu para escolher PDF ou Excel */}
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() =>
            Alert.alert(
              "Exportar Relatório",
              "Escolha o formato de exportação:",
              [
                { text: "Excel", onPress: gerarRelatorioExcel },
                { text: "PDF", onPress: gerarRelatorioPDF },
                { text: "Cancelar", style: "cancel" },
              ]
            )
          }
        >
          <Icon name="printer" size={30} color={theme.primary} />
        </TouchableOpacity>
      </View>

      {/* Lista de produtos */}
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => openModal(item)}
            style={[styles.card, { backgroundColor: theme.card }]}
          >
            <Text style={[styles.line, { color: theme.text }]}>
              Código: {item.code}
            </Text>
            <Text style={[styles.line, { color: theme.text }]}>
              Descrição: {item.desc}
            </Text>
            <Text style={[styles.line, { color: theme.text }]}>
              Preço: R$ {item.price.toFixed(2)}
            </Text>
          </TouchableOpacity>
        )}
      />

      {/* Modal de detalhes */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContent, { backgroundColor: theme.card }]}>
            <Text style={[styles.modalTitle, { color: theme.text }]}>
              Detalhes do Produto
            </Text>
            {selectedProduct && (
              <>
                <Text style={[styles.modalText, { color: theme.text }]}>
                  Código: {selectedProduct.code}
                </Text>
                <Text style={[styles.modalText, { color: theme.text }]}>
                  Código de Barras: {selectedProduct.barcode}
                </Text>
                <Text style={[styles.modalText, { color: theme.text }]}>
                  Descrição: {selectedProduct.desc}
                </Text>
                <Text style={[styles.modalText, { color: theme.text }]}>
                  Preço: R$ {selectedProduct.price.toFixed(2)}
                </Text>
                <Text style={[styles.modalText, { color: theme.text }]}>
                  Quantidade: {selectedProduct.qty}
                </Text>
              </>
            )}
            <TouchableOpacity
              style={[styles.modalButton, { backgroundColor: theme.primary }]}
              onPress={closeModal}
            >
              <Text style={styles.modalButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 80,
    paddingBottom: 20,
  },
  headerTitle: { fontSize: 24, fontWeight: "bold", textAlign: "center" },
  searchRow: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingTop: 10,
    alignItems: "center",
  },
  input: {
    flex: 1,
    borderRadius: 20,
    paddingHorizontal: 16,
    height: 48,
    fontSize: 16,
    borderWidth: 1,
  },
  iconButton: { paddingHorizontal: 15 },
  card: { padding: 12, borderRadius: 8, marginBottom: 12 },
  line: { fontSize: 16, marginBottom: 4 },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  modalContent: { width: "100%", borderRadius: 10, padding: 24 },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
  },
  modalText: { fontSize: 16, marginBottom: 8 },
  modalButton: {
    marginTop: 20,
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  modalButtonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});
