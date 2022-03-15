import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";

export function Welcome() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image
          animation="flipInY"
          source={require("../../assets/logo.png")}
          style={{
            width: "100%",
            resizeMode: "contain",
          }}
        />
      </View>
      <Animatable.View
        animation="fadeInUp"
        delay={600}
        style={styles.containerForm}
      >
        <Text style={styles.title}>
          Monitore, organize seus gastos de qualquer lugar!
        </Text>
        <Text style={styles.text}>Faça login para começar</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("signin")}
        >
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#38a69d",
  },
  containerLogo: {
    flex: 2,
    backgroundColor: "#38a69d",
    justifyContent: "center",
    alignItems: "center",
  },
  containerForm: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 28,
    marginBottom: 12,
  },
  text: {
    color: "#a1a1a1",
  },
  button: {
    position: "absolute",
    backgroundColor: "#38a69d",
    borderRadius: 50,
    paddingVertical: 8,
    width: "60%",
    alignSelf: "center",
    bottom: "15%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});
