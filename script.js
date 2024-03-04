let str = "js"; //Задание 1
str = str.toUpperCase();
console.log(str);

function filterStrings(array, startStr) { //Задание 2
    return array.filter(item => item.toLowerCase().startsWith(startStr.toLowerCase()));
}

let number = 32.58884; //Задание 3
console.log(Math.floor(number));
console.log(Math.ceil(number));
console.log(Math.round(number));

let nums = [52, 53, 49, 77, 21, 32]; //Задание 4
console.log(Math.min(...nums));
console.log(Math.max(...nums));

function randomOneToTen(){ //Задание 5
    console.log(Math.floor(Math.random() * 10) + 1);
}

function randomNumbers(n){ //Задание 6
    let result = [];
    for (let i = 0; i < n/2; i++) {
        result.push(Math.floor(Math.random() * n));
    }
    return result;
}

function randomBetween (min, max) { //Задание 7
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(new Date()); //Задание 8

let currenDate = new Date(); //Задание 9
currenDate.setDate(currenDate.getDate() + 73);
console.log(currenDate);

function formatDate(date) { //Задание 10
    let days = ["Воскресенье", "Понеделььник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    let months = ["января", "феевраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
    return 
    `Дата:
    ${data.getDate()}
    ${months[date.getMonth()]}
    ${data.getFullYear()} - это ${days[date.getDay()]}\nВремя:
    ${date.getHours()}:${date.getMinytes()}:${date.getSeconds()}`; 
}

console.log(formatDate(new Date()));