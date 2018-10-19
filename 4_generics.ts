/**
 * Generics
 *
 * Обобщённые типы - позволяют описывать типы как параметры,
 * которые подставляются в момент использования
 *
 * Пример на основе коллекций!
 */

/**
 * Hello World из мира обобщённого программирования
 */

function identity<T>(arg: T): T {
    return arg;
}

identity<string>('sdf')
identity(1213)


const identityResult = [1, 2, 3].map(identity)




// function identity<T>(arg: T): T {
//     return arg;
// }

// let output = identity<number>('myString');

// const identityResult = ['str1', 'str2', 'str3'].map(identity)






/**
 * Обобщённые интерфейсы
 */


interface GenericIdentityFn<T> {
    (arg: T): T;
}

let myNumberIdentity: GenericIdentityFn<number> = (arg) => arg;
let myStringIdentity: GenericIdentityFn<string> = (arg) => arg;


