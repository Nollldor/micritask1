import React from 'react';
import './App.css';
import {Header} from "./Header";
import {Body} from "./Body";
import {Footer} from "./Footer";
import {NewComponent} from "./NewComponent";

function App() {
    const students = [
        {id:0, name: "Arthur", age:30},
        {id:1, name: "Kristina", age:29}
    ]
  return (
    <>

        {/*<Header title={"NEW Header"}/>
        <Body titleForBody={"New Body"}/>*/}
        <NewComponent students={students} />
        {/*<Footer titleForFooter={"New Footer"}/>*/}
    </>
  );
}

export default App;
