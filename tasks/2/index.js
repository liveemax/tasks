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
        switch (value){
            case "S":
                form[0].checked=true
                localStorage.setItem("size","S")
                break
            case "M":
                form[1].checked=true
                localStorage.setItem("size","M")

                break
            case "N":
                form[2].checked=true
                localStorage.setItem("size","N")

        }
        break
    }
    case "color":{
        switch (value){
            case "1":
                form[3].checked=true
                toLocalStorage("color","1")
                break
            case "2":
                form[4].checked=true
                toLocalStorage("color","2")
                break
            case "3":
                form[5].checked=true
                toLocalStorage("color","3")
                break
            case "4":
                form[6].checked=true
                toLocalStorage("color","4")
                break
            case "5":
                form[7].checked=true
                toLocalStorage("color","5")
                break
        }
        break
    }
    case "manufacturer":{
        switch (value){
            case "aaa":
                form[8][0].selected=true
                toLocalStorage("manufacturer","aaa")
                break
            case "b&c":
                form[8][1].selected=true
                toLocalStorage("manufacturer","b&c")
                break
            case "ddd":
                form[8][2].selected=true
                toLocalStorage("manufacturer","ddd")
                break
            case "eee":
                form[8][3].selected=true
                toLocalStorage("manufacturer","eee")
                break
        }
        break
    }
}
})

/*FormToConsole*/

init=false
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
                        toLocalStorage("color",`${target.value}`)
                        break
                }
            break
            case ("SELECT"):
                refreshManufacturer(target.children)
        }
        localStorageToConsole()
    }
})




function toLocalStorage(item,val){
    let element=JSON.parse(localStorage.getItem(item))||[]
    let flag=1
    element = element.filter((el) => {
            if (el === val) {
                flag = null
                return false
            }
            return true
        })
        flag?element.push(val) : null
        localStorage.setItem(item, `${JSON.stringify(element)}`)
}


function refreshManufacturer(children){
    localStorage.removeItem("manufacturer")
    let arr=[]
    for (let value of children){
        if(value.selected)
            arr.push(value.value)
    }
    localStorage.setItem("manufacturer", `${JSON.stringify(arr)}`)
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