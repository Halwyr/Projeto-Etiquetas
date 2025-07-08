import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from "react-native";
import { useTheme } from "../../../styles/ThemeContext";
import { useEtiqueta } from "../../context/EtiquetaContext";

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

export default function BarcodeScannerScreen() {
  const { adicionarEtiqueta } = useEtiqueta();
  const { theme } = useTheme();
  const [barcode, setBarcode] = useState("");
  const [product, setProduct] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [error, setError] = useState("");

  const handleFakeScan = () => {
    const found = mockProducts.find((p) => p.barcode === barcode.trim());
    if (found) {
      setProduct(found);
      setModalVisible(true);
      setError("");
    } else {
      setProduct(null);
      setModalVisible(false);
      setError("Produto não encontrado");
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.text }]}>
        Simulador de Scanner
      </Text>

      <TextInput
        placeholder="Digite o código de barras..."
        value={barcode}
        onChangeText={setBarcode}
        style={[
          styles.input,
          {
            backgroundColor: theme.card,
            borderColor: theme.primary,
            color: theme.text,
          },
        ]}
        placeholderTextColor={theme.placeholder}
        keyboardType="numeric"
      />

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.primary }]}
        onPress={handleFakeScan}
      >
        <Text style={styles.buttonText}>Simular Escaneamento</Text>
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContent, { backgroundColor: theme.card }]}>
            <Text style={[styles.modalTitle, { color: theme.text }]}>
              Produto encontrado!
            </Text>
            <Text style={[styles.modalText, { color: theme.text }]}>
              Código: {product?.code}
            </Text>
            <Text style={[styles.modalText, { color: theme.text }]}>
              Descrição: {product?.desc}
            </Text>
            <Text style={[styles.modalText, { color: theme.text }]}>
              Preço: R$ {product?.price.toFixed(2)}
            </Text>
            <Text style={[styles.modalText, { color: theme.text }]}>
              Quantidade: {product?.qty}
            </Text>

            <TouchableOpacity
              style={[styles.button, { backgroundColor: theme.primary }]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.buttonText}>Fechar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: theme.primary }]}
              onPress={() => {
                adicionarEtiqueta(product);
                setModalVisible(false);
                setBarcode("");
              }}
            >
              <Text style={styles.buttonText}>Adicionar à impressão</Text>
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
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 48,
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 12,
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  error: {
    color: "red",
    marginBottom: 10,
    textAlign: "center",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    padding: 20,
  },
  modalContent: {
    padding: 24,
    borderRadius: 12,
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
});
