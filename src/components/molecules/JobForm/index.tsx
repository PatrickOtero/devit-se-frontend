"use client";

import { Formik, Form, FormikProps } from "formik";
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
import { useState, useRef } from "react";
import * as Yup from "yup";

export default function JobForm() {
  const formRef = useRef<FormikProps<any>>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleOpenModal() {
    setModalIsOpen(true);
  }

  function handleCloseModal() {
    setModalIsOpen(false);
  }

  function handleSubmit() {
    formRef.current?.resetForm();
    formRef.current?.submitForm();
  }

  function callbackCanalDivulgacao(value: string) {
    console.log(value);
    if (value === "Devit-se") {
      document.getElementById("form_empresa")!.style.display = "block";
    } else {
      document.getElementById("form_empresa")!.style.display = "none";
    }
  }
  function callbackFormatoVaga(value: string) {
    console.log(value);
    if (value === "Home Office") {
      document.getElementById("form_empresa")!.style.display = "none";
      document.getElementById("semana")!.style.display = "none";
    } else {
      document.getElementById("form_empresa")!.style.display = "block";
      document.getElementById("semana")!.style.display = "block";
    }
  }
  function callbackOutros(value: string) {
    console.log(value);
    if (value === "Outros") {
      document.getElementById("outro_contrato")!.style.display = "block";
    } else {
      document.getElementById("outro_contrato")!.style.display = "none";
    }
  }
  function callbackSetor(value: string) {
    console.log(value);
    if (value === "Outros") {
      document.getElementById("outro_setor")!.style.display = "block";
    } else {
      document.getElementById("outro_setor")!.style.display = "none";
    }
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
    titulo: [
      "Titulo",
      "UX Designer",
      "UI Designer",
      "Product Designer",
      "Dev. Front-End",
      "Dev. Back-End",
      "Full Stack",
      "Agilista",
      "Quality Assurance",
    ],
    nivel: ["Nível", "Júnior", "Pleno", "Senior"],
    formatoVaga: ["Formato da vaga", "Presencial", "Home Office", "Híbrido"],
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

  const validationSchema = Yup.object().shape({
    titulo: Yup.string().required("Campo obrigatório"),
    nivel: Yup.string().required("Campo obrigatório"),
    formatoVaga: Yup.string().required("Campo obrigatório"),
    canal: Yup.string().required("Campo obrigatório"),
    link: Yup.string().required("Campo obrigatório"),
    empresa: Yup.string().required("Campo obrigatório"),
    status: Yup.string().required("Campo obrigatório"),
    data: Yup.string().required("Campo obrigatório"),
    data2: Yup.string().required("Campo obrigatório"),
    email1: Yup.string().required("").matches( /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/, "E-mail inválido"),
    email2: Yup.string().required("").matches( /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/, "E-mail inválido"),
    telefone1: Yup.string().required("").length(11, "Telefone inválido"),
    telefone2: Yup.string().required("").length(11, "Telefone inválido"),
    cnpj: Yup.string().required("").length(14, "CNPJ inválido"),
  });

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
        innerRef={formRef}
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log(values);
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
        validationSchema={validationSchema}
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
                width="220px"
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
                id="formatoVaga"
                name="formato"
                type="text"
                placeholder="Formato da vaga"
                label="Formato da vaga*"
                width="200px"
                as="select"
                options={selectOptions.formatoVaga}
                callback={callbackFormatoVaga}
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
                width="220px"
                as="select"
                options={selectOptions.canalDivulgacao}
                callback={callbackCanalDivulgacao}
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
              width="750px"
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
                minDate={new Date().toISOString().split("T")[0]}
              />

              <span style={{ width: "100px" }}></span>

              <InputForm
                id="data2"
                name="data2"
                type="date"
                placeholder=""
                label="Data de finalização"
                width="200px"
                minDate={new Date().toISOString().split("T")[0]}
              />
            </div>
          </ContainerForm>
          <ContainerForm id="form_empresa">
            <ContainerTitle>Empresa</ContainerTitle>
            <InputForm
              id="empresa"
              name="empresa"
              type="text"
              placeholder="Nome da Empresa"
              label="Empresa*"
              width="750px"
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
                  placeholder="00.000.000/0001-00"
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
                  callback={callbackSetor}
                 
                />
              </div>
              <div
                style={{
                  width: "130px",
                }}
              >
                <InputForm
                  id="outro_setor"
                  name="Outros"
                  placeholder="outros"
                  label=""
                  width="100px"
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
                  placeholder="Rua, Avenida, Praça, Nº, Bloco "
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
                  label="Complemento"
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
                  label="Bairro"
                  width="100px"
                />
              </div>
            </div>

            <InputForm
              id="nome"
              name="responsável"
              type="text"
              placeholder="Nome do Responsável pela vaga"
              label="Responsável"
              width="750px"
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <InputForm
                id="email1"
                name="email1"
                type="email"
                placeholder="E-mail do responsável pela vaga"
                label="E-mail 1"
                width="300px"
              />

              <InputForm
                id="email2"
                name="email2"
                type="email"
                placeholder="E-mail do responsável pela vaga"
                label="E-mail 2"
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
                id="telefone1"
                name="telefone1"
                type="text"
                placeholder="(00) 00000-0000"
                label="Telefone 1"
                width="300px"
              />

              <InputForm
                id="telefone2"
                name="telefone2"
                label="Telefone2"
                placeholder="(00) 00000-0000"
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
                name="formato"
                label="Formato da vaga"
                placeholder="Formato da vaga"
                width="200px"
                as="select"
                options={selectOptions.formatoVaga}
                callback={callbackFormatoVaga}
              />

              <InputForm
                id="semana"
                name="periodicidade"
                label=""
                width="200px"
                as="select"
                options={selectOptions.periodicidadeVaga}
                callback={callbackFormatoVaga}
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
                callback={callbackOutros}
              
              />

              <InputForm
                id="outro_contrato"
                name="outro"
                type="text"
                placeholder="Outro"
                label=""
                width="200px"
                
              />

              <InputForm
                id="nome"
                name="salario"
                type="text"
                placeholder="R$ 000,00"
                label="Salário"
                width="200px"
              />
            </div>
            <InputForm
              id="nome"
              name="beneficios"
              type="text"
              placeholder="Plano de Saúde; Vale Alimentação; Seguro de Vida; Vale Refeição"
              label="Benefícios"
              width="750px"
            />
            <InputForm
              id="nome"
              name="descricaoVaga"
              type="text"
              placeholder="Inserir a descrição da vaga aqui"
              label="Descrição da vaga aqui"
              width="750px"
            />
            <InputForm
              id="nome"
              name="softSkills"
              type="text"
              placeholder="Autorresponsabilidade; Flexibilidade; Inteligência Emocional; Facilitação"
              label="Requisitos (Soft Skills)"
              width="750px"
            />
            <InputForm
              id="nome"
              name="hardSkills"
              type="text"
              placeholder="JavaScript; Springboot; NodeJS"
              label="Requisitos (Hard Skills)*"
              width="750px"
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
