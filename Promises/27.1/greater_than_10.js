function greaterThanTen(num) {
    return  new Promise((resolve, reject) => {
        if (num > 10) {
            resolve(num);
        } else {
            reject(`number is less than 10: ${num}`);
        }
    });
}

greaterThanTen(2)
.then((num) => {
    console.log(`${num} is larger than 10`);
}).catch((err) => {
    console.log(err);
});

