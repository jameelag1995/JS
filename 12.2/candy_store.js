const candyStore = {
    candies: [
        {
            name: "mint gum",
            id: "as12f",
            price: 2,
            amount: 2,
        },
        {
            name: "twix",
            id: "5hd7y",
            price: 5,
            amount: 4,
        },
    ],
    cashRegister: 200,
};
function getCandy(candyStore, id) {
    return candyStore.candies.filter((candy) => candy.id === id);
}
console.log(`testing getCandy function:`);
console.log(getCandy(candyStore, "5hd7y"));

function getPrice(candyStore, id) {
    let currentCandy = candyStore.candies.filter((candy) => candy.id === id);
    return currentCandy[0].price;
}
console.log(`testing price function:`);
console.log(getPrice(candyStore, "5hd7y"));

function addCandy(candyStore, id, name, price) {
    candyStore.candies.push({ name, id, price, amount: 1 });
}
console.log(`testing add function:`);
addCandy(candyStore, "ab2c8d", "mars", 4);
console.log(candyStore.candies);

function buy(candyStore, id) {
    let currentCandy = candyStore.candies.filter((candy) => candy.id === id)[0];
    candyStore.cashRegister += currentCandy.price;
    currentCandy.amount--;
}
console.log(`testing buy function:`);
buy(candyStore, "ab2c8d");
console.log(candyStore);
