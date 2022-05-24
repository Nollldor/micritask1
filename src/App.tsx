import React, {useState} from 'react';
import './App.css';
import {Header} from "./Header";
import {Body} from "./Body";
import {Footer} from "./Footer";
import {NewComponent} from "./NewComponent";
import {Button} from "./components/Button";
import {NewComponent1} from "./NewComponent1";

export type FilterType = "all" | 'Dollars' | 'RUBLS';

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

    let [filter, setFilter]= useState<FilterType>("all");
    let currentMoney = money;

    if(filter==='Dollars'){
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === "Dollars");
    }else if(filter==='RUBLS'){
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === "RUBLS");
    }else {
        currentMoney = money;
    }

    const onclickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton);
    }

    return (
        <>
            <NewComponent1 currentMoney={currentMoney} callBack={onclickFilterHandler}/>

        </>
    );
}

export default App;
