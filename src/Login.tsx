import { Box, Image, Link, Text, VStack } from "native-base";
import { TouchableOpacity } from "react-native";
import Logo from "./assets/Logo.png";
import { Botao } from "./components/Botao";
import { EntradaTexto } from "./components/EntradaTexto";
import { Titulo } from "./components/Titulo";

export default function Login({ navigation }) {
  return (
    <VStack flex={1} alignItems={"center"} justifyContent={"center"} p={5}>
      <Image source={Logo} alt={"Logo Voll"} />
      <Titulo>Faça login em sua conta</Titulo>
      <Box>
        <EntradaTexto placeholder={"Insira seu email"} label={"Email"} />
        <EntradaTexto placeholder={"Insira sua senha"} label={"Senha"} />
      </Box>
      <Botao onPress={() => navigation.navigate("Tabs")}>Entrar</Botao>
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
