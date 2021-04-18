window.onmessage = function(e) {
    const data = JSON.parse(e.data);
    const access="http://127.0.0.1:80/"
    const iframe = window.iframe
    const add="add"
    const read="read"
    const del="delete"
    const stringCallback=`(${callback})`
    let item=""
    switch (data.type){
        case (add):
            localStorage.setItem(data.key, data.data);
            iframe.postMessage(stringCallback, access);
            console.log("written")
            break
        case (read):
            item=localStorage.getItem(data.key)
            iframe.postMessage(stringCallback, access);
            console.log(item)
            break
        case (del):
            localStorage.removeItem(data.key)
            iframe.postMessage(stringCallback, access);
            console.log("removed")

    }
};
function callback(){
    console.log("CALLBACK is work")
}