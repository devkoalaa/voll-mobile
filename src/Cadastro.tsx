import {
  Box,
  Image,
  Link,
  Text,
  VStack,
  Checkbox,
  ScrollView,
} from "native-base";
import { TouchableOpacity } from "react-native";
import Logo from "./assets/Logo.png";
import { Botao } from "./components/Botao";
import { EntradaTexto } from "./components/EntradaTexto";
import { Titulo } from "./components/Titulo";
import React, { useState } from "react";
import { secoes } from "./utils/CadastroEntradaTexto";

export default function Cadastro() {
  const [numSecao, setNumSecao] = useState(0);

  const avancarSecao = () => {
    numSecao < secoes.length - 1 && setNumSecao(numSecao + 1);
  };

  const voltarSecao = () => {
    numSecao > 0 && setNumSecao(numSecao - 1);
  };

  return (
    <ScrollView flex={1} p={5}>
      <Image source={Logo} alt={"Logo Voll"} alignSelf={"center"} />
      <Titulo>{secoes[numSecao].titulo}</Titulo>
      {secoes[numSecao].entradaTexto && (
        <Box>
          {secoes[numSecao].entradaTexto.map((entrada) => {
            return (
              <EntradaTexto
                label={entrada.label}
                placeholder={entrada.placeholder}
                key={entrada.id}
              />
            );
          })}
        </Box>
      )}
      {secoes[numSecao].checkbox && (
        <Box>
          <Text color="blue.800" fontWeight={"bold"} fontSize={"md"} my={2}>
            Selecione seus planos:
          </Text>
          {secoes[numSecao].checkbox.map((checkbox) => {
            return (
              <Checkbox value={checkbox.value} key={checkbox.id}>
                {checkbox.value}
              </Checkbox>
            );
          })}
        </Box>
      )}
      {numSecao > 0 && (
        <Botao onPress={voltarSecao} bgColor={"gray.500"} mt={4}>
          Voltar
        </Botao>
      )}
      <Botao onPress={avancarSecao} mt={4} mb={10}>
        {numSecao == secoes.length - 1 ? "Cadastrar!" : "Avançar"}
      </Botao>
    </ScrollView>
  );
}
