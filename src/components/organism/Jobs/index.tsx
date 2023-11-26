"use client";

import Header from "@/components/organism/Header";
import SideBarMenu from "../../molecules/SideBarMenu";

import {
  PageBody,
} from "./style";
import { Table } from "@/components/molecules/Table/table";

// DADOS FICTICIOS 
const data = [
  {
    vagas: 'FJCLOUD | Full Stack | Pleno',
    dataDeInscricao: new Date('2020-02-11'),
    status: 'Ativo'
  },
  {
    vagas: 'Dell Tecnologies | Full Stack | Junior',
    dataDeInscricao: new Date('2022-02-11'),
    status: 'Inativo'
  },
  {
    vagas: 'Ti da informação | Full Stack | Senior',
    dataDeInscricao: new Date('2023-10-02'),
    status: 'Inativo'
  },
  {
    vagas: 'MemoriesTI | front End | Senior',
    dataDeInscricao: new Date('2023-02-23'),
    status: 'Ativo'
  },
  {
    vagas: 'UnitedStates | Back end | Senior',
    dataDeInscricao: new Date('2023-05-18'),
    status: 'Inativo'
  },
  {
    vagas: 'Windowns Memories | BI | Senior',
    dataDeInscricao: new Date('2023-11-21'),
    status: 'Inativo'
  },
  {
    vagas: 'Dev Lab | Full Stack | Senior',
    dataDeInscricao: new Date('2023-09-10'),
    status: 'Inativo'
  },
  {
    vagas: 'Dev Lab | Full Stack | Senior',
    dataDeInscricao: new Date('2023-09-10'),
    status: 'Inativo'
  },
  {
    vagas: 'Dev Lab | Full Stack | Senior',
    dataDeInscricao: new Date('2023-09-10'),
    status: 'Inativo'
  },
  {
    vagas: 'Dev Lab | Full Stack | Senior',
    dataDeInscricao: new Date('2023-09-10'),
    status: 'Inativo'
  },
  {
    vagas: 'Dev Lab | Full Stack | Senior',
    dataDeInscricao: new Date('2023-09-10'),
    status: 'Inativo'
  },
  {
    vagas: 'Dev Lab | Full Stack | Senior',
    dataDeInscricao: new Date('2023-09-10'),
    status: 'Inativo'
  },
  {
    vagas: 'Dev Lab | Full Stack | Senior',
    dataDeInscricao: new Date('2023-09-10'),
    status: 'Inativo'
  },
  {
    vagas: 'Dev Lab | Full Stack | Senior',
    dataDeInscricao: new Date('2023-09-10'),
    status: 'Inativo'
  },
  {
    vagas: 'Dev Lab | Full Stack | Senior',
    dataDeInscricao: new Date('2023-09-10'),
    status: 'Inativo'
  },
  {
    vagas: 'Dev Lab | Full Stack | Senior',
    dataDeInscricao: new Date('2023-09-10'),
    status: 'Inativo'
  },
  {
    vagas: 'Dev Lab | Full Stack | Senior',
    dataDeInscricao: new Date('2023-09-10'),
    status: 'Inativo'
  },
  {
    vagas: 'Dev Lab | Full Stack | Senior',
    dataDeInscricao: new Date('2023-09-10'),
    status: 'Inativo'
  },
  {
    vagas: 'Dev Lab | Full Stack | Senior',
    dataDeInscricao: new Date('2023-09-10'),
    status: 'Inativo'
  },
  {
    vagas: 'Dev Lab | Full Stack | Senior',
    dataDeInscricao: new Date('2023-09-10'),
    status: 'Inativo'
  },
];

export default function HomePage() {
  return (
    <>
      <Header />
      <PageBody>
        <SideBarMenu />
        <Table data={data} />
      </PageBody>
    </>
  );
}
