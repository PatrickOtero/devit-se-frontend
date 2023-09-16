"use client";

import { Formik, Form } from "formik";
import InputForm from "../../atoms/InputForm/index";
import { ContainerForm, ContainerTitle } from "../JobPostingForm/style";


export default function JobPostingForm2() {
  const initialValues = {
  titulo: '',
  nivel: '',
  formatoVaga: '',
  canal: '',
  link: '',
  empresa: '',
  status: '',
  data: '',
  data2: '',
  }
  
 
  const selectOptions = {
    nivelVaga: ['Nível' , 'Júnior' , 'Pleno' , 'Senior'],
    formatoVaga: ['Formato da vaga' , 'Presencial' , 'Remoto' , 'Híbrido'],
    canalDivulgacao: ['Canal de Divulgação' , 'Devit-se','LinkedIn' , 'Indeed' , 'Google' , 'Outros'],
    status: ['Status' , 'Ativo' , 'Inativo' , 'Todos'],
   
}

  return (

    <ContainerForm>
      <ContainerTitle>Resumo da vaga</ContainerTitle>

      <Formik
       initialValues={initialValues}
       onSubmit={(values, actions) => {
           console.log(values)
           alert(JSON.stringify(values, null, 2));
           actions.setSubmitting(false);
       }}
      >
        <Form>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            
            }}
          >
            <InputForm
              id="titulo"
              name="titulo"
              type="text"
              placeholder="Descrever o título da vaga aqui"
              label="Titulo da vaga*"
              width="100%"
            />

            <InputForm
              id="nivel"
              name="nivel"
              type="select"
              placeholder="Nível da vaga"
              label="Nível da vaga*"
              width="200px"
              as="select"
              options={selectOptions.nivelVaga}
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
        </Form>
      </Formik>
    </ContainerForm>
  )
          };

