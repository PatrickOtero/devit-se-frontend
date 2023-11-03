import MyMenu from "@/components/atoms/Menu";
import styled from "styled-components";

export const Navbar = styled.div`
  height: 61px;
  background-color: #D9D9D9;
  text-align: center;
  display: flex;


`;

export const PageBody = styled.div`
  // height: calc(100vh - 50px);
  padding: 50px;
  background-color: #0c2240;
`;

export const SideBar = styled.div`
  width: 250px;
`;

export const SideBar1 = styled.div`
  width: 250px;
  // height: 100%;
  background-color: #D9D9D9;
  border-radius: 10px;
  color: #fff;
  gap: 16px;
  padding: 12px;
  top: 253px;
  left: 356px;
  color: #1D1D1D;
  font-family: Roboto;
  font-style: normal;
font-weight: 900;
line-height: 23px;
letter-spacing: 0.5px;
text-align: center;
`;
export const SideBar2 = styled.div`
  width: 250px;
  // height: 100%;
  background-color: #D9D9D9;
  color: #fff;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  width: 256px;
height: 290px;
top: 270px;
left: 160px;
border-radius: 10px;
gap: 16px;
padding: 10px;
text-align: center;
`;

export const Menu = styled(MyMenu)`
  background-color: #fff;
  color: #fff;
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  
`;
export const MenuItem = styled(MyMenu)`
  left-padding: 20px;
  
`;

export const PageContainer = styled.div`
  width: 250px;
  height: 100%;
  background-color: #b5b5b5;
  color: #fff;
`;
