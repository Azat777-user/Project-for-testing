/*
* Создать программный код, который определяет, может ли пользователь получить доступ к ресурсу на основе его роли и наличия разрешений.
* Полученное булево значение сохраните в переменной isAccess.

* Условия доступа:
* - Пользователь должен иметь статус администратора (isAdmin) или быть подтвержденным пользователем (isVerifiedUser)
* - А также пользователь должен обладать специальным разрешением (hasSpecialPermission) или временным пропуском (hasTemporaryPass)
*/

// тестовые данные (значения можно менять)
const isAdmin = true
const isVerifiedUser = true
const hasSpecialPermission = true
const hasTemporaryPass = false

let isAccess
// your code
// 

debugger

let isUserAutorized = ((isAdmin || isVerifiedUser) && (hasSpecialPermission ||hasTemporaryPass)) 

isAccess = isUserAutorized ? true : false

// if((isAdmin || isVerifiedUser) && (hasSpecialPermission ||hasTemporaryPass)) 
// { 
//     isAccess = true
// } else { 
//     isAccess = false
// }

// if(isAdmin && hasSpecialPermission) isAccess = true
// if(!isVerifiedUser && !hasSpecialPermission) isAccess = false
// if(isVerifiedUser && !hasTemporaryPass) isAccess = true
// if(isVerifiedUser && (hasSpecialPermission && !hasTemporaryPass)) isAccess = false