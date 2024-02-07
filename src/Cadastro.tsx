import { Box, Checkbox, Image, ScrollView, Text, useToast } from "native-base";
import React, { useState } from "react";
import Logo from "./assets/Logo.png";
import { Button } from "./components/Button";
import { InputText } from "./components/InputText";
import { Title } from "./components/Title";
import { sections } from "./utils/CadastroInputs";
import { cadastrarPaciente } from "./servicos/PacienteService";
import { Paciente } from "./utils/interfaces";

export default function Cadastro() {
  const [numSection, setNumSection] = useState(0);
  const [formData, setFormData] = useState({} as any);
  const [planos, setPlanos] = useState<number[]>([]);
  const toast = useToast();

  const nextSection = () => {
    numSection < sections.length - 1 && setNumSection(numSection + 1);
    numSection == sections.length - 1 && submitCadastro();
  };

  const previousSection = () => {
    numSection > 0 && setNumSection(numSection - 1);
  };

  function changeFormData(name: string, value: string) {
    // if (name.startsWith("endereco.")) {
    //   name = name.split("endereco.")[1];
    //   setFormData({
    //     ...formData,
    //     ["endereco"]: { ...formData["endereco"], [name]: value },
    //   });

    //   return;
    // }

    setFormData({ ...formData, [name]: value });
  }

  async function submitCadastro() {
    // setFormData({ ...formData, ["planosSaude"]: planos});

    // const result = cadastrarPaciente(formData as Paciente, planos);
    const result = await cadastrarPaciente({
      cpf: formData.cpf,
      nome: formData.nome,
      email: formData.email,
      endereco: {
        cep: formData.cep,
        estado: formData.estado,
        numero: formData.numero,
        rua: formData.rua,
        complemento: formData.complemento,
      },
      senha: formData.password,
      telefone: formData.telefone,
      possuiPlanoSaude: planos.length > 0,
      planosSaude: planos,
      imagem: formData.imagem,
    });

    console.log("cadastro rslt:", result);
    
    if (result) {
      toast.show({
        title: "Sucesso",
        description: "O paciente foi criado.",
        backgroundColor: "green.500",
      });

      return;
    }

    toast.show({
      title: "Falha",
      description: "O paciente não foi criado.",
      backgroundColor: "red.500",
    });
  }

  return (
    <ScrollView flex={1} p={5}>
      <Image source={Logo} alt={"Logo Voll"} alignSelf={"center"} />
      <Title>{sections[numSection].title}</Title>
      {sections[numSection].inputText && (
        <Box>
          {sections[numSection].inputText.map((input, index) => {
            return (
              <InputText
                label={input.label}
                placeholder={input.placeholder}
                key={input.id}
                secureTextEntry={input.secureTextEntry}
                value={formData[index]}
                onChangeText={(text) => changeFormData(input.name, text)}
              />
            );
          })}
        </Box>
      )}
      {sections[numSection].checkbox && (
        <Box>
          <Text color="blue.800" fontWeight={"bold"} fontSize={"md"} my={2}>
            Selecione seus planos:
          </Text>
          {sections[numSection].checkbox.map((checkbox) => {
            return (
              <Checkbox
                value={checkbox.value}
                key={checkbox.id}
                onChange={() => {
                  setPlanos((planosAnteriores) => {
                    if (
                      planosAnteriores &&
                      planosAnteriores.includes(checkbox.id)
                    ) {
                      return planosAnteriores.filter(
                        (id) => id !== checkbox.id
                      );
                    }
                    return [...planosAnteriores, checkbox.id];
                  });
                }}
                isChecked={planos.includes(checkbox.id)}
              >
                {checkbox.value}
              </Checkbox>
            );
          })}
        </Box>
      )}
      {numSection > 0 && (
        <Button onPress={previousSection} bgColor={"gray.500"} mt={4}>
          Voltar
        </Button>
      )}
      <Button onPress={nextSection} mt={4} mb={10}>
        {numSection == sections.length - 1 ? "Cadastrar!" : "Avançar"}
      </Button>
    </ScrollView>
  );
}
