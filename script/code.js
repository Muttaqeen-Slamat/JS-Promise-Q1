let numb1 = +prompt("Enter first number");
let numb2 = +prompt("Enter second number");

let myPromise = new Promise((resolve, reject) => {
    if (Number.isFinite(numb1) && Number.isFinite(numb2)) {
        resolve(`${numb1 + numb2}`);
    } else {
        reject(`Your values are not numbers`);
    }
});

myPromise.then(
    completed => confirm(completed),
    rejected => confirm(rejected)
);
