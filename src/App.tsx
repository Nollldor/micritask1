import React from 'react';
import './App.css';
import {Header} from "./Header";
import {Body} from "./Body";
import {Footer} from "./Footer";
import {NewComponent} from "./NewComponent";
import {Button} from "./components/Button";

function App() {
    const Button1Foo = (subscriber:string, age: number) => {
        console.log(subscriber, age)
    }

    const Button2Foo = (subscriber:string) => {
        console.log(subscriber)
    }

    const stupidButton = () => {
        console.log("Im stupid button")
    }

    return (
        <div className="App">
            <Button name={'MyYouTubeChannel-1'} callBack={()=>Button1Foo("Im Vasya", 21)}/>
            <Button name={'MyYouTubeChannel-2'} callBack={()=>Button2Foo("Im Ivan")}/>
            <Button name={"stupidButton"} callBack={stupidButton}/>
        </div>
    );
}

export default App;
