import React from "react";
import { StatusBar } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import { ThemeProvider } from "./styles/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <StatusBar backgroundColor="#363636" barStyle="light-content" />
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
}