"use client";

import Header from "@/components/organism/Header";
import SideBarMenu from "../../molecules/SideBarMenu";

import {
  PageBody,
} from "./style";
import { Table } from "@/components/molecules/Table/table";

// DADOS FICTICIOS 
const data = {
  vagas: 'FJCLOUD | Full Stack | Pleno',
  dataDeInscricao: new Date('2020-02-11'),
  status: 'Ativo'
};

const arrayOfData = Array(25).fill({ ...data });


export default function HomePage() {
  return (
    <>
      <Header />
      <PageBody>
        <SideBarMenu />
        <Table data={arrayOfData} />
      </PageBody>
    </>
  );
}
