const getSquaredArray = (ordenedArray) => {
    return ordenedArray.map((number) => {
        return number * number;
    })
}


const result = getSquaredArray([1, 2, 3, 5, 6, 8, 9]);

console.log('result -> ', result)