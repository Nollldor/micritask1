import React, {useState} from 'react';
import './App.css';
import {Header} from "./Header";
import {Body} from "./Body";
import {Footer} from "./Footer";
import {NewComponent} from "./NewComponent";
import {Button} from "./components/Button";

function App() {
    let [a, setA] = useState(1);

    const onclickHandler = (current: string) =>{
        if(current==="+") {
            setA(++a);
            console.log(a);
        }else{
            setA(a=0);
            console.log(a);
        }
    }

    return (
        <div className="App">
            <h1>{a}</h1>
            <button onClick={()=>onclickHandler("+")}>number</button>
            <button onClick={()=>onclickHandler("0")}>0</button>
        </div>
    );
}

export default App;
