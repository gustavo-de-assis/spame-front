"use client";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import { eachDayOfInterval, format } from 'date-fns';
import localePtBr from 'date-fns/locale/pt-BR';
import DropdownComponent from "@/components/Dropdown";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io"; 

export default function EmployeeScale() {
    const [currentYear, setCurrentYear] = useState<number>(2024);
    const [currentMonth, setCurrentMonth] = useState(1);
    const [pagePosition, setPagePosition] = useState(1);
    const yearsList = [2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035];
    const monthList = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    const hoursList = ["08:00", "10:00", "13:00", "15:00"];

    useEffect(() => {

    }, [pagePosition, setPagePosition]);

    const getAllDaysOfMonth = () => {
      const startOfMonth = new Date(currentYear, currentMonth - 1, 1);
      const endOfMonth = new Date(currentYear, currentMonth, 0);
  
      return eachDayOfInterval({ start: startOfMonth, end: endOfMonth });
    };
  
    const daysOfMonth = getAllDaysOfMonth();

    function showPages(n: number) {
        let newPosition = pagePosition + n;
        setPagePosition(newPosition)

        if (newPosition > 5) {
            newPosition = 1
            setPagePosition(1);
        }

        if (newPosition < 1) {
            newPosition = 5
            setPagePosition(5)
        }

        const days = document.getElementsByClassName("day");
        const daysArray = Array.from(days);
        let page = daysArray.slice((newPosition - 1) * 5, (newPosition - 1) * 5 + 5);
        
        if (newPosition > 4 && page.length === 0) {
            newPosition = 1
            setPagePosition(1);
            page = daysArray.slice((newPosition - 1) * 5, (newPosition - 1) * 5 + 5);
        }

        for (let i = 0; i < days.length; i++) {
            (days[i] as HTMLElement).style.display = "none";
        }


        for (let i = 0; i < page.length; i++) {
            (page[i] as HTMLElement).style.display = "flex";
        }
    }

    return (
        <>
            <Navbar/>

            <section className="flex flex-col items-center gap-8 h-auto mt-[112px]">
                <h1 className="font-normal text-primary text-[50px] leading-[45px] mt-[50px] w-[95%]"> Escala de Funcionários </h1>

                <div className="w-[70%] h-[100px] px-10 flex justify-between items-center">
                    <IoIosArrowBack className="text-5xl cursor-pointer" onClick={() => showPages(-1)}/>
                    
                    <div className="flex justify-between items-center w-[29%]">
                        <DropdownComponent dataArray={monthList} currentData={currentMonth} setCurrentData={setCurrentMonth}/>

                        <DropdownComponent dataArray={yearsList} currentData={currentYear} setCurrentData={setCurrentYear}/>                        
                    </div>

                    <IoIosArrowForward className="text-5xl cursor-pointer" onClick={() => showPages(1)}/>
                </div>

                <div className="flex gap-[25px] items-start justify-center w-11/12 h-fit">
                    <div className="mt-[46px] gap-[25px] flex flex-col">
                        {hoursList.map((h, idx) => {
                            return <span key={idx} className="font-medium text-primary text-[30px] h-[200px] flex items-center">{h}</span>
                        })}
                    </div>

                    <div className="flex gap-[50px] overflow-hidden w-[70%] h-[950px] pb-5 justify-start items-center">
                        {daysOfMonth.map((day, idx) => (
                                    format(day, 'E', { locale: localePtBr }) === "sábado" || format(day, 'E', { locale: localePtBr }) === "domingo"
                                    ?
                                    <></>
                                    :
                                    <ul key={idx} className="flex flex-col day">
                                        <span className="font-medium text-primary text-[30px] w-full text-center mb-[15px]">
                                            {format(day, 'E', { locale: localePtBr }).charAt(0).toUpperCase()}{format(day, 'E', { locale: localePtBr }).slice(1, 3)}: {format(day, 'dd/MM')}
                                        </span>

                                        <li className="flex flex-col gap-[25px]">
                                            {hoursList.map((h, idx) => {
                                                return <div key={idx} className="w-[200px] h-[200px] bg-[#d9d9d9] text-black flex justify-center items-center rounded-lg text-center">ESDRINHAS CIRURGIAS</div>
                                            })}
                                        </li>
                                    </ul>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}