import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Modal,
} from "react-native";
import { useTheme } from "../../../styles/ThemeContext";

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

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Header */}
      <View style={[styles.header, { backgroundColor: theme.primary }]}>
        <Text style={[styles.headerTitle, { color: "#fff" }]}>
          Consultar Produtos
        </Text>
      </View>

      {/* Campo de busca */}
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
                  Quantidade em estoque: {selectedProduct.qty}
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
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
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
  card: {
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  line: {
    fontSize: 16,
    marginBottom: 4,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  modalContent: {
    width: "100%",
    borderRadius: 10,
    padding: 24,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
  },
  modalText: {
    fontSize: 16,
    marginBottom: 8,
  },
  modalButton: {
    marginTop: 20,
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  modalButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});