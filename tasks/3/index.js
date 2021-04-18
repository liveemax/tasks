const xhr = new XMLHttpRequest();
const xhr1 = new XMLHttpRequest();
let flag=0
xhr.open('GET', 'https://reqres.in/api/users?per_page=12');
xhr1.open('GET', 'https://reqres.in/api/users?per_page=11');
xhr.send();
xhr1.send();
xhr.onload = function() {
    onload()
}
xhr1.onload = function() {
    onload()
};
function onload(){
    flag+=1
    if(flag===2)
    console.log("оба ответа получены")
}