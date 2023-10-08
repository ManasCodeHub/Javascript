/* Primitive data types

    7 Types (call by values):
            String
            Number
            boolean
            null
            undefined
            Symbol // is used for making unique
            BigInt 


    Non-Primitive data types
    (Reference)
            Array
            Objects
            Functions
*/

//Symbol 
let name = Symbol('Manas')
let anotherName = Symbol('Manas')

// bigInt

let bigNumber = 238579825784598345n

console.log(typeof(bigNumber)); //bigInt



console.log( name === anotherName)