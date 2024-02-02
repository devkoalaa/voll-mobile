import { VStack, ScrollView, Avatar, Divider, Text } from "native-base";
import { Titulo } from "../components/Titulo";
import React from "react";

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
        <Titulo fontSize={"sm"} mt={1}>
          16/12/1997
        </Titulo>
        <Titulo fontSize={"sm"} mt={0}>
          Brasília - DF
        </Titulo>
        <Divider mt={5} />
        <Titulo color={"blue.500"} mb={0}>
          Histórico médico
        </Titulo>
        <Titulo fontSize={"sm"} mt={1}>
          Bronquite
        </Titulo>
        <Titulo fontSize={"sm"} mt={0}>
          Sinusite
        </Titulo>
      </VStack>
    </ScrollView>
  );
}
