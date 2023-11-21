import { StaticImageData } from "next/image";
import { ContainerItem, Item, StyledImage, Text } from "./style";
import { ReactNode } from "react";

interface MenuItemProps {
    icon: StaticImageData;
    alt: string;
    text: string;
    children: ReactNode;
    onClick: React.MouseEventHandler<HTMLDivElement>;
}

export default function MenuItem({
    icon, 
    alt, 
    text, 
    children, 
    onClick}: MenuItemProps) {

    return (
        <ContainerItem
            onClick={onClick}
        >
            <Item>
                <StyledImage 
                    src={icon}
                    alt={alt}
                />
                
                <Text>{text}</Text>
            </Item>

            {children}

        </ContainerItem>
    )
}