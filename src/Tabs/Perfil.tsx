import { VStack, ScrollView, Avatar, Divider, Text } from "native-base";
import { Title } from "../components/Title";
import React from "react";

export default function Perfil() {
  return (
    <ScrollView flex={1}>
      <VStack flex={1} alignItems={"center"} p={5}>
        <Title color={"blue.500"}>Meu perfil</Title>
        <Avatar
          source={{ uri: "https://github.com/devkoalaa.png" }}
          mt={5}
          size={"xl"}
        />
        <Title color={"blue.500"}>Informações pessoais</Title>
        <Title fontSize={"lg"}>Herbert Valadares</Title>
        <Title fontSize={"sm"} mt={1}>
          16/12/1997
        </Title>
        <Title fontSize={"sm"} mt={0}>
          Brasília - DF
        </Title>
        <Divider mt={5} />
        <Title color={"blue.500"} mb={0}>
          Histórico médico
        </Title>
        <Title fontSize={"sm"} mt={1}>
          Bronquite
        </Title>
        <Title fontSize={"sm"} mt={0}>
          Sinusite
        </Title>
      </VStack>
    </ScrollView>
  );
}
