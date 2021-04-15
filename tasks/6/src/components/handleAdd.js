const handleAdd=(ref,value,setValue)=>{
    let container=document.createElement("div")
    container.innerText=value
    container.id=value
    ref.current.appendChild(container)
    setValue("")
}
export default handleAdd