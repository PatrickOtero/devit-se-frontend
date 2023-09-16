"use client";

import { Formik, Form } from "formik";
import InputForm from "../../atoms/InputForm/index";
import { ContainerForm, ContainerTitle } from "../JobPostingForm/style";


export default function JobPostingForm() {

    const initialValues = {
        empresa: '',
        cnpj: '',
        setor: '',
        outros: '',
        logradouro: '',
        complemento: '',
        bairro: '',
        responsavel: '',
        email1: '',
        email2: '',
        telefone1: '',
        telefone2: '',
    }

    const selectOptions = {
        setores: ['Setores','Tecnologia da Informação' , 'Saúde' , 'Financeiro' , 'Varejo', 'Educação', 'Indústria automotiva', 'Logística', 'Outros'],
        
    }

return (
    
    <ContainerForm>
        <ContainerTitle>Empresa</ContainerTitle>

    <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
            console.log(values)
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
        }}
    >
        <Form>
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
            <div style={{
                width: '270px'
            }}>
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
                    width: '130px'
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
                    width:'130px'
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
            paddingBottom: '50px'
            }}
        >   
            <div
                style={{
                    width: '270px'
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
                width:'130px'
            }}>
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
                    width:'130px'
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
            display: 'flex',
            justifyContent: "space-between"
        }}>
        <InputForm
            id="nome"
            name="email1"
            type="text"
            placeholder="E-mail do responsável pela vaga"
            label="E-mail"
            width="300px"
        />

        <InputForm
            id="nome"
            name="email2"
            type="text"
            placeholder="E-mail do responsável pela vaga"
            label="E-mail"
            width="300px"
        />
        </div>
        <div
        style={{
            display: 'flex',
            justifyContent: "space-between"
        }}
        >
        <InputForm
            id="nome"
            name="telefone1"
            type="text"
            placeholder="Telefone do Responsável pela vaga"
            label="Requisitos (Hard Skills)*"
            width="300px"
        />

        <InputForm
            id="nome"
            name="telefone2"
            label="telefone2"
            placeholder="Telefone do Responsável pela vaga"
            width="300px"
        />
        </div>
        </Form>
    </Formik>
</ContainerForm>
)}