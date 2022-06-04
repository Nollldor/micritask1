import React, {useState} from 'react';
import './App.css';
import {Button} from "./Button";
import {NewComponent} from "./NewComponent";

export type FilterType = "All" | "Dollars" | "RUBLS"

function App() {

    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    const [filter, setFilter] = useState<FilterType>("All")

    let filteredMoney = money

    if(filter==="RUBLS") {
        filteredMoney = money.filter(el => el.banknots === 'RUBLS')
    }
    if(filter==="Dollars"){
        filteredMoney = money.filter(el => el.banknots === 'Dollars')
    }

    const setNewFilter = (newFilter: FilterType)=>{
        setFilter(newFilter)
    }

    return (
        <NewComponent money={filteredMoney} setNewFilter={setNewFilter}/>
    )
}

export default App;
