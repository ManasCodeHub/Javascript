const accountId = 120212; 
//3 ways to declare variable
let accountEmail = "manasgedam26@gmail.com"; 
var accountPassword = "12345" 
accountCity = "Sangli";
let accountState; //if the value is not set then it prints undefined 
    // prefer not to use var
    // because of issue in block scope and functional scope


//account table

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])