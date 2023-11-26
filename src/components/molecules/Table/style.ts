
import styled, { css } from "styled-components";
import { MagnifyingGlass } from '@phosphor-icons/react';

interface PageButtonProps {
    isActive: boolean;
}

export const IconContainer = styled.div`
    position: relative;
    display: inline-block;
    margin-bottom: 15px;
    `;

export const StyledInput = styled.input`
    padding-left: 30px; // Espaçamento à esquerda para acomodar o ícone
    width: 58rem;
    height: 2.5rem;
    border-radius: 15px;
    `;

export const StyledTableContainer = styled.div`
    overflow: hidden; /* Garante que as bordas arredondadas sejam exibidas corretamente */
    border-radius: 15px;
`;

export const MagnifyingGlassIcon = styled(MagnifyingGlass)`
    position: absolute;
    left: 10px; // Posição do ícone à esquerda
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none; // Garante que o ícone não interaja com eventos do mouse
`;

export const StyledTable = styled.table`
    border: 1px solid #CCC;
    margin: 0;
    padding: 0;
    width: 58rem;
    table-layout: fixed;
    border-collapse: collapse;

`;

export const StyledTableTr = styled.tr`
    background-color: #f8f8f8;
    border: 1px solid #DDD;
    padding: 0.35em;
    border-bottom: 3px solid #0C2240;
`
export const StyledTableTh = styled.th`
    font-size: 0.85em;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 0.60em;

`
export const StyledTBody = styled.tbody`
    background-color: #FFF;
    color: #000;
    border: 1px solid #DDD;
    padding: 0.60em;
    text-align: center;
`
export const StyledTableTd = styled.td`
    font-size: 0.85em;
    padding: 0.60em;
    text-align: center;
    border-bottom: 1px solid #0C2240;
`
export const StyledSelect = styled.select`
    background: transparent;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    border: none;
`
export const ContainerButtons = styled.div`
    width: 58rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ButtonsArrow = styled.button`
    background-color: #E7EAE1;
    width: 2rem;
    height: 2rem;
    border: none;
    margin: 10px;
    border-radius: 5px;
    cursor: pointer;
`
export const ButtonsNumbers = styled.button<PageButtonProps>`
    color: #FFF;
    width: 1rem;
    height: 1rem;
    border: none;
    margin: 8px;
    border-radius: 2px;
    background-color: transparent;
    cursor: pointer;
    /* Estilos condicionais para a página ativa */
    ${(props) => props.isActive && ActivePageStyle}
`
export const ActivePageStyle = css`
  background-color: #E7EAE1;
  color: black;
`;
