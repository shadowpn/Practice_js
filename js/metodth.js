"use strict";
const str = "teSt";
const arr = [1, 2, 4];

// console.log(str.length); //количества символов
// console.log(arr.length); //количество елементов в масиве

console.log(str.toUpperCase());
console.log(str.toLowerCase());

let fruit = "Some fruit";

console.log(fruit.indexOf("fruit"));

const logg = "Hello world";

// console.log(logg.slice(6, 11));
// console.log(logg.substring(6, 11));
console.log(logg.substr(6, 5));

const num = 12.2;

console.log(Math.round(num));

const test = "12.2px";

console.log(parseInt(test));
console.log(parseFloat(test));

/*Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба (тоже базовая математика,
 иногда используется в создании анимаций). Эта функция принимает в себя целое число со значением длины ребра куба. 
 Ответ выведите в формате строки, который изображен в примерах.
 */

function calculateVolumeAndArea(edgeLength) {
  if (!Number.isInteger(edgeLength) || edgeLength <= 0) {
        return 'При вычислении произошла ошибка';
    }
const volume = edgeLength * edgeLength * edgeLength;
const surfaceArea = 6 * edgeLength * edgeLength;
return `Объем куба: ${volume}, площадь всей поверхности: ${surfaceArea}`;
}

console.log(calculateVolumeAndArea(5));    
console.log(calculateVolumeAndArea(15));   
console.log(calculateVolumeAndArea(15.5)); 
console.log(calculateVolumeAndArea('15')); 
console.log(calculateVolumeAndArea(-15));  

//Функция принимает только целое число от 1 до 36.
//Если переданный аргумент не число, отрицательное или дробное - возвращается сообщение:
//"Ошибка. Проверьте правильность введенного номера места"
//Если число 0 или больше 36, то сообщение: "Таких мест в вагоне не существует"

function getCoupeNumber(num) {
      if (typeof num !== 'number' || !Number.isInteger(num) || num < 0 ) {
        return "Ошибка. Проверьте правильность введенного номера места";
        } else if ( num === 0 || num > 36)  {
          return "Таких мест в вагоне не существует"
        } else {
            let numberCoupe = Math.ceil(num / 4);
        return numberCoupe;
            
    }
}

console.log(getCoupeNumber(33));    
console.log(getCoupeNumber(7));   
console.log(getCoupeNumber(300)); 
console.log(getCoupeNumber(0)); 
console.log(getCoupeNumber(7.7));
console.log(getCoupeNumber(-10)); 
console.log(getCoupeNumber("Hello"));  


function getTimeFromMinutes(minutes) {
    if (typeof minutes !== 'number' || !Number.isInteger(minutes) || minutes < 0 || minutes > 600) {
        return "Ошибка, проверьте данные";
    } else {
        //Иначе, если условие не выполнено, выполняется следующий блок кода.
        const hours = Math.floor(minutes / 60);
        const remainderMinutes = minutes % 60;
        //Вычисляется количество часов (целая часть от деления minutes на 60) и количество оставшихся минут (остаток от деления minutes на 60).
        const hoursText = hours === 0 ? "0 часов" : hours === 1 ? "1 час" : `${hours} часа`;
        const minutesText = remainderMinutes === 0 ? "0 минут" : remainderMinutes === 1 ? "1 минута" : `${remainderMinutes} минут`;
        
        return `Это ${hoursText} и ${minutesText}`;
    }
}

console.log(getTimeFromMinutes(150));   // "Это 2 часа и 30 минут"
console.log(getTimeFromMinutes(50));    // "Это 0 часов и 50 минут"
console.log(getTimeFromMinutes(0));     // "Это 0 часов и 0 минут"
console.log(getTimeFromMinutes(-150));  // "Ошибка, проверьте данные"

function findMaxNumber(num1, num2, num3, num4) {
    // Проверяем, что количество аргументов равно 4 и все они числа
    if (arguments.length !== 4 ||
        typeof num1 !== 'number' ||
        typeof num2 !== 'number' ||
        typeof num3 !== 'number' ||
        typeof num4 !== 'number') {
        return 0; // Если условие не выполнено, возвращаем 0
    } else {
        // Возвращаем максимальное значение из четырех аргументов
        return Math.max(num1, num2, num3, num4);
    }
}

// Примеры использования:
console.log(findMaxNumber(1, 5, 6.6, 11)); // Выведет: 11
console.log(findMaxNumber(1, 5, '6', '10')); // Выведет: 0


//Для собеседования числа Фибоначчи
function fib(num) {
    if (typeof num !== 'number' || num <= 0 || !Number.isInteger(num)) {
        return '';
    }

    let fibSequence = ''; // Инициализируем пустую строку для последовательности чисел Фибоначчи
    let a = 0; // Первое число Фибоначчи
    let b = 1; // Второе число Фибоначчи

    // Добавляем первое число Фибоначчи к последовательности
    fibSequence += `${a}`;

    // Если num больше 1, то вычисляем следующие числа Фибоначчи
    if (num > 1) {
        fibSequence += ` ${b}`; // Добавляем второе число Фибоначчи к последовательности

        // Используем цикл для вычисления остальных чисел Фибоначчи
        for (let i = 2; i < num; i++) {
            const nextFib = a + b; // Вычисляем следующее число Фибоначчи
            fibSequence += ` ${nextFib}`; // Добавляем его к последовательности
            a = b; // Обновляем первое число Фибоначчи
            b = nextFib; // Обновляем второе число Фибоначчи
        }
    }

    return fibSequence; // Возвращаем строку с числами Фибоначчи
}

console.log(fib(4));  // "0 1 1 2"
console.log(fib(7));  // "0 1 1 2 3 5 8"
console.log(fib('7'));  // ""
console.log(fib(1));  // "0"
console.log(fib(0));  // ""



