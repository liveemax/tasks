const handleAdd=(firstName,setFirstName,value,setValue)=>{
    firstName.push(value)
    setFirstName(firstName)
    setValue("")
}
export default handleAdd