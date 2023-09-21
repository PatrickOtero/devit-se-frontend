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
  ContainerModalButtons,
} from "./style";
import Modal from "react-modal";
import { useState } from "react";
import * as Yup from "yup";

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
    canal: "",
    link: "",
    empresa: "",
    status: "",
    data: "",
    data2: "",
    cnpj: "",
    setor: "",
    outros: "",
    logradouro: "",
    complemento: "",
    bairro: "",
    responsavel: "",
    email1: "",
    email2: "",
    telefone1: "",
    telefone2: "",
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
    titulo: ["Titulo", "UX Designer", "UI Designer", "Product Designer", "Dev. Front-End", "Dev. Back-End", "Full Stack", "Agilista","Quality Assurance"],
    nivel: ["Nível", "Júnior", "Pleno", "Senior"],
    formatoVaga: ["Formato da vaga", "Presencial", "Remoto", "Híbrido"],
    canalDivulgacao: [
      "Canal de Divulgação",
      "Devit-se",
      "LinkedIn",
      "Indeed",
      "Google",
      "Outros",
    ],
    setores: [
      "Setores",
      "Tecnologia da Informação",
      "Saúde",
      "Financeiro",
      "Varejo",
      "Educação",
      "Indústria automotiva",
      "Logística",
      "Outros",
    ],
    status: ["Status", "Ativo", "Inativo", "Todos"],
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
          <ContainerForm>
            <ContainerTitle>Resumo da vaga</ContainerTitle>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <InputForm
                id="titulo"
                name="titulo"
                placeholder="Selecione o título da vaga aqui"
                label="Titulo da vaga*"
                width="100%"
                as="select"
                options={selectOptions.titulo}
              />

              <InputForm
                id="nivel"
                name="nivel"
                type="select"
                placeholder="Nível da vaga"
                label="Nível da vaga*"
                width="200px"
                as="select"
                options={selectOptions.nivel}
              />

              <InputForm
                id="formato"
                name="formato"
                type="text"
                placeholder="Formato da vaga"
                label="Formato da vaga*"
                width="200px"
                as="select"
                options={selectOptions.formatoVaga}
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <InputForm
                id="canal"
                name="canal"
                type="select"
                placeholder="Selecione um canal"
                label="Canal de Divulgação*"
                width="200px"
                as="select"
                options={selectOptions.canalDivulgacao}
              />

              <InputForm
                id="link"
                name="link"
                type="text"
                placeholder="Link da vaga"
                label="Link"
                width="450px"
              />
            </div>

            <InputForm
              id="empresa"
              name="empresa"
              type="text"
              placeholder="Descrever o nome da empresa aqui"
              label="Empresa*"
              width="675px"
            />

            <InputForm
              id="status"
              name="status"
              type="select"
              placeholder="Status"
              label="Status*"
              width="200px"
              as="select"
              options={selectOptions.status}
            />

            <div
              style={{
                display: "flex",
              }}
            >
              <InputForm
                id="data"
                name="data"
                type="date"
                placeholder=""
                label="Data de Divulgação*"
                width="200px"
              />

              <span style={{ width: "100px" }}></span>

              <InputForm
                id="data2"
                name="data2"
                type="date"
                placeholder=""
                label="Data de finalização"
                width="200px"
              />
            </div>
          </ContainerForm>
          <ContainerForm>
            <ContainerTitle>Empresa</ContainerTitle>
            <InputForm
              id="empresa"
              name="empresa"
              type="text"
              placeholder="Nome da Empresa"
              label="Empresa"
              width="100%"
            />

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  width: "270px",
                }}
              >
                <InputForm
                  id="cnpj"
                  name="cnpj"
                  label="CNPJ"
                  placeholder="Número da empresa"
                  width="200px"
                />
              </div>
              <div
                style={{
                  width: "130px",
                }}
              >
                <InputForm
                  id="setor"
                  name="setor"
                  label="Setor"
                  width="100%"
                  as="select"
                  options={selectOptions.setores}
                />
              </div>
              <div
                style={{
                  width: "130px",
                }}
              >
                <InputForm
                  id="outros"
                  name="outros"
                  placeholder="outros"
                  label=""
                  width="100%"
                />
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingBottom: "50px",
              }}
            >
              <div
                style={{
                  width: "270px",
                }}
              >
                <InputForm
                  id="logradouro"
                  name="logradouro"
                  label="Endereço"
                  placeholder="Logradouro"
                  width="100%"
                />
              </div>
              <div
                style={{
                  width: "130px",
                }}
              >
                <InputForm
                  id="complemento"
                  name="complemento"
                  type="text"
                  placeholder="Complemento"
                  label=""
                  width="100%"
                />
              </div>
              <div
                style={{
                  width: "130px",
                }}
              >
                <InputForm
                  id="bairro"
                  name="bairro"
                  type="text"
                  placeholder="bairro"
                  label=""
                  width="100%"
                />
              </div>
            </div>

            <InputForm
              id="nome"
              name="responsável"
              type="text"
              placeholder="Nome do Responsável pela vaga"
              label="Responsável"
              width="100%"
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <InputForm
                id="email"
                name="email1"
                type="email"
                placeholder="E-mail do responsável pela vaga"
                label="E-mail"
                width="300px"
              />

              <InputForm
                id="email"
                name="email2"
                type="email"
                placeholder="E-mail do responsável pela vaga"
                label="E-mail"
                width="300px"
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <InputForm
                id="nome"
                name="telefone1"
                type="text"
                placeholder="Telefone do Responsável pela vaga"
                label="Telefone 1*"
                width="300px"
              />

              <InputForm
                id="nome"
                name="telefone2"
                label="Telefone2"
                placeholder="Telefone do Responsável pela vaga"
                width="300px"
              />
            </div>
          </ContainerForm>
          <ContainerForm>
            <ContainerTitle>Vaga</ContainerTitle>
            <InputForm
              id="titulo"
              name="titulo"
              placeholder="Descrever o título da vaga aqui"
              label="Titulo da vaga"
              width="100%"
              as="select"
              options={selectOptions.titulo}
            />{" "}
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
                options={selectOptions.nivel}
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
          </ContainerForm>
        </Form>
      </Formik>

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
