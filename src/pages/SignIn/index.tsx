import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import { theme } from "../../styles/theme";
export function SignIn() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Animatable.View
        animation="fadeInLeft"
        delay={500}
        style={styles.containerHeader}
      >
        <Text style={styles.message}>Bem vindo(a)</Text>
      </Animatable.View>

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Animatable.View animation="fadeInUp" style={styles.containerForm}>
          <Text style={styles.title}>E-mail</Text>
          <TextInput
            placeholder="Digite um email"
            keyboardType="email-address"
            style={styles.input}
          />
          <Text style={styles.title}>Senha</Text>
          <TextInput
            placeholder="Sua senha"
            style={styles.input}
            secureTextEntry
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Acessar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonRegister}
            onPress={() => navigation.navigate("register")}
          >
            <Text style={styles.buttonRegisterText}>
              Não possui uma conta? Registre-se
            </Text>
          </TouchableOpacity>
        </Animatable.View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  containerHeader: {
    marginTop: "14%",
    marginBottom: "8%",
    paddingStart: "5%",
  },
  message: {
    fontSize: 28,
    fontWeight: "bold",
    color: theme.colors.white,
  },
  containerForm: {
    flex: 1,
    backgroundColor: theme.colors.white,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
  },
  title: {
    fontSize: 20,
    marginTop: 28,
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor: theme.colors.background,
    width: "100%",
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: theme.colors.white,
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonRegister: {
    marginTop: 14,
    alignSelf: "center",
  },
  buttonRegisterText: {
    color: theme.colors.gray,
  },
});
