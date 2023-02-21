/*не очень понятная постановка задачи, но если проверка каждого элемента по типу данных,
то вот вариант с разным типом и будет значение false*/

let arr = [2, 5, 3, '6'];

let theSame = true;
for (let i = 0; i < arr.length - 1; i++){
    for (let j = i + 1; j < arr.length; j++){
        if (typeof(arr[i]) !== typeof(arr[j])){
            theSame = false;
        }
    }
}
if (theSame) {
    console.log(true);
} else {
    console.log(false);
}

// и одинаковый тип, true соответственно
 
let arr = [2, 5, 3, 6];

let theSame = true;
for (let i = 0; i < arr.length - 1; i++){
    for (let j = i + 1; j < arr.length; j++){
        if (typeof(arr[i]) !== typeof(arr[j])){
            theSame = false;
        }
    }
}
if (theSame) {
    console.log(true);
} else {
    console.log(false);
}