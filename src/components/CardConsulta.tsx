import { Text, Avatar, VStack } from "native-base";
import { Button } from "./Button";

interface CardProps {
  nome: string;
  foto: string;
  especialidade: string;
  data?: string;
  foiAtendido?: boolean;
  foiAgendado?: boolean;
}

export function CardConsulta({
  nome,
  foto,
  data,
  especialidade,
  foiAtendido,
  foiAgendado,
}: CardProps) {
  return (
    <VStack
      w={"100%"}
      bg={foiAtendido ? "blue.100" : "white"}
      p={5}
      borderRadius={"lg"}
      shadow={2}
    >
      <VStack flexDirection={"row"}>
        <Avatar size={"lg"} source={{ uri: foto }} />
        <VStack pl={4}>
          <Text fontSize={"md"} fontWeight={"bold"}>
            {nome}
          </Text>
          <Text>{especialidade}</Text>
          <Text>{data}</Text>
        </VStack>
      </VStack>
      <Button mt={4}>
        {foiAgendado ? "Cancelar" : "Agendar consulta"}
      </Button>
    </VStack>
  );
}
