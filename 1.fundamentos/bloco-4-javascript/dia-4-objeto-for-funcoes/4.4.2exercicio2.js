function numbInteger(array) {
    let hightInteger = 0;
    for (let key in array) {
        if (array[hightInteger] < array[key]) {
            hightInteger = [key];
        }
    }
    return hightInteger;
}
console.log(numbInteger([2, 4, 6, 7, 10, 0, -3]));