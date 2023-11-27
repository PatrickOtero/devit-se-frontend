import { ContainerSubMenu, SubMenuItem } from "./style";

interface SubMenuProps {
    readonly array: readonly string[];
}

export default function SubMenuExpand({ array }: SubMenuProps): JSX.Element {
    return (
        <ContainerSubMenu>
            {array.map((subItem, subIndex) => (
                <SubMenuItem key={subIndex}>{subItem}</SubMenuItem>
            ))}
        </ContainerSubMenu>
    );
}