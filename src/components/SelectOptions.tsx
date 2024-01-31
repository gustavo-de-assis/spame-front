interface Props {
    dataArray: string[]
}

export default function SelectOptions(optionsList: Props) {
    const { dataArray } = optionsList;

    return(
        <select className="w-[220px] mt-[3px] rounded-[8px] bg-slate-400">
            <option value={""}></option>

            {
                dataArray.map((opt, idx) => {
                    return (
                        <option key={idx} value={opt.toLowerCase()}>{opt}</option>
                    );
                })
            }
        </select>
    );
}