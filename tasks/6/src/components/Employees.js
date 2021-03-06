import {useEffect, useRef, useState} from "react";
import React from "react";
import mount from "./mount";
import handleAdd from "./handleAdd";
import handleDel from "./handleDel";

export default function Employees() {
    let [spinner, setSpinner] = useState(true)
    let [firstName, setFirstName] = useState([])
    let [value, setValue] = useState("")
    useEffect(() => {
        mount(spinner, setSpinner, firstName, setFirstName)
    }, [])
    return (
        <div style={{margin: "10px"}}>
            <input type="text" value={value} onChange={(e) => {
                setValue(e.target.value)
            }}/>
            <button onClick={() => {
                handleAdd(firstName, setFirstName, value, setValue)
            }}>add
            </button>
            <button onClick={() => {
                handleDel(firstName, setFirstName, value, setValue)
            }}>delete
            </button>
            <div>
                {spinner ? <div>Заглушка</div> : firstName.map((el, ind) => {
                    return <React.Fragment key={el + ind}>
                        <div id={el}>{el}</div>
                    </React.Fragment>
                })}
            </div>

        </div>
    );
}

