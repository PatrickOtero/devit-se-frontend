import styled from "styled-components";

export const ContainerCard = styled.div`
    display: flex;
    width: 256px;
    height: 165px;
    padding: 12px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #E9E9E9;
    border-radius: 20px;
`

export const Title = styled.h2`
    color: #1D1D1D;
    font-size: 31px;
    font-style: normal;
    font-weight: 900;
    line-height: 23px;
    letter-spacing: 0.5px;
`

export const ContainerScore = styled.div`
    display: flex;
    width: 106px;
    padding: 9px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 12px;
    background: rgba(0, 0, 0, 0.79);
    margin-top: 16px;
    margin-bottom: 4px;
`

export const Score = styled.p`
    color: #FFF;
    font-size: 17px;
    font-weight: 700;
    letter-spacing: 0.5px;
`

export const Text = styled.p`
    color: #1D1D1D;
    font-size: 12px;
    font-weight: 300;
    line-height: 23px;
    letter-spacing: 0.5px;
`