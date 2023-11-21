import styled from "styled-components";
import Image from "next/image";


export const ContainerHeader = styled.section`
    width: 100%;
    height: 61px;
    background: #D9D9D9;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 160px;
`

export const ContainerLogo = styled.div`
    display: flex;
    align-items: center;
    gap: 14px;
    cursor: pointer;
`

export const ContainerLogoText = styled.div`
    color: #000;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const ContainerNavigation = styled.div`
    display: flex;
    align-items: center;
    gap: 32px;
`

export const StyledLink = styled.p`
    color: #000;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    cursor: pointer;
`

export const StyledImage = styled(Image)`
    background-color: rgba(0, 0, 0, 0.50);
    border-radius: 50%;
    cursor: pointer;
`