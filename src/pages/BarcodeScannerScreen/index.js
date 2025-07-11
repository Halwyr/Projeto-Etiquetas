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
import Icon from "react-native-vector-icons/Feather";

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
  const [input, setInput] = useState("");
  const [product, setProduct] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [error, setError] = useState("");

  const searchForPrice = () => {
    const result =
      mockProducts.find((p) => p.barcode === input.trim()) ||
      mockProducts.find((p) => p.code === input.trim());
    if (result) {
      setProduct(result);
      setModalVisible(true);
      setError("");
    } else {
      setProduct(null);
      setModalVisible(false);
      setError("Produto não encontrado!");
    }
  };

 return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={[styles.header, { backgroundColor: theme.primary }]}>
        <Text style={[styles.headerTitle, { color: "#fff" }]}>Busca Preço</Text>
      </View>

      <View style={styles.innerContainer}>
        <Text style={[styles.title, { color: theme.text }]}>
          Insira o código ou use a câmera
        </Text>

        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Código ou Código de Barras"
            value={input}
            onChangeText={setInput}
            placeholderTextColor={theme.placeholder}
            style={[
              styles.input,
              {
                backgroundColor: theme.card,
                color: theme.text,
                borderColor: theme.primary,
              },
            ]}
            keyboardType="numeric"
          />
          <TouchableOpacity
            style={styles.iconButton}
            // onPress={() => navigation.navigate("ScannerScreen")}
          >
            <Icon name="camera" size={22} color={theme.primary} />
          </TouchableOpacity>
        </View>

        {error !== "" && <Text style={styles.error}>{error}</Text>}

        <TouchableOpacity
          style={[styles.button, { backgroundColor: theme.primary }]}
          onPress={searchForPrice}
        >
          <Text style={styles.buttonText}>Pesquisar</Text>
        </TouchableOpacity>
      </View>

      {/* Modal */}
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View
            style={[styles.modalContent, { backgroundColor: theme.card }]}
          >
            <Text style={[styles.modalTitle, { color: theme.text }]}>
              Produto Encontrado
            </Text>
            {product && (
              <>
                <Text style={[styles.modalText, { color: theme.text }]}>
                  Código: {product.code}
                </Text>
                <Text style={[styles.modalText, { color: theme.text }]}>
                  Descrição: {product.desc}
                </Text>
                <Text style={[styles.modalText, { color: theme.text }]}>
                  Preço: R$ {product.price.toFixed(2)}
                </Text>
                <Text style={[styles.modalText, { color: theme.text }]}>
                  Quantidade: {product.qty}
                </Text>
              </>
            )}
            <TouchableOpacity
              style={[styles.button, { backgroundColor: theme.primary }]}
              onPress={() => {
                adicionarEtiqueta(product);
                setModalVisible(false);
                setInput("");
              }}
            >
              <Text style={styles.buttonText}>Adicionar à impressão</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={[styles.cancelButton]}
            >
              <Text style={[styles.cancelText, { color: theme.primary }]}>
                Fechar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  innerContainer: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 16,
    textAlign: "center",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    height: 50,
    paddingHorizontal: 12,
    fontSize: 16,
  },
  iconButton: {
    paddingHorizontal: 12,
  },
  button: {
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  error: {
    color: "red",
    textAlign: "center",
    marginBottom: 10,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    padding: 20,
  },
  modalContent: {
    borderRadius: 10,
    padding: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 12,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 6,
  },
  cancelButton: {
    marginTop: 16,
    alignItems: "center",
  },
  cancelText: {
    fontWeight: "bold",
    fontSize: 16,
  },
});