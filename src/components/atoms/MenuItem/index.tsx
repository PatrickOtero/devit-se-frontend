import { StaticImageData } from "next/image";
import { ContainerItem, Item, StyledImage, Text } from "./style";
import { ReactNode } from "react";

interface MenuItemProps {
    readonly icon: StaticImageData;
    readonly alt: string;
    readonly text: string;
    readonly children: ReactNode;
    readonly onClick: React.MouseEventHandler<HTMLDivElement>;
}

export default function MenuItem({
    icon,
    alt,
    text,
    children,
    onClick,
}: MenuItemProps): JSX.Element {
    return (
        <ContainerItem onClick={onClick}>
            <Item>
                <StyledImage src={icon} alt={alt} />
                <Text>{text}</Text>
            </Item>
            {children}
        </ContainerItem>
    );
}