import { Table } from "@/components/Table/table"

const data = [
    {
        vagas: 'FJCLOUD | Full Stack | Pleno',
        data: '02/11/2023',
        status: 'Ativo'
    },
    {
        vagas: 'Dell Tecnologies | Full Stack | Junior',
        data: '02/11/2023',
        status: 'Inativo'
    },
    {
        vagas: 'Ti da informação | Full Stack | Senior',
        data: '02/11/2023',
        status: 'Inativo'
    },
    {
        vagas: 'MemoriesTI | front End | Senior',
        data: '02/11/2023',
        status: 'Ativo'
    },
    {
        vagas: 'UnitedStates | Back end | Senior',
        data: '02/11/2023',
        status: 'Inativo'
    },
    {
        vagas: 'Windowns Memories | BI | Senior',
        data: '02/11/2023',
        status: 'Inativo'
    },
    {
        vagas: 'Dev Lab | Full Stack | Senior',
        data: '02/11/2023',
        status: 'Inativo'
    },
];

export default function TablePage() {
    return (
        <div>
            <Table data={data} />
        </div>
    )
}