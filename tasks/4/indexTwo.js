window.onmessage = function(e) {
    const data = JSON.parse(e.data);
    const add="add"
    const read="read"
    const del="delete"
    let item=""
    switch (data.type){
        case (add):
            localStorage.setItem(data.key, data.data);
            console.log("written")
            break
        case (read):
            item=localStorage.getItem(data.key)
            console.log(item)
            break
        case (del):
            localStorage.removeItem(data.key)
            console.log("removed")

    }
};