"use client";

import { Formik, Form } from "formik";
import InputForm from "../../atoms/InputForm/index";
import {
  ContainerForm,
  ContainerTitle,
  ContainerModal,
  Button,
  Button1,
  Div,
  H3,
  ContainerModalButtons
} from "./style";
import Modal from "react-modal";
import { useState } from "react";

export default function JobPostingForm() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleOpenModal() {
    setModalIsOpen(true);
  }

  function handleCloseModal() {
    setModalIsOpen(false);
  }

  function handleSubmit() {
    alert("Vaga cadastrada com sucesso!");
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%,-50%)",
      background: "#ffffff",
      color: "#fffffe",
      border: "none",
    },
  };

  const initialValues = {
    titulo: "",
    nivel: "",
    formatoVaga: "",
    periodicidade: "",
    tipoContrato: "",
    outroContrato: "",
    salario: "",
    beneficios: "",
    descricaoVaga: "",
    softSkills: "",
    hardSkills: "",
    nota: "",
  };

  const selectOptions = {
    nivelvaga: ["Nível", "Júnior", "Pleno", "Senior"],
    formatoVaga: ["Formato da vaga", "Presencial", "Remoto", "Híbrido"],
    periodicidadeVaga: [
      "2x na semana",
      "3x na semana",
      "4x semana",
      "5x na semana",
    ],
    tipoContrato: ["Contrato", "CLT", "Pessoa jurídica", "Outros"],
    nota: ["Pontuação", "Nível 1", "Nível 2", "Nível 3", "Nível 4", "Nível 5"],
  };

  return (
    <>
      <ContainerForm>
        <ContainerTitle>Vaga</ContainerTitle>

        <Modal
          isOpen={modalIsOpen}
          style={customStyles}
          contentLabel="Exemplo modal"
        >
          <ContainerModal>
            <H3>
              Você está prestes a publicar o documento, gostaria de revisar as
              informações antes de prosseguir?
            </H3>
            <ContainerModalButtons>

            <Button1 onClick={handleCloseModal}>Quero revisar!</Button1>
            <Button1 type="submit" onClick={handleSubmit}>
              Quero prosseguir!
            </Button1>
            </ContainerModalButtons>
            
          </ContainerModal>
        </Modal>

        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            console.log(values);
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }}
        >
          <Form>
            <InputForm
              id="titulo"
              name="titulo"
              type="text"
              placeholder="Descrever o título da vaga aqui"
              label="Titulo da vaga"
              width="100%"
            />

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                borderBottom: "1px solid #FFF",
                paddingBottom: "15px",
                marginBottom: "30px",
              }}
            >
              <InputForm
                id="nivel"
                name="nivel"
                label="Nível da vaga"
                width="200px"
                as="select"
                options={selectOptions.nivelvaga}
              />

              <InputForm
                id="formatoVaga"
                name="formatoVaga"
                label="Formato da vaga"
                width="200px"
                as="select"
                options={selectOptions.formatoVaga}
              />

              <InputForm
                id="semana"
                name="periodicidade"
                label=""
                width="200px"
                as="select"
                options={selectOptions.periodicidadeVaga}
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <InputForm
                id="contrato"
                name="tipoContrato"
                label="Tipo de contrato"
                width="200px"
                as="select"
                options={selectOptions.tipoContrato}
              />

              <InputForm
                id="outros"
                name="outroContrato"
                type="text"
                placeholder="Outro"
                label=""
                width="200px"
              />

              <InputForm
                id="nome"
                name="salario"
                type="text"
                placeholder="Insira o salário aqui"
                label="Salário"
                width="200px"
              />
            </div>

            <InputForm
              id="nome"
              name="beneficios"
              type="text"
              placeholder="Descrever os benefícios aqui"
              label="Benefícios"
              width="100%"
            />

            <InputForm
              id="nome"
              name="descricaoVaga"
              type="text"
              placeholder="Inserir a descrição da vaga aqui"
              label="Descrição da vaga aqui"
              width="100%"
            />

            <InputForm
              id="nome"
              name="softSkills"
              type="text"
              placeholder="Listar soft skills em tópicos"
              label="Requisitos (Soft Skills)"
              width="100%"
            />

            <InputForm
              id="nome"
              name="hardSkills"
              type="text"
              placeholder="Listar hard skills em tópicos"
              label="Requisitos (Hard Skills)*"
              width="100%"
            />

            <InputForm
              id="marte"
              name="nota"
              label="Nota Devit*"
              width="250px"
              as="select"
              options={selectOptions.nota}
            />
          </Form>
        </Formik>
      </ContainerForm>
      <Div>
        <Button type="submit" onClick={handleSubmit}>
          Salvar
        </Button>
        <Button type="button" onClick={handleOpenModal}>
          Publicar
        </Button>
      </Div>
    </>
  );
}
