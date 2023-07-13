// Необходимо написать функцию clone, которая принимает аргументом переменную, содержащую объект. Внутри функции необходимо:
//
//     проверить, что аргумент в типе object
// проверить, что аргумент не null
// проверить, что аргумент не пустой объект ( Object.keys( funcArgument ).length > 0  https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
//     если аргумент не прошел проверку, то оборвать функцию ( return ) и вернуть строку с ошибкой (уникальной для каждого случая)
// проитерировать объект (аргумент функции) циклом for..in и создать новый объект c такими же свойствами
// проверить, что тип данных нового объекта — object ( с помощью тернарного оператора «знак вопроса» ( ? ) ), и если это так, то вернуть новый объект, иначе — вернуть nul

let user1 = {
    name : 'vlad' ,
    surName : 'khrolenko' ,
    age : 22 ,
    gender : 'male',
    verefication : true ,
}
let user2 = "vlad Khrolenko 22 male true"
let user3 = {}

function clon(obj) {
    if (typeof obj !== 'object') {
        return 'Ошибка: Аргумент должен быть объектом.';
    }
    else if(obj === null)
        return 'Ошибка: Аргумент не может быть null.';

    else if(Object.keys(obj).length === 0) {
        return 'Ошибка: Аргумент не может быть пустым объектом.';
    }
    let newObj = {};
    for (let key in obj) {
        newObj[key] = obj[key];
    }
    return typeof newObj === 'object' ? newObj : null;
}
//
console.log(clon(user1))
console.log(clon(user2))
console.log(clon(user3))
console.log(clon(null))
