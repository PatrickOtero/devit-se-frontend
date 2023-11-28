import { StaticImageData } from "next/image"
import { useState } from "react"

import ScoreCard from "@/components/atoms/ScoreCard"
import MenuItem from "@/components/atoms/MenuItem"
import SubMenuExpand from "@/components/atoms/SubMenuExpand"

import homeIcon from "../../../../public/sideBarMenu/home.png"
import profileIcon from "../../../../public/sideBarMenu/profile.png"
import bookIcon from "../../../../public/sideBarMenu/book.png"
import folderIcon from "../../../../public/sideBarMenu/folder.png"
import settingsIcon from "../../../../public/sideBarMenu/settings.png"

import {
    ContainerMenu,
    ContainerSideBar
} from "./style";

interface MenuItem {
    icon?: StaticImageData | any;
    text: string;
    alt?: string;
    expanded: boolean;
    subItems?: string[];
}

export default function SideBarMenu() {

    const [menuItems, setMenuItems] = useState<MenuItem[]>([
        {
            icon: homeIcon,
            text: 'Home',
            alt: "icone de uma casa",
            expanded: false,
        },
        {
            icon: profileIcon,
            text: 'Área do aluno',
            alt: 'Icone de um boneco',
            expanded: false,
        },
        {
            icon: bookIcon,
            text: 'Mentoria',
            alt: 'Icone de um livro',
            expanded: false,
        },
        {
            icon: folderIcon,
            text: 'Vagas',
            alt: 'Um icone de pasta',
            expanded: false,
            subItems:
                [
                    'Minhas vagas',
                    'Currículo'
                ]
        },
        {
            icon: settingsIcon,
            text: 'Configurações',
            alt: "Icone de uma engranagem",
            expanded: false,
        },
        {
            text: 'Sobre a Devit',
            expanded: false,
        },
    ])

    const toggleSubMenu = (index: number) => {
        setMenuItems(prevItems => {
            const updatedItems = [...prevItems]
            updatedItems[index].expanded = !updatedItems[index].expanded
            return updatedItems
        })
    }

    return (
        <ContainerSideBar>
            <ScoreCard />

            <ContainerMenu>
                {menuItems.map((menuItem, index) => (
                    <MenuItem
                        key={index}
                        icon={menuItem.icon}
                        alt={menuItem.alt || ""}
                        text={menuItem.text}
                        onClick={() => {
                            toggleSubMenu(index)
                        }}
                    >
                        {menuItem.expanded && menuItem.subItems && (
                            <SubMenuExpand
                                array={menuItem.subItems}
                            />
                        )}
                    </MenuItem>
                ))}
            </ContainerMenu>
        </ContainerSideBar>
    )
}