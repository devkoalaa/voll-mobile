import { Box, Divider, Image, ScrollView, VStack } from "native-base";
import Logo from "../assets/Logo.png";
import { InputText } from "../components/InputText";
import { Button } from "../components/Button";
import { Title } from "../components/Title";
import AsyncStorage from "@react-native-async-storage/async-storage";

const depoimentos = [
  {
    depoimento:
      "Eu uso o aplicativo Consulta Fácil há mais de um ano e estou muito satisfeito com o serviço. O aplicativo é fácil de usar, rápido e seguro. Eu posso marcar consultas com os melhores médicos da minha região, sem filas ou burocracia. O aplicativo também me lembra das minhas consultas e me envia dicas de saúde. Eu recomendo o aplicativo Consulta Fácil para todos que querem cuidar da sua saúde com praticidade e qualidade.",
    autor: "Júlio, 40 anos, São Paulo/SP.",
  },
  {
    depoimento:
      "O app Voll é o meu aliado na hora de cuidar da minha saúde. O app é intuitivo, ágil e seguro. Eu posso marcar consultas com os especialistas de saúde mais renomados da minha cidade, sem sair de casa ou perder tempo. O app também me notifica das minhas consultas e me dá dicas de saúde. Eu aconselho o app Voll para todos que querem cuidar da sua saúde com comodidade e qualidade.",
    autor: "Júlio, 40 anos, São Paulo/SP.",
  },
  {
    depoimento:
      "O app Voll mudou a minha forma de cuidar da minha saúde. O app é prático, rápido e seguro. Eu posso marcar consultas com os médicos de saúde mais competentes da minha região, sem precisar de telefone ou papelada. O app também me lembra das minhas consultas e me fornece informações de saúde. Eu sugiro o app Voll para todos que querem cuidar da sua saúde com conforto e eficiência.",
    autor: "Júlio, 40 anos, São Paulo/SP.",
  },
];

export default function Principal() {
  const limparStorage = () => {
    AsyncStorage.clear();
  };

  return (
    <ScrollView flex={1} bgColor={"#fff"}>
      <VStack ml={5} mt={5}>
        <Image source={Logo} alt={"Logo Voll"} />
        <Title color={"blue.500"} textAlign={"left"}>
          Boas-vindas!
        </Title>
      </VStack>
      <Box
        alignItems={"center"}
        backgroundColor={"#fff"}
        borderRadius="lg"
        shadow={3}
        p={5}
        m={5}
      >
        <InputText placeholder="Digite a especialidade" />
        <InputText placeholder="Digite sua localização" />
        <Button onPress={limparStorage}>Buscar</Button>
      </Box>
      <Title color={"blue.800"} fontWeight={"bold"} my={4}>
        Depoimentos
      </Title>
      {depoimentos.map((depoimento, index) => {
        return (
          <VStack mx={5} key={index}>
            <Title fontSize={"md"} fontWeight={"normal"} textAlign={"justify"}>
              {depoimento.depoimento}
            </Title>
            <Title>{depoimento.autor}</Title>
            <Divider mt={5} />
          </VStack>
        );
      })}
    </ScrollView>
  );
}
