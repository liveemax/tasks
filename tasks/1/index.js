const input=document.getElementById("name_input")
input.addEventListener("keyup", ()=>{
    const defaultValue=input.defaultValue
    const value=input.value
    value!==defaultValue?input.classList.add("red"):input.classList.remove("red")
})
