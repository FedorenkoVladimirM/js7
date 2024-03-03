let str = "js";
str = str.toUpperCase();
console.log(str);

function filterStrings(array, startStr) {
    return array.filter(item => item.toLowerCase().startsWith(startStr.toLowerCase()));
}

let number = 32.58884;
console.log(Math.floor(number));
console.log(Math.ceil(number));
console.log(Math.round(number));

let nums = [52, 53, 49, 77, 21, 32];
console.log(Math.min(...nums));
console.log(Math.max(...nums));

function randomOneToTen(){
    console.log(Math.floor(Math.random() * 10) + 1);
}

function randomNumbers(n){
    let result = [];
    for (let i = 0; i < n/2; i++) {
        result.push(Math.floor(Math.random() * n));
    }
    return result;
}

