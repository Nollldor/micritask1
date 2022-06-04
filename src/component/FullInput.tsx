import React, {ChangeEvent, useState} from "react";

type FullInputPropsType = {
    addMessage: (title:string)=>void
}

export const FullInput = (props: FullInputPropsType) => {

    const [title, setTitle] = useState("")

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const onClickInputHandler = () => {
        props.addMessage(title)
        setTitle("")
    }


    return (
        <div>
            <input onChange={onChangeInputHandler} value={title}/>
            <button onClick={onClickInputHandler}>+
            </button>
        </div>
    )
}