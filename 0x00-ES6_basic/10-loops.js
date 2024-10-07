export default function appendToEachArrayValue(array, appendString) {
    const newArr = [];
    for (cons idx of array) {
        newArr.push(appendString + idx);
    }

    return newArr
}