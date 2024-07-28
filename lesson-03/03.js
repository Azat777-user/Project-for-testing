// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(number1, number2, number3) {
    debugger
    let largetNumber = 0
    if (number1 > number2 && number1 > number3) largetNumber = number1
    if (number1 < number2 && number2 > number3) largetNumber = number2
    if (number3 > number1 && number2 < number3) largetNumber = number3
    if((number1 === number2) &&(number2 === number3)) largetNumber = number1 
    return largetNumber
}
