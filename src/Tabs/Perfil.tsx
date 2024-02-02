import { VStack, ScrollView, Avatar, Divider, Text } from "native-base";
import { Titulo } from "../components/Titulo";

export default function Perfil() {
  return (
    <ScrollView flex={1}>
      <VStack flex={1} alignItems={"center"} p={5}>
        <Titulo color={"blue.500"}>Meu perfil</Titulo>
        <Avatar
          source={{ uri: "https://github.com/devkoalaa.png" }}
          mt={5}
          size={"xl"}
        />
        <Titulo color={"blue.500"}>Informações pessoais</Titulo>
        <Titulo fontSize={"lg"}>Herbert Valadares</Titulo>
        <Text>16/12/1997</Text>
        <Text>Brasília - DF</Text>
        <Divider mt={5} />
        <Titulo color={"blue.500"} mb={1}>
          Histórico médico
        </Titulo>
        <Text>Bronquite</Text>
        <Text>Sinusite</Text>
      </VStack>
    </ScrollView>
  );
}
