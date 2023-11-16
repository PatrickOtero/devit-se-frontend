import styled from "styled-components";


export const ContainerSubMenu = styled.div`
    padding-left: 34px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 8px;
`

export const SubMenuItem = styled.p`
    color: #1C1C1C;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;

    &:hover {
        color: #063D7D;
    }
`