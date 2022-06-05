import React, {useState} from 'react';
import './App.css';
import {Input} from "./component/Input";
import {Button} from "./component/Buton";


function App() {
    let [message, setMessage] = useState([
        {message: "message1"},
        {message: "message2"},
        {message: "message3"},
    ])

    const [title, setTitle] = useState("")


    const addMessage = (newMessage: string) => {
        //let  messages = [{message: newMessage},...message]
        let messages = [...message]
        messages.unshift({message: newMessage})
        setMessage(messages)
    }

    const callBackButtonHandler = () => {
        addMessage(title)
        setTitle("")
    }


    return (
        <div className={"App"}>
            {/*<FullInput addMessage={addMessage}/>*/}
            <Input title={title} setTitle={setTitle}/>
            <Button callback={callBackButtonHandler} name={"+"}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    )
}

export default App;
