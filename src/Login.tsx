import { Box, Image, Link, Text, VStack, useToast } from "native-base";
import { TouchableOpacity } from "react-native";
import Logo from "./assets/Logo.png";
import { Button } from "./components/Button";
import { InputText } from "./components/InputText";
import { Title } from "./components/Title";
import { useEffect, useState } from "react";
import { login } from "./servicos/login";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode";
import "core-js/stable/atob";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const toast = useToast();

  useEffect(() => {
    async function checkLogin() {
      const token = await AsyncStorage.getItem("vollToken");
      if (token) {
        navigation.replace("Tabs");
      }
      setLoading(false);
    }

    checkLogin();
  }, []);

  async function submitLogin() {
    const result = await login(email, password);

    if (result) {
      const { token } = result;
      AsyncStorage.setItem("vollToken", token);

      const tokenDecoded = jwtDecode(token) as any;
      const pacienteId = tokenDecoded.id;
      AsyncStorage.setItem("vollPacientId", pacienteId);

      navigation.replace("Tabs");
    } else {
      toast.show({
        title: "Erro no login",
        description: "O email ou senha não conferem",
        backgroundColor: "red.500",
      });
    }
  }

  if (loading) {
    return null;
  }

  return (
    <VStack flex={1} alignItems={"center"} justifyContent={"center"} p={5}>
      <Image source={Logo} alt={"Logo Voll"} />
      <Title>Faça login em sua conta</Title>
      <Box>
        <InputText
          placeholder={"Insira seu email"}
          label={"Email"}
          value={email}
          onChangeText={setEmail}
        />
        <InputText
          placeholder={"Insira sua senha"}
          label={"Senha"}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </Box>
      <Button onPress={() => submitLogin()}>Entrar</Button>
      <Link href={"https://google.com"} mt={2}>
        Esqueceu sua senha?
      </Link>
      <Box w={"100%"} flexDirection={"row"} justifyContent={"center"} mt={8}>
        <Text>Ainda não tem cadastro?</Text>
        <TouchableOpacity>
          <Text
            color={"blue.500"}
            ml={1}
            onPress={() => navigation.navigate("Cadastro")}
          >
            Faça seu cadastro!
          </Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}
