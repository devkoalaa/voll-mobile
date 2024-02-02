import { Box, Divider, ScrollView, VStack } from "native-base";
import { Botao } from "../components/Botao";
import { CardConsulta } from "../components/CardConsulta";
import { Titulo } from "../components/Titulo";

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
      <Titulo color={"blue.500"}>Minhas consultas</Titulo>
      <Botao my={5}>Agendar nova consulta</Botao>
      <Titulo
        alignSelf={"flex-start"}
        fontSize={"lg"}
        color={"blue.500"}
        mb={2}
      >
        Próximas consultas
      </Titulo>
      <CardConsulta
        nome="Dr. Klebão do Pneu"
        foto="https://github.com/devkoalaa.png"
        expecialidade="Cardiologista"
        data="02/02/2024"
        foiAgendado
      />
      <Divider mt={5} />
      <Titulo
        alignSelf={"flex-start"}
        fontSize={"lg"}
        color={"blue.500"}
        mb={2}
      >
        Consultas passadas
      </Titulo>
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
