import { Box, Divider, Image, ScrollView, Stack, VStack } from "native-base";
import Logo from "../assets/Logo.png";
import { EntradaTexto } from "../components/EntradaTexto";
import { Botao } from "../components/Botao";
import { Titulo } from "../components/Titulo";

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
  return (
    <ScrollView flex={1} bgColor={"#fff"}>
      <VStack ml={5} mt={5}>
        <Image source={Logo} alt={"Logo Voll"} />
        <Titulo color={"blue.500"} textAlign={"left"}>
          Boas-vindas!
        </Titulo>
      </VStack>
      <Box
        alignItems={"center"}
        backgroundColor={"#fff"}
        borderRadius="lg"
        shadow={3}
        p={5}
        m={5}
      >
        <EntradaTexto placeholder="Digite a especialidade" />
        <EntradaTexto placeholder="Digite sua localização" />
        <Botao>Buscar</Botao>
      </Box>
      <Titulo color={"blue.800"} fontWeight={"bold"} my={4}>
        Depoimentos
      </Titulo>
      {depoimentos.map((depoimento, index) => {
        return (
          <VStack mx={5} key={index}>
            <Titulo fontSize={"md"} fontWeight={"normal"} textAlign={"justify"}>
              {depoimento.depoimento}
            </Titulo>
            <Titulo>{depoimento.autor}</Titulo>
            <Divider mt={5} />
          </VStack>
        );
      })}
    </ScrollView>
  );
}
