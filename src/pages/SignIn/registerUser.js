import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import bcrypt from "react-native-bcrypt";
import { useTheme } from "../../../styles/ThemeContext";
import { TextInputMask } from "react-native-masked-text";

export default function RegisterUser() {
  const { theme } = useTheme();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    dpt: "",
    cel: "",
    end: "",
  });

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.password) {
      Alert.alert("Erro", "Preencha todos os campos obrigatórios.");
      return;
    }

    const senhaForte =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!senhaForte.test(form.password)) {
      Alert.alert(
        "Senha fraca",
        "A senha deve ter no mínimo 8 caracteres, uma letra maiúscula, um número e um caractere especial."
      );
      return;
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(form.password, salt);

    const usuario = {
      usr_name: form.name,
      usr_email: form.email,
      usr_pass: hashedPassword,
      usr_dpt: form.dpt,
      usr_cel: form.cel,
      usr_end: form.end,
    };

    console.log("Usuário Cadastrado:", usuario);
    Alert.alert("Sucesso", "Usuário cadastrado com sucesso!");

    setForm({
      name: "",
      email: "",
      password: "",
      dpt: "",
      cel: "",
      end: "",
    });
  };

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        {
          backgroundColor: theme.background,
          flexGrow: 1,
          justifyContent: "center",
        },
      ]}
    >
      <Text style={[styles.title, { color: theme.text }]}>
        Cadastro de Usuário
      </Text>

      <Input
        label="Nome"
        value={form.name}
        onChange={(v) => handleChange("name", v)}
        theme={theme}
      />
      <Input
        label="Email"
        value={form.email}
        onChange={(v) => handleChange("email", v)}
        theme={theme}
      />
      <Input
        label="Senha"
        value={form.password}
        onChange={(v) => handleChange("password", v)}
        secureTextEntry
        theme={theme}
      />
      <Input
        label="Departamento"
        value={form.dpt}
        onChange={(v) => handleChange("dpt", v)}
        theme={theme}
      />
      <MaskedInput
        label="Celular"
        value={form.cel}
        onChange={(v) => handleChange("cel", v)}
        theme={theme}
      />
      <Input
        label="Endereço"
        value={form.end}
        onChange={(v) => handleChange("end", v)}
        theme={theme}
      />

      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.primary }]}
        onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

// Input normal
const Input = ({ label, value, onChange, secureTextEntry, theme }) => (
  <View style={styles.inputContainer}>
    <Text style={[styles.label, { color: theme.text }]}>{label}</Text>
    <TextInput
      value={value}
      onChangeText={onChange}
      secureTextEntry={secureTextEntry}
      placeholder={`Digite o(a) ${label.toLowerCase()}`}
      placeholderTextColor={theme.placeholder || "#999"}
      style={[
        styles.input,
        {
          backgroundColor: theme.card,
          color: theme.text,
          borderColor: theme.border || "#ccc",
        },
      ]}
    />
  </View>
);

// Input com máscara para celular
const MaskedInput = ({ label, value, onChange, theme }) => (
  <View style={styles.inputContainer}>
    <Text style={[styles.label, { color: theme.text }]}>{label}</Text>
    <TextInputMask
      type={"cel-phone"}
      options={{
        maskType: "BRL",
        withDDD: true,
        dddMask: "(99) ",
      }}
      value={value}
      onChangeText={onChange}
      placeholder="Digite o número"
      placeholderTextColor={theme.placeholder || "#999"}
      style={[
        styles.input,
        {
          backgroundColor: theme.card,
          color: theme.text,
          borderColor: theme.border || "#ccc",
        },
      ]}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 80,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    fontSize: 15,
  },
  button: {
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 17,
  },
});
