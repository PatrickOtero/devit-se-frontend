"use client";

import Header from "@/components/organism/Header";
import SideBarMenu from "../../components/molecules/SideBarMenu";

import {
  PageBody,
} from "./style";


export default function HomePage() {
  return (
    <>
      <Header />
      <PageBody>
          <SideBarMenu/>
      </PageBody>
    </>
  );
}
