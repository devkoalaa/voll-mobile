import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Avatar,
  Divider,
  ScrollView,
  VStack,
  useToast
} from "native-base";
import React, { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Title } from "../components/Title";
import { getPaciente } from "../servicos/PacienteService";
import { Paciente } from "../utils/interfaces";

export default function Perfil({ navigation }) {
  const [paciente, setPaciente] = useState<Paciente>();
  const toast = useToast();

  useEffect(() => {
    async function dadosPaciente() {
      const pacienteId = await AsyncStorage.getItem("vollPacienteId");
      const result = await getPaciente(pacienteId);

      if (result.error) {
        toast.show({
          title: "Falha",
          description: "Não foi possível carregas os dados do paciente.",
          backgroundColor: "red.500",
        });

        return;
      }

      setPaciente(result);
    }

    dadosPaciente();
  }, []);

  const logout = async () => {
    await AsyncStorage.removeItem("vollToken");
    await AsyncStorage.removeItem("vollPacienteId");

    navigation.navigate("Login");
  };

  if (!paciente) {
    return null;
  }

  return (
    <ScrollView flex={1}>
      <VStack flex={1} alignItems={"center"} p={5}>
        <Title color={"blue.500"}>Meu perfil</Title>
        <Avatar source={{ uri: paciente.imagem }} mt={5} size={"xl"} />
        <Title color={"blue.500"}>Informações pessoais</Title>
        <Title fontSize={"lg"}>{paciente.nome}</Title>
        <Title fontSize={"sm"} mt={1}>
          {paciente.email}
        </Title>
        <Title fontSize={"sm"} mt={0}>
          {paciente.endereco.estado}
        </Title>
        <Divider mt={5} />
        <Title color={"blue.500"} mb={0}>
          Planos de saúde
        </Title>
        {paciente.planosSaude.map((plano, index) => {
          return (
            <Title fontSize={"sm"} mt={1} key={index}>
              {plano}
            </Title>
          );
        })}
        <Button onPress={logout} width={"30%"} bgColor={"red.800"}>
          Deslogar
        </Button>
      </VStack>
    </ScrollView>
  );
}
