import React from 'react';
import './App.css';
import {Header} from "./Header";
import {Body} from "./Body";
import {Footer} from "./Footer";
import {NewComponent} from "./NewComponent";

function App() {
    /*const students = [
        {id:0, name: "Arthur", age:30},
        {id:1, name: "Kristina", age:29}
    ]
    const MyFirstSubscriber = (event:MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log("Hello! I am Vasya")
    }

    const MySecondSubscriber = () => {
        console.log("Hello! I am Ivan")
    }

    const onClickHandler = (name: string) => {
        console.log(`Hello! I am ${name}`);
    }*/

    const foo1 = () => {
        //ничего не передавать
        console.log(100200);
    }

    const foo2 = (val: number) => {
        //передать цифру 100200
        console.log(val);
    }

    return (
        <div className="App">
            {/*<button onClick={(event)=>{console.log("Hello!")}}>My YouTubeChannel-1</button>
        <button onClick={() => onClickHandler("Vasya")}>My YouTubeChannel-2</button>
        <button onClick={() => onClickHandler("Ivan")}>My YouTubeChannel-1</button>
        <Header title={"NEW Header"}/>
        <Body titleForBody={"New Body"}/>
        <NewComponent students={students} />
        <Footer titleForFooter={"New Footer"}/>*/}

            <button onClick={foo1}>1</button>
            <button onClick={() => foo2(100200)}>2</button>
        </div>
    );
}

export default App;
