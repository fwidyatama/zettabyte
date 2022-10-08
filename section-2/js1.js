/**
 * Direction:
 * Find the higher value from the array bellow
 *
 * Expected Result:
 * 8
 */
let numbers = [3, 1, 2, 3, 7, 5, 6, 8, 2, 1];

function result(numbers) {
    let largest = numbers[0]
    for (let i = 0; i < numbers.length;i++){
        if (numbers[i]>largest){
            largest = numbers[i]
        }
    }
    return largest
}

console.log(result(numbers));