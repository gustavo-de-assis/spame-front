interface ListProps {
    dataArray: {Nome: string, Especialidade: string, Status: string}[]
}

export default function ItemList(list: ListProps){
    const { dataArray } = list;
 
    return (
        <ul className="gap-[20px] flex flex-col">
            <div className="flex items-center relative h-[30px]">
                <span className="font-normal text-primary text-[30px] absolute">Nome</span>
                <span className="font-normal text-primary text-[30px] absolute left-[600px]">Especialidade</span>
                <span className="font-normal text-primary text-[30px] absolute left-[1440px]">Status</span>
            </div>

            {dataArray.map((l, idx) => {
                return (
                    <li key={idx} className="bg-container relative rounded-[5px] h-[50px] flex flex-row items-center"> 
                        <span className="font-normal text-primary text-[25px] absolute left-[20px]">{l.Nome}</span>
                        <span className="font-normal text-primary text-[20px] absolute left-[600px]">{l.Especialidade}</span>
                        <span className="font-normal text-primary text-[20px] absolute left-[1440px]">{l.Status}</span>
                        <button className="bg-redButton absolute font-normal right-[50px] h-[30px] w-[100px] rounded-[7px] text-gray-50">Remover</button>
                    </li>
                )
            })}
        </ul>
    );
}