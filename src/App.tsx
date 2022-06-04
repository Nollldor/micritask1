import React, {useState} from 'react';
import './App.css';
import {FullInput} from "./component/FullInput";



function App() {
    let [message, setMessage] = useState([
        {message: "message1"},
        {message: "message2"},
        {message: "message3"},
    ])


    const addMessage = (newMessage: string) => {
        //let  messages = [{message: newMessage},...message]
        let  messages = [...message]
        messages.unshift({message: newMessage})
        setMessage(messages)
    }



    return(
        <div className={"App"}>
            <FullInput addMessage={addMessage}/>
            {message.map((el,index)=>{
                return(
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    )
}

export default App;
