import { 
    ContainerSubMenu,
    SubMenuItem 
} from "./style";

interface SubMenu {
    array: Array<string>
}

export default function SubMenuExpand({array}: SubMenu) {
    return (
        <ContainerSubMenu>
            {array.map((subItem, subIndex) => (
                <SubMenuItem key={subIndex}>{subItem}</SubMenuItem>
            ))}
        </ContainerSubMenu>
    )
}