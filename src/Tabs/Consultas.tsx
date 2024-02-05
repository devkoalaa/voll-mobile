import { Box, Divider, ScrollView, VStack } from "native-base";
import { Button } from "../components/Button";
import { CardConsulta } from "../components/CardConsulta";
import { Title } from "../components/Title";

const consultas = [
  {
    nome: "Dr. Klebão do Pneu",
    foto: "https://github.com/devkoalaa.png",
    especialidade: "Cardiologista",
    data: "02/02/2024",
    foiAtendido: true,
    foiAgendado: false,
  },
  {
    nome: "Dr. Vitão da Hornet",
    foto: "https://github.com/afrontoso.png",
    especialidade: "Dermatologista",
    data: "16/12/2023",
    foiAtendido: true,
    foiAgendado: false,
  },
];

export default function Consultas() {
  return (
    <ScrollView flex={1} p={5}>
      <Title color={"blue.500"}>Minhas consultas</Title>
      <Button my={5}>Agendar nova consulta</Button>
      <Title
        alignSelf={"flex-start"}
        fontSize={"lg"}
        color={"blue.500"}
        mb={2}
      >
        Próximas consultas
      </Title>
      <CardConsulta
        nome="Dr. Klebão do Pneu"
        foto="https://github.com/devkoalaa.png"
        expecialidade="Cardiologista"
        data="02/02/2024"
        foiAgendado
      />
      <Divider mt={5} />
      <Title
        alignSelf={"flex-start"}
        fontSize={"lg"}
        color={"blue.500"}
        mb={2}
      >
        Consultas passadas
      </Title>
      {consultas.map((consulta, index) => {
        return (
          <Box key={index}>
            <CardConsulta
              nome={consulta.nome}
              foto={consulta.foto}
              expecialidade={consulta.especialidade}
              data={consulta.data}
              foiAtendido={consulta.foiAtendido}
            />
            <Divider my={5} />
          </Box>
        );
      })}
    </ScrollView>
  );
}
