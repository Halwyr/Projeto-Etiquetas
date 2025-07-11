import React from "react";
import { StatusBar } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import { ThemeProvider } from "./styles/ThemeContext";
import { EtiquetaProvider } from "./src/context/EtiquetaContext";
import { HistoricoProvider } from "./src/context/HistoricoContext";

export default function App() {
  return (
    <EtiquetaProvider>
      <ThemeProvider>
        <HistoricoProvider>
          <NavigationContainer>
            <StatusBar backgroundColor="#363636" barStyle="light-content" />
            <Routes />
          </NavigationContainer>
        </HistoricoProvider>
      </ThemeProvider>
    </EtiquetaProvider>
  );
}
