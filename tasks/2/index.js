const form=document.getElementById("form")
let query=window.location.search.substr(1).split(/(?<!manufacturer=b)&/)
localStorage.removeItem("color")
localStorage.removeItem("manufacturer")

/*UrlToForm*/

query.forEach((el)=>{
    const param=el.split(/=/)[0]
    const value=el.split(/=/)[1]
    switch (param){
    case "size":{
        localStorage.setItem(param,value)
        document.getElementById(`${param}+${value}`).checked=true
        break
    }
    case "color":{
        toLocalStore(value, param)
        document.getElementById(`${param}+${value}`).checked=true
        break
    }
    case "manufacturer":{
        toLocalStore(value, param)
        document.getElementById(`${param}+${value}`).selected=true
    }
}
})


/*FormToConsole*/

form.addEventListener("change",(e)=>{
    const target=e.target
    if(target.value!=="распродажа")
    {
        switch (target.tagName){
            case ("INPUT"):
                switch (target.name){
                    case ("size"):
                        localStorage.setItem("size",`${target.value}`)
                        break
                    case ("color"):
                        toLocalStore(`${target.value}`,"color")
                }
            break
            case ("SELECT"):
                refreshManufacturer(target.children)
        }
        localStorageToConsole()
    }
})

function refreshManufacturer(children){
    localStorage.removeItem("manufacturer")
    let arr=[]
    for (let value of children){
        if(value.selected)
            arr.push(value.value)
    }
    localStorage.setItem("manufacturer", `${JSON.stringify(arr)}`)
}

function toLocalStore(value,param){
    let lastPar=JSON.parse(localStorage.getItem(param))||[]
    lastPar.push(value)
    localStorage.setItem(param,(JSON.stringify(lastPar)))
}

function localStorageToConsole(){
    let url=`${window.location.origin}${window.location.pathname}?`
    let elem=localStorage.getItem("size")
    url=url.concat(`size=${elem}`)
    elem=JSON.parse(localStorage.getItem("color"))||[]
    elem.forEach((el)=>{
        url=url.concat(`&color=${el}`)
    })
    elem=JSON.parse(localStorage.getItem("manufacturer"))||[]
    elem.forEach((el)=>{
        url=url.concat(`&manufacturer=${el}`)
    })
    console.log(url)
}