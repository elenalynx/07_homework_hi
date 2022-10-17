// 1) питаємо у користувача, що він хоче зробити (add, sub, mult, div)
// 2) питаємо у користувача перше число
// 3) запитуємо у користувача друге число
// 4) виводимо результат дії (add, sub, mult, div) з усіма операндами (Наприклад ""2 + 3 = 5"")

const add = 'add';
const sub = 'sub';
const mult = 'mult';
const div = 'div';

let typeOperation;
let number1;
let number2;

const askOperation = `Enter the type of operation to calculate (add, sub, mult, div)`;
const askNumber = 'Enter a number';

let operation;
let result;
let resultMessage;

do {
    typeOperation = prompt(askOperation);
} while (typeOperation === null
        || typeOperation.toString().toLowerCase() !== add
        && typeOperation.toString().toLowerCase() !== sub
        && typeOperation.toString().toLowerCase() !== mult
        && typeOperation.toString().toLowerCase() !== div)

do {
    number1 = prompt(askNumber);
} while (number1 === null || isNaN(+number1))

do {
    number2 = prompt(askNumber);
} while (number2 === null || isNaN(+number2))

if (typeOperation.toString().toLowerCase() === add) {
    operation = `+`;
    result = (+number1) + (+number2);
} else if (typeOperation.toString().toLowerCase() === sub) {
    operation = `-`;
    result = (+number1) - (+number2);
} else if (typeOperation.toString().toLowerCase() === mult) {
    operation = `*`;
    result = (+number1) * (+number2);
} else if (typeOperation.toString().toLowerCase() === div) {
    operation = `/`;
    result = (+number1) / (+number2);
}

resultMessage = `${number1} ${operation} ${number2} = ${result}`;
alert(resultMessage);