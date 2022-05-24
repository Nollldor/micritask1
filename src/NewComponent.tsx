import React from "react";

type NewComponentPropsType = {
    students: Array<StudentType>
}

type StudentType = {
    id: number,
    name: string,
    age: number
}

export const NewComponent = (props: NewComponentPropsType) => {
    const topCars = [
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
    ]
        /*<table>
        <tr>
        <th>Month</th>
    <th>Savings</th>
</tr>
    <tr>
        <td>January</td>
        <td>$100</td>
    </tr>
    <tr>
        <td>February</td>
        <td>$80</td>
    </tr>
</table>*/
    return (

        <table>
            <tr>
                <th>Manufacturer</th>
                <th>Model</th>

            </tr>
            {topCars.map((el, index) =>{
                return(
                    <tr key={index}>
                        <th>{el.manufacturer}</th>
                        <th >{el.model}</th>
                    </tr>
                );
            })}
        </table>
        /*<ul>
            {props.students.map(el =>{
                return (
                  <li key={el.id}>{el.name}</li>
                );
            })}
        </ul>*/
    );
}