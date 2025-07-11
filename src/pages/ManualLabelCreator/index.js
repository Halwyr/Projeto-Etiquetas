import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from "react-native";
import { useTheme } from "../../../styles/ThemeContext";
import { useEtiqueta } from "../../context/EtiquetaContext";

export default function ManualLabelCreator() {
  const { theme } = useTheme();
  const { adicionarEtiqueta } = useEtiqueta();

  const [code, setCode] = useState("");
  const [barcode, setBarcode] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");

  const handleAddEtiqueta = () => {
    if (!code || !barcode || !desc || !price) {
      Alert.alert(
        "Campos obrigatórios",
        "Preencha todos os campos obrigatórios."
      );
      return;
    }

    const novaEtiqueta = {
      id: Date.now().toString(),
      code,
      barcode,
      desc,
      price: parseFloat(price),
      qty: qty ? parseInt(qty) : 0,
    };

    adicionarEtiqueta(novaEtiqueta);

    Alert.alert("Sucesso!", "Etiqueta adicionada à fila de impressão.");
    setCode("");
    setBarcode("");
    setDesc("");
    setPrice("");
    setQty("");
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={[styles.header, { backgroundColor: theme.primary }]}>
        <Text style={[styles.headerTitle, { color: "#fff" }]}>Busca Preço</Text>
      </View>
      <KeyboardAvoidingView
        style={[styles.container, { backgroundColor: theme.background }]}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView contentContainerStyle={styles.scroll}>
          <Text style={[styles.title, { color: theme.primary }]}>
            Criar Etiqueta Manualmente
          </Text>

          <TextInput
            style={[
              styles.input,
              {
                color: theme.text,
                borderColor: theme.primary,
                backgroundColor: theme.card,
              },
            ]}
            placeholder="Código"
            placeholderTextColor={theme.placeholder}
            value={code}
            onChangeText={setCode}
          />

          <TextInput
            style={[
              styles.input,
              {
                color: theme.text,
                borderColor: theme.primary,
                backgroundColor: theme.card,
              },
            ]}
            placeholder="Código de Barras"
            placeholderTextColor={theme.placeholder}
            value={barcode}
            onChangeText={setBarcode}
          />

          <TextInput
            style={[
              styles.input,
              {
                color: theme.text,
                borderColor: theme.primary,
                backgroundColor: theme.card,
              },
            ]}
            placeholder="Descrição"
            placeholderTextColor={theme.placeholder}
            value={desc}
            onChangeText={setDesc}
          />

          <TextInput
            style={[
              styles.input,
              {
                color: theme.text,
                borderColor: theme.primary,
                backgroundColor: theme.card,
              },
            ]}
            placeholder="Preço"
            placeholderTextColor={theme.placeholder}
            keyboardType="numeric"
            value={price}
            onChangeText={setPrice}
          />

          <TextInput
            style={[
              styles.input,
              {
                color: theme.text,
                borderColor: theme.primary,
                backgroundColor: theme.card,
              },
            ]}
            placeholder="Quantidade (opcional)"
            placeholderTextColor={theme.placeholder}
            keyboardType="numeric"
            value={qty}
            onChangeText={setQty}
          />

          <TouchableOpacity
            style={[styles.button, { backgroundColor: theme.primary }]}
            onPress={handleAddEtiqueta}
          >
            <Text style={styles.buttonText}>Adicionar à Fila de Impressão</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
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
  container: {
    flex: 1,
  },
  scroll: {
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 24,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 12,
  },
  button: {
    marginTop: 20,
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
