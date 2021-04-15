const handleDel=(ref,value,setValue)=>{
    document.getElementById(value)?.remove()
    setValue("")
}
export default handleDel