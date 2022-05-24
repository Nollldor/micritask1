import React from "react";
import {FilterType} from "./App";

type NewComponent1PropsType = {
    currentMoney: Array<MoneyType>,
    callBack: (nameButton: FilterType)=>void
}

type MoneyType = {
    banknots: string,
    value: number,
    number: string
}

export const NewComponent1 = (props: NewComponent1PropsType) => {

    return (
        <>
            <ul>
                {props.currentMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span> {objFromMoneyArr.banknots}</span>
                            <span> {objFromMoneyArr.value}</span>
                            <span> {objFromMoneyArr.number}</span>
                        </li>
                    )
                })}

            </ul>
            <div style={{marginLeft: "35px"}}>
                <button onClick={() => props.callBack("all")}>all</button>
                <button onClick={() => props.callBack("RUBLS")}>ruble</button>
                <button onClick={() => props.callBack("Dollars")}>dollar</button>
            </div>
        </>
    )
        ;
}