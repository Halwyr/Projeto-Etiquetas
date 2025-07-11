import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "../pages/Welcome";
import SignIn from "../pages/SignIn";
import HomeScreen from "../pages/HomeScreen";
import CustomDrawerContent from "../../components/Header/CustomDrawerContent";
import AboutUs from "../pages/AboutUs/aboutUs";
import Settings from "../pages/Settings/settings";
import ProfileScreen from "../pages/Settings/profileScreen";
import Notifications from "../pages/Notifications/notifications";
import ForgotPassword from "../pages/SignIn/forgotPassword";

import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomHeader from "../../components/Header/CustomHeader";
import ProductListScreen from "../pages/ProductListScreen";
import BarcodeScannerScreen from "../pages/BarcodeScannerScreen";
import EtiquetaPreview from "../pages/EtiquetasPreview";
import ManualLabelCreator from "../pages/ManualLabelCreator";
import HistoryScreen from "../pages/HistoryScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function HomeDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{ header: (props) => <CustomHeader {...props} /> }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      {/* Adiconar as novas telas aqui para aparecer o Menu */}
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      <Drawer.Screen name="AboutUs" component={AboutUs} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="Notifications" component={Notifications} />
      <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
      <Drawer.Screen name="ProductList" component={ProductListScreen} />
      <Drawer.Screen name="ScannerScreen" component={BarcodeScannerScreen} />
      <Drawer.Screen name="EtiquetasPreview" component={EtiquetaPreview} />
      <Drawer.Screen name="ManualLabelCreator" component={ManualLabelCreator} />
      <Drawer.Screen name="HistoryScreen" component={HistoryScreen} />
    </Drawer.Navigator>
  );
}

export default function Routes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Home" component={HomeDrawer} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
}
