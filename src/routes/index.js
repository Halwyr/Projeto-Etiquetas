import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "../pages/Welcome";
import SignIn from "../pages/SignIn";
import HomeScreen from "../pages/HomeScreen";
import CustomDrawerContent from "../../components/Header/CustomDrawerContent";
import AboutUs from "../pages/HomeScreen/aboutUs";
import Settings from "../pages/HomeScreen/settings";
import Notifications from "../pages/HomeScreen/notifications";

import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomHeader from "../../components/Header/CustomHeader";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function HomeDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{ header: (props) => <CustomHeader {...props} /> }}
      // screenOptions={{ headerShown: false }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      {/* Adiconar as novas telas aqui para aparecer o Menu */}
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      <Drawer.Screen name="AboutUs" component={AboutUs} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="Notifications" component={Notifications} />
    </Drawer.Navigator>
  );
}

export default function Routes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Home" component={HomeDrawer} />
    </Stack.Navigator>
  );
}
