const data = [
    {
        name: "John",
        birthday: "1-1-1995",
        favoriteFoods: {
            meats: ["hamburgers", "sausages"],
            fish: ["salmon", "pike"],
        },
    },
    {
        name: "Mark",
        birthday: "10-5-1980",
        favoriteFoods: {
            meats: ["hamburgers", "steak", "lamb"],
            fish: ["tuna", "salmon", "barracuda"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["ham", "chicken"],
            fish: ["pike"],
        },
    },
    {
        name: "Thomas",
        birthday: "1-10-1990",
        favoriteFoods: {
            meats: ["bird", "rooster"],
            fish: ["salmon"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["hamburgers", "lamb"],
            fish: ["anchovies", "tuna"],
        },
    },
];

/* -------------------------------------------------------------------------- */
/*                                     Q1                                     */
/* -------------------------------------------------------------------------- */
function returnNames(arr) {
    const namesArr = [];
    arr.forEach((obj) => namesArr.push(obj.name));
    return namesArr;
}
console.log("Names:", returnNames(data));

/* -------------------------------------------------------------------------- */
/*                                     Q2                                     */
/* -------------------------------------------------------------------------- */
function bornBefore1990(arr) {
    const bornBefore = [];
    arr.forEach((obj) => {
        let birthyear = obj.birthday.split("-")[2];
        if (birthyear < 1990) {
            bornBefore.push(obj);
        }
    });
    return bornBefore;
}

console.log("born before 1990:", bornBefore1990(data));

function foodCount(arr) {
    const foodCounter = {};
    arr.forEach((obj) => {
        for (const foodtype in obj.favoriteFoods) {
            for (const food of obj.favoriteFoods[foodtype]) {
                if (foodCounter[food]) {
                    foodCounter[food]++;
                } else {
                    foodCounter[food] = 1;
                }
            }
        }
    });
    return foodCounter;
}
console.log('food Count:',foodCount(data));
