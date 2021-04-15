const xhr = new XMLHttpRequest();
const xhr1 = new XMLHttpRequest();
let flag=0

xhr.open('GET', 'https://reqres.in/api/users?per_page=12');
xhr1.open('GET', 'https://reqres.in/api/users?per_page=11');
xhr.send();
xhr1.send();
xhr.onload = function() {
    carried()(1)
};
xhr1.onload = function() {
    carried(1)()
};

function curry(f) {
    return function(a) {
        return function(b) {
            return f(a, b);
        };
    };
}

let carried = curry(response);

function response(a, b) {
    flag+=a||b
    if(flag===2)
    console.log("оба ответа получены")
}

