//Типы данных и переменные

var name = 'Katya';
console.log(name);

name = 'Yulia';
console.log(name);

//Условный оператор if

if (name =='Katya') {
    console.log('Correct name');
}

else {
    console.log('you enter uncorrect name');
}

//Циклический оператор for

var num = 11;
for (i = 0; i < 10; i++) {
    console.log(i);
}

//Цикл while

var count = 0;
while (count < 10) {
    count ++;
}

//Функции

function sum(p1, p2, p3) {
var result = p1 + p2 + p3;
return result;
}

var sumResul = sum(10, 20, 30);
console.log(sumResul);

sumResul = sum(40, 20, 60);
console.log(sumResul);

//Массивы и объекты

//задание 1
var array = ['привет', 'loftschool'];
array.push('я изучаю');
array.push('java script');
console.log(array.length);

for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
}

//задание 2

var array = [1, 4, 900, 50, 23, 405, 9, 4, 762, 2];
for (var i = 0; i < array.length; i++) {
    if (array[i] > 100) {
        console.log(array[i]);
    }
}

//задание 3

var obj = {
    name: 'Katya',
    lastName: 'Telpuk',
    age: '24'
}

console.log(obj.name);
console.log(obj.lastName);
console.log(obj.age);

obj.city = 'Minsk';
console.log(obj.city);

//задание 4

function hello(human) {
    var result = 'Привет ' + 'меня зовут ' + human.name + " " + human.lastName + ' и мне ' + human.age + ' года';
    return result;
}

var lastResult = hello(obj);
console.log(lastResult);

