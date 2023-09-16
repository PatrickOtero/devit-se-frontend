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
  }
  
 
  const selectOptions = {
    nivelVaga: ['Nível' , 'Júnior' , 'Pleno' , 'Senior'],
    formatoVaga: ['Formato da vaga' , 'Presencial' , 'Remoto' , 'Híbrido'],
    canalDivulgacao: ['Canal de Divulgação' , 'Devit-se','LinkedIn' , 'Indeed' , 'Google' , 'Outros'],
   
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
              width="300px"
            />

            <InputForm
              id="nivel"
              name="nivel"
              type="select"
              placeholder="Nível da vaga"
              label="Nível da vaga*"
              width="300px"
              as="select"
              options={selectOptions.nivelVaga}
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
              width="300px"
              as="select"
              options={selectOptions.canalDivulgacao}
              />

            <InputForm
              id="formato"
              name="formato"
              type="text"
              placeholder="Formato da vaga"
              label="Formato da vaga*"
              width="300px"
              as="select"
              options={selectOptions.formatoVaga}
            />
            </div>
     
        </Form>
      </Formik>
    </ContainerForm>
  )
          };