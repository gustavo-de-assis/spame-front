interface ListProps {
    dataArray: {Nome: string, Especialidade: string, Status: string}[]
}

export default function ItemList(list: ListProps){
    const { dataArray } = list;
 
    return (
        <ul>
            {dataArray.map((l, idx) => {
                return (
                    <li key={idx}> 
                        <span>{l.Nome}</span>
                        <span>{l.Especialidade}</span>
                        <span>{l.Status}</span>
                        <button>Remover</button>
                    </li>
                )
            })}
        </ul>
    );
}