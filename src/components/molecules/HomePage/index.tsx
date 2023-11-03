"use client";
import {
  Menu,
  MenuItem,
  Navbar,
  PageBody,
  PageContainer,
  SideBar,
  SideBar1,
  SideBar2,
} from "./style";
export default function HomePage() {
  return (
    <>
      <Navbar>
      <h3>Devit  Página Inicial Vagas Mentoria Perfil </h3>
      </Navbar>
      <PageBody>
        <SideBar>
          <SideBar1>
            Nota Devit
            <br />
            Estrelinha 3.0
            <br />
            Como aprimorar minha nota
          </SideBar1>
          <br />
          <SideBar2>
            <Menu nome="Home"></Menu>
            <Menu nome="Área do aluno"></Menu>
            <Menu nome="Mentoria"></Menu>
            <Menu nome="Vagas"></Menu>
            <MenuItem nome="Minhas Vagas"></MenuItem>
            <MenuItem nome="Curriculo"></MenuItem>
            <Menu nome="Configurações"></Menu>
            <Menu nome="Sobre a Devit"></Menu>
          </SideBar2>
        </SideBar>
        <PageContainer></PageContainer>
      </PageBody>
    </>
  );
}
