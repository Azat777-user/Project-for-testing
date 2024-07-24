/*
* Создать программный код, который определяет, может ли пользователь получить доступ к ресурсу на основе его роли и наличия разрешений.
* Полученное булево значение сохраните в переменной isAccess.

* Условия доступа:
* - Пользователь должен иметь статус администратора (isAdmin) или быть подтвержденным пользователем (isVerifiedUser)
* - А также пользователь должен обладать специальным разрешением (hasSpecialPermission) или временным пропуском (hasTemporaryPass)
*/

// тестовые данные (значения можно менять)
const isAdmin = "Administrator"
const isVerifiedUser = "Verified user"
const hasSpecialPermission = "yes"
const hasTemporaryPass = "no"

let isAccess

// your code

debugger

if(isAdmin == "Administrator" && hasSpecialPermission == "yes") isAccess = true
if(isVerifiedUser !== "" && hasSpecialPermission !== "") isAccess = false
if(isVerifiedUser == "Verified user" && hasSpecialPermission == "yes") isAccess = true
if(isVerifiedUser == "Verified user" || (hasSpecialPermission !=="" && hasTemporaryPass !=="")) isAccess = false