import styled from "styled-components";
import Image from "next/image";

export const ContainerItem = styled.div`
    display: flex;
    flex-direction: column;
`

export const Item = styled.div`
    display: flex;
    gap: 8px;
    align-items: flex-end;
`

export const StyledImage = styled(Image)`
    width: 18px;
`

export const Text = styled.p`
    color: #1C1C1C;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    cursor: pointer;

    &:hover {
        color: #063D7D;
    }
`