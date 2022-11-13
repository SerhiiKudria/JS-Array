//0 Створити числовий масив та
//проініціалізувати його (*випадковими числами).
const arr = [];
for (let i = 0; i < 10; i++) {
  arr.push(Math.floor(Math.random() * 2));
}
console.log("arr", arr);
//1 Видалити останній і початковий елемент
//з масиву, додати елемент до початку і кінця.
arr.splice(0, 1);
arr.splice(arr.length - 1, 1);
console.log("arr", arr);
//2 Вивести розмір масиву.
console.log("arr.length", arr.length);
//3 Зробити копію масиву.
arrCopy = [...arr];
console.log("arrCopy", arrCopy);
// Не використовувати методи перебору масивів
//(forEach, filter, map, findIndex), а використати цикли
//4 Вивести елементи з парними індексами.
for (const key in arr) {
  if (key % 2 === 0) {
    console.log(`arr[${key}]`, arr[key]);
  }
}
//5 Вивести лише парні елементи (парні числа діляться на 2 без залишку).
for (const element of arr) {
  if (element % 2 === 0) {
    console.log(element);
  }
}
//6 Вивести індекси нульових елементів (елемент дорівнює нулю).
for (const key in arr) {
  if (arr[key] === 0) {
    console.log(`arr[${key}]`, arr[key]);
  }
}
//7 Підрахувати кількість нульових елементів.
let zeroCount = 0;
for (const key in arr) {
  if (arr[key] === 0) {
    zeroCount++;
  }
}
console.log("zeroCount", zeroCount);
/* Методи перебору масивів (forEach, filter, map, findIndex, *some, *every).
8 Отримати новий масив із заданого, який міститиме лише
ненульові числа (-1, 5, 0, 9, -10 => -1, 5, 9, -10).*/
const arrFor = [-1, 5, 0, 9, -10];
const newFor = arrFor.filter(function notZero(item) {
  return item !== 0;
});
console.log("newFor", newFor);
/*
9 Отримати новий масив їх заданого, який міститиме всі елементи вихідного, 
поділені на 100 (99, 5, 0, 9, 30 => 0.99, 0.05, 0, 0.09, 0.3).
*/
const arrDiv = [99, 5, 0, 9, 30];
const arrMin = arrDiv.map(function notZero(item) {
  return item / 100;
});
console.log("arrMin", arrMin);
//10 Вивести елементи масиву, зведені у куб.
const arrCube = arrDiv.map(function Cube(item) {
  return item ** 3;
});
console.log("arrCube", arrCube);
/*11 Визначити індекс елемента, квадрат якого дорівнює 100, і видалити його,
 або видати діагностичне повідомлення, якщо такого елементу не існує.
 */
const arrStart = [99, 5, 10, -9, 30];
const arr100 = arrStart.filter(function (item) {
  return item ** 2 === 100;
});
if (arr100.length === 0) {
  console.log("Element ** 2 === 100 does not exist");
} else {
  arr100.forEach((element) => {
    arrStart.splice(arrStart.indexOf(element), 1);
  });
}
console.log("arrStart", arrStart);
/*12 *Перевірити, чи всі елементи масиву є парними числами 
(* або простими числами).
*/
const arrEven = arrStart.filter(function (item) {
  return item % 2 === 0;
});
console.log("arrEven", arrEven);
console.log("all elements are even", arrEven.length === arrStart.length);
//13 *Перевірити, чи є у масиві бодай один від'ємний елемент.
const arrNegative = arrStart.filter(function (item) {
  return item < 0;
});
console.log("arrNegative", arrNegative);
console.log("is negative exist", arrNegative.length > 0);
