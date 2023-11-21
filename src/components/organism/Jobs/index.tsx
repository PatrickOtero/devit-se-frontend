"use client";

import Header from "@/components/organism/Header";
import SideBarMenu from "../../molecules/SideBarMenu";

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
