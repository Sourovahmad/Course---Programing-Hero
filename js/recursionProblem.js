function josephus(n, k) {
    if (n == 1)
        return 1;
    else
        return (josephus(n - 1, k) + k - 1) % n + 1;
        // (14-1, 2) + (2-1) % 14 + 1;
}

let n = 14;
let k = 2;

console.log("The chosen place is " + josephus(n, k));