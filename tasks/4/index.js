window.addEventListener("submit",(e)=>{
    e.preventDefault()
    const iframe = window.iframe
    const submitter=e.submitter.name
    const target=e.target
    const add="add"
    const read="read"
    const del="delete"
    const access="http://127.127.127.127:80/"
    switch (submitter){
        case add:{
            iframe.postMessage(JSON.stringify({type:add,key: target[0].value,data: target[1].value}), access);
            clear(target)
            break
        }
        case read:{
            iframe.postMessage(JSON.stringify({type:read,key: target[0].value}), access);
            clear(target)
            break
        }
        case del:{
            iframe.postMessage(JSON.stringify({type:del,key: target[0].value}), access);
            clear(target)
            break
        }
    }
})



function clear(target){
    target[0].value=""
    target[1].value=""
}