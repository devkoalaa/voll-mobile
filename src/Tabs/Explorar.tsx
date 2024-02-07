import { VStack, Box, ScrollView, useToast } from "native-base";
import { InputText } from "../components/InputText";
import { Button } from "../components/Button";
import { CardConsulta } from "../components/CardConsulta";
import { Title } from "../components/Title";
import { useState } from "react";
import { buscarEspecialista } from "../servicos/EspecialistaService";

export default function Explorar() {
  const toast = useToast();
  const [estado, setEstado] = useState("");
  const [especialidade, setEspecialidade] = useState("");
  const [resultBusca, setResultBusca] = useState([]);

  async function buscar() {
    if (!estado || !especialidade) return null;

    const result = await buscarEspecialista(estado, especialidade);

    if (result.error) {
      toast.show({
        title: "Falha",
        description: "Especialista não encontrado.",
        backgroundColor: "red.500",
      });

      return;
    }

    setResultBusca(result);

    toast.show({
      title: "Sucesso",
      description: "Especialistas encontrados.",
      backgroundColor: "green.500",
    });
  }

  return (
    <ScrollView flex={1} bgColor="white">
      <VStack
        flex={1}
        alignItems="flex-start"
        justifyContent="flex-start"
        p={5}
      >
        <Box
          w="100%"
          borderRadius="lg"
          p={3}
          mt={5}
          shadow="1"
          borderRightRadius="md"
        >
          <InputText
            placeholder="Digite a especialidade"
            value={especialidade}
            onChangeText={setEspecialidade}
          />
          <InputText
            placeholder="Digite sua localização"
            value={estado}
            onChangeText={setEstado}
          />
          <Button mt={3} mb={3} onPress={buscar}>
            Buscar
          </Button>
        </Box>

        <Title color="blue.500" alignSelf="center">
          Resultado da Busca
        </Title>
        {[1, 2, 3].map((_, index) => (
          <VStack
            flex={1}
            w="100%"
            alignItems="flex-start"
            bgColor="white"
            key={index}
            mb={5}
          >
            <CardConsulta
              especialidade="Cardiologia"
              foto="https://github.com/devkoalaa.png"
              nome="Dr. Klebão do Pneu"
            />
          </VStack>
        ))}
      </VStack>
    </ScrollView>
  );
}
