
"use client";

import { useState, ChangeEvent } from "react";
import {
    StyledTable,
    StyledTableTr,
    StyledTableTh,
    StyledTBody,
    StyledTableTd,
    StyledSelect,
    StyledTableContainer,
    StyledInput,
    IconContainer,
    MagnifyingGlassIcon,
    ContainerButtons,
    ButtonsArrow,
    ButtonsNumbers,
} from "./style";

type DataProps = {
    vagas: string
    dataDeInscricao: Date
    status: string
}

interface TableProps {
    data: DataProps[]
}

export const Table = ({ data }: TableProps) => {
    //identificar a pagina atual e a quantidade de itens por página
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;


    const [statusSelected, setStatusSelected] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const [filterDate, setFilterDate] = useState('Data de Candidatura');



    function handleStatusSelected(e: ChangeEvent<HTMLSelectElement>) {
        setStatusSelected(e.target.value);
    }

    function handleSearchChange(e: ChangeEvent<HTMLInputElement>) {
        setSearchValue(e.target.value);
    }

    function handleFilterDateChange(e: ChangeEvent<HTMLSelectElement>) {
        setFilterDate(e.target.value)
    }

    const filterByDate = (data: DataProps[], filter: string): DataProps[] => {
        const currentDate = new Date();

        switch (filter) {
            case 'maisRecente': {
                return data.sort((a, b) => b.dataDeInscricao.getTime() - a.dataDeInscricao.getTime())
            }
            case 'maisAntigo': {
                return data.sort((a, b) => a.dataDeInscricao.getTime() - b.dataDeInscricao.getTime())
            }
            case 'ultimos7Dias': {
                const sevenDaysAgo = new Date(currentDate);
                sevenDaysAgo.setDate(currentDate.getDate() - 7);
                return data.filter(item => item.dataDeInscricao >= sevenDaysAgo);
            }
            case 'ultimos15Dias': {
                const fifteenDaysAgo = new Date(currentDate);
                fifteenDaysAgo.setDate(currentDate.getDate() - 15);
                return data.filter(item => item.dataDeInscricao >= fifteenDaysAgo);
            }
            case 'ultimos30Dias': {
                const thirtyDaysAgo = new Date(currentDate);
                thirtyDaysAgo.setDate(currentDate.getDate() - 30);
                return data.filter(item => item.dataDeInscricao >= thirtyDaysAgo);
            }
            default:
                return data;

        }
    }
    // Filtra os dados com base no status && Campo de busca selecionado
    const filteredData = data.filter((item: DataProps) =>
        (statusSelected ? item.status === statusSelected : true) &&
        (searchValue ? item.vagas.toLowerCase().includes(searchValue.toLowerCase()) : true)
    );

    // Ordena os dados com base na coluna "Status"
    const sortedData = [...filteredData].sort((a: DataProps, b: DataProps) => a.status.localeCompare(b.status));

    //Filtra os dados com base na seleção de filtro de data

    const filteredDate = filterByDate(sortedData, filterDate)

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = Array.isArray(filteredDate) ? filteredDate.slice(indexOfFirstItem, indexOfLastItem) : [];

    const pageButtons = [...Array(Math.ceil(filteredDate.length / itemsPerPage)).keys()].map((num) => (
        <ButtonsNumbers
            key={num + 1}
            onClick={() => setCurrentPage(num + 1)}
            isActive={currentPage === num + 1}
        >
            {num + 1}
        </ButtonsNumbers>
    ));
    return (
        <div>
            <IconContainer>
                <MagnifyingGlassIcon size={20} />
                <StyledInput
                    type="text"
                    placeholder="Procurar por palavra-chave"
                    value={searchValue}
                    onChange={handleSearchChange}
                />
            </IconContainer>

            <StyledTableContainer>
                <StyledTable>
                    <thead>
                        <StyledTableTr>
                            <StyledTableTh>Vaga</StyledTableTh>
                            <StyledTableTh>
                                <StyledSelect value={filterDate} onChange={handleFilterDateChange}>
                                    <option value="">Data de Candidatura</option>
                                    <option value="maisRecente">Mais Recente</option>
                                    <option value="maisAntigo">Mais Antigo</option>
                                    <option value="ultimos7Dias">Ultimos 7 Dias</option>
                                    <option value="ultimos15Dias">Ultimos 15 Dias</option>
                                    <option value="ultimos30Dias">Ultimos 30 Dias</option>
                                </StyledSelect>
                            </StyledTableTh>
                            <StyledTableTh>
                                <StyledSelect value={statusSelected} onChange={handleStatusSelected}>
                                    <option value="" disabled>Status</option>
                                    <option value="">Todos</option>
                                    <option value="Ativo">Ativo</option>
                                    <option value="Inativo">Inativo</option>
                                </StyledSelect>
                            </StyledTableTh>
                        </StyledTableTr>
                    </thead>
                    <StyledTBody>
                        {currentItems.map((item: DataProps, index: number) => (
                            <tr key={index}>
                                <StyledTableTd data-label="Vagas">{item.vagas}</StyledTableTd>
                                <StyledTableTd data-label="Data">{item.dataDeInscricao.toLocaleDateString()}</StyledTableTd>
                                <StyledTableTd data-label="Status">{item.status}</StyledTableTd>
                            </tr>
                        ))}
                    </StyledTBody>
                </StyledTable>
            </StyledTableContainer>
            <ContainerButtons>
                <ButtonsArrow onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>&lt;</ButtonsArrow>
                {pageButtons}
                <ButtonsArrow onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === Math.ceil(filteredDate.length / itemsPerPage)}>&gt;</ButtonsArrow>
            </ContainerButtons>
        </div>
    );
};