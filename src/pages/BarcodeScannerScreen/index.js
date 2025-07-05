// import React, { useEffect, useState } from "react";
// import { View, Text, StyleSheet, Alert, Modal, TouchableOpacity } from "react-native";
// // Importações do expo-camera para substituir expo-barcode-scanner
// import { Camera, useCameraDevices, useCameraPermissions } from "expo-camera";
// import { useTheme } from "../../../styles/ThemeContext"; // Mantendo seu hook de tema
// import { useNavigation } from "@react-navigation/native";

// // Mock de produtos
// const mockProducts = [
//   {
//     id: "1",
//     code: "000001",
//     barcode: "7893698521475",
//     desc: "Caneta Azul",
//     price: 2.5,
//     qty: 100,
//   },
//   {
//     id: "2",
//     code: "000002",
//     barcode: "7898521479631",
//     desc: "Caderno 1000 folhas",
//     price: 15.0,
//     qty: 50,
//   },
//   {
//     id: "3",
//     code: "000003",
//     barcode: "7896541238526",
//     desc: "SSD 1 TB",
//     price: 500.0,
//     qty: 3,
//   },
//   {
//     id: "4",
//     code: "000004",
//     barcode: "7893214561235",
//     desc: "Mouse Gamer",
//     price: 150.0,
//     qty: 6,
//   },
//   {
//     id: "5",
//     code: "000005",
//     barcode: "7896541237412",
//     desc: "Teclado Sem Fio Gamer",
//     price: 399.0,
//     qty: 3,
//   },
//   {
//     id: "6",
//     code: "000006",
//     barcode: "7892583691475",
//     desc: "Monitor 4K 42' Samsung",
//     price: 1200.0,
//     qty: 3,
//   },
//   {
//     id: "7",
//     code: "000007",
//     barcode: "7891238521475",
//     desc: "Controle PS5 - Black",
//     price: 399.0,
//     qty: 2,
//   },
// ];

// export default function BarcodeScannerScreen() {
//   const { theme } = useTheme();
//   const navigation = useNavigation();

//   // Hooks do expo-camera para permissões e dispositivos
//   const [cameraPermission, requestCameraPermission] = useCameraPermissions();
//   const cameraDevices = useCameraDevices();
//   const backCameraDevice = cameraDevices.back; // Seleciona a câmera traseira

//   const [scanned, setScanned] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   // Solicita permissão da câmera ao montar o componente
//   useEffect(() => {
//     requestCameraPermission();
//   }, []);

//   // Função para lidar com o código de barras escaneado
//   const handleBarCodeScanned = ({ data }) => {
//     // Se já escaneou e o modal está aberto, não escaneia novamente
//     if (scanned) return;

//     setScanned(true); // Pausa o scanner

//     const found = mockProducts.find((p) => p.barcode === data);

//     if (found) {
//       setSelectedProduct(found); // Define o produto encontrado para exibir no modal
//     } else {
//       // Se o produto não for encontrado, exibe um alerta e reativa o scanner
//       Alert.alert(
//         "Produto não encontrado",
//         "Nenhum item com esse código de barras.",
//         [{ text: "OK", onPress: () => setScanned(false) }] // Reativa o scanner
//       );
//       // Não navega de volta, permite que o usuário tente novamente
//     }
//   };

//   // Mensagens de status da câmera
//   if (!cameraPermission?.granted) {
//     return (
//       <View style={styles.centeredContainer}>
//         <Text>Solicitando permissão da câmera...</Text>
//         <TouchableOpacity onPress={requestCameraPermission}>
//           <Text style={styles.permissionButton}>Conceder Permissão</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }

//   if (!backCameraDevice) {
//     return (
//       <View style={styles.centeredContainer}>
//         <Text>Carregando câmera...</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <Camera
//         style={StyleSheet.absoluteFillObject}
//         device={backCameraDevice}
//         isActive={!scanned} // Controla se a câmera está ativa para escanear
//         onBarCodeScanned={handleBarCodeScanned}
//         // barCodeScannerSettings pode ser adicionado aqui se precisar especificar tipos de código
//         barCodeScannerSettings={{
//           barCodeTypes: ["ean13", "code128", "ean8"], // Exemplo de tipos de código
//         }}
//       />

//       {/* Modal com informações do produto */}
//       <Modal visible={!!selectedProduct} transparent animationType="fade">
//         <View style={styles.modalOverlay}>
//           <View style={[styles.modalContent, { backgroundColor: theme.card }]}>
//             <Text style={[styles.modalTitle, { color: theme.text }]}>
//               Produto Encontrado
//             </Text>
//             <Text style={[styles.modalText, { color: theme.text }]}>
//               Código: {selectedProduct?.code}
//             </Text>
//             <Text style={[styles.modalText, { color: theme.text }]}>
//               Descrição: {selectedProduct?.desc}
//             </Text>
//             <Text style={[styles.modalText, { color: theme.text }]}>
//               Preço: R$ {selectedProduct?.price?.toFixed(2)}
//             </Text>
//             <Text style={[styles.modalText, { color: theme.text }]}>
//               Quantidade: {selectedProduct?.qty}
//             </Text>

//             <TouchableOpacity
//               style={[styles.modalButton, { backgroundColor: theme.primary }]}
//               onPress={() => {
//                 setSelectedProduct(null); // Fecha o modal
//                 setScanned(false); // Reativa o scanner para uma nova leitura
//               }}
//             >
//               <Text style={styles.modalButtonText}>Fechar</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   centeredContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   permissionButton: {
//     marginTop: 20,
//     padding: 10,
//     backgroundColor: "#007AFF", // Cor de exemplo
//     color: "white",
//     borderRadius: 5,
//   },
//   modalOverlay: {
//     flex: 1,
//     backgroundColor: "rgba(0,0,0,0.6)",
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//   },
//   modalContent: {
//     width: "100%",
//     borderRadius: 10,
//     padding: 24,
//   },
//   modalTitle: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginBottom: 12,
//     textAlign: "center",
//   },
//   modalText: {
//     fontSize: 16,
//     marginBottom: 8,
//   },
//   modalButton: {
//     marginTop: 20,
//     padding: 12,
//     borderRadius: 8,
//     alignItems: "center",
//   },
//   modalButtonText: {
//     color: "#fff",
//     fontWeight: "bold",
//     fontSize: 16,
//   },
// });
