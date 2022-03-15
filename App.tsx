import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "./src/routes";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#38A69D" />
      <Routes />
    </NavigationContainer>
  );
}
