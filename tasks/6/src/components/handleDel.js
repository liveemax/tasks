const handleDel = (addedPerson, setPerson, value, setValue) => {
    addedPerson = addedPerson.filter((el) => {
        if (el !== value)
            return true
    })
    setPerson(addedPerson)
    setValue("")
}
export default handleDel