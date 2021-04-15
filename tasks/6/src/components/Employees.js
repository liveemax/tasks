import {useEffect, useRef, useState} from "react";
import React from "react";
import mount from "./mount";
import handleAdd from "./handleAdd";
import handleDel from "./handleDel";

export default function Employees() {
    let [spinner, setSpinner] = useState(true)
    let [firstName, setFirstName] = useState([])
    let [value, setValue] = useState("")
    let ref=useRef(null)
    useEffect( () => {
        mount(spinner,setSpinner,firstName,setFirstName)
    }, [])
    return (
        <div style={{margin:"10px"}}>
            <input type="text" value={value} onChange={(e)=>{setValue(e.target.value)}}/>
            <button onClick={()=>{handleAdd(ref,value,setValue)}}>add</button>
            <button onClick={()=>{handleDel(ref,value,setValue)}}>delete</button>
            <div  ref={ref}>
            {spinner ? <div>Заглушка</div> : firstName.map((el,ind)=>{
                return <React.Fragment key={el+ind}>
                    <div id={el}>{el}</div>
                </React.Fragment>
            })}
            </div>

        </div>
    );
}