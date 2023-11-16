import Image from "next/image";
import { 
    ContainerHeader, 
    ContainerLogo, 
    ContainerLogoText, 
    ContainerNavigation, 
    StyledImage, 
    StyledLink 
} from "./style";

import logo from "../../../../public/Devit Logo.svg"
import profile from "../../../../public/header/profile.png"

export default function Header() {
    return (
        <ContainerHeader>
            <ContainerLogo>
                <Image 
                    src={logo}
                    alt="Logo da devit"
                />
                <ContainerLogoText>Devit</ContainerLogoText>
            </ContainerLogo>

            <ContainerNavigation>
                <StyledLink>Página Inicial</StyledLink>
                <StyledLink>Vagas</StyledLink>
                <StyledLink>Mentoria</StyledLink>
                <StyledImage 
                    src={profile}
                    alt="icone de perfil"
                />
            </ContainerNavigation>

        </ContainerHeader>
    )
}