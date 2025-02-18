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

function mergeSort(arr) {
    if (arr.length === 1) return arr;

    const middle = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, middle));
    const right = mergeSort(arr.slice(middle, arr.length));

    const sorted = [];

    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        const currentLeft = left[i];
        const currentRight = right[j];

        if (currentLeft < currentRight) {
            i++;
            sorted.push(currentLeft);
        } else if (currentLeft > currentRight) {
            j++;
            sorted.push(currentRight);
        } else {
            i++;
            j++;
            sorted.push(currentLeft);
            sorted.push(currentRight);
        }
    }

    for (let k = i; k < left.length; k++) {
        sorted.push(left[k]);
    }

    for (let g = j; g < right.length; g++) {
        sorted.push(right[g]);
    }

    return sorted;
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
