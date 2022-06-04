import {Button} from "./Button";
import React from "react";
import {FilterType} from "./App";


type MoneyType = {
    banknots: string,
    value: number,
    number: string,
}

type NewComponentPropsType = {
    money: Array<MoneyType>
    setNewFilter: (filter : FilterType)=>void
}

export const NewComponent = (props: NewComponentPropsType) => {
    return(
        <div>
            <ul>
                {props.money.map((el, index) => {
                    return <li key={index}>
                        <span>{el.banknots} </span>
                        <span>{el.value} </span>
                        <span>{el.number}</span>
                    </li>
                })}
            </ul>
            <div>
                <Button title={"All"} callBack={()=>props.setNewFilter("All")}/>
                <Button title={"RUBLS"} callBack={()=>props.setNewFilter("RUBLS")}/>
                <Button title={"Dollars"} callBack={()=>props.setNewFilter("Dollars")}/>
            </div>
        </div>
    )
}