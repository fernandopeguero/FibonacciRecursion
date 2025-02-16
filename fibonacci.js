function fibonacci(num) {
    let arr = [0, 1];

    for (let i = 2; i < num; i++) {
        if (arr.length === 0) {
            arr.push(i);
        } else {
            arr.push(arr[i - 2] + arr[i - 1]);
        }
    }

    return arr;
}

console.log(fibonacci(8));

function fibsRec(num) {}

console.log(fibsRec(8));
