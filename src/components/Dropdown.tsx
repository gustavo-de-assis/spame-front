'use client';

import { Dropdown } from 'flowbite-react';
import { Dispatch, SetStateAction, useState } from "react";

interface DataProps {
    dataArray: string[] | number[],
    currentData: number,
    setCurrentData: Dispatch<SetStateAction<number>>
}

export default function DropdownComponent(itemList: DataProps) {
    const { dataArray, currentData, setCurrentData } = itemList;

    function returnMonthNumber(Month: string) {
        switch (Month) {
            case "Janeiro": return 1;
            case "Fevereiro": return 2;
            case "Março": return 3;
            case "Abril": return 4;
            case "Maio": return 5;
            case "Junho": return 6;
            case "Julho": return 7;
            case "Agosto": return 8;
            case "Setembro": return 9;
            case "Outubro": return 10;
            case "Novembro": return 11;
            case "Dezembro": return 12;
            default: return 0
        }
    }

    return (
        <Dropdown placement="bottom" label={currentData > 2023 ? currentData : dataArray[currentData - 1]} dismissOnClick={true} size="xl">
            {dataArray.map((il, idx) => {
                return <Dropdown.Item className='flex' key={idx} onClick={() => typeof(il) === 'string' ? setCurrentData(returnMonthNumber(il)) : setCurrentData(il)}>{il}</Dropdown.Item>
            })}
        </Dropdown>
    );
}