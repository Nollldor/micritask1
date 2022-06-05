import React, {ChangeEvent, useState} from "react";

type InputPropsType = {
    title: string
    setTitle: (st: string) => void
}

export const Input = (props: InputPropsType) => {


    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value)
    }


    return (
        <input onChange={onChangeInputHandler} value={props.title}/>
    )
}