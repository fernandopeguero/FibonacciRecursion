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

function fibsRec(num, arr = [0, 1]) {
    if (arr.length > num) {
        return arr.slice(0, num);
    }

    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);

    return fibsRec(num, arr);
}

console.log(fibsRec(8));
