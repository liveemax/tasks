const mount=async (spinner,setSpinner,firstName,setFirstName)=>{
    try {
        let list = await fetch("https://reqres.in/api/users?per_page=12")
        if (list.ok) {
            list = await list.json();
            for (let value of list.data) {
                firstName.push(value.first_name)
                setFirstName(firstName)
            }
        }
    } catch (e) {
        alert(new Error("Employees.Something wrong"))
    }
    setSpinner(!spinner)
}
export default mount