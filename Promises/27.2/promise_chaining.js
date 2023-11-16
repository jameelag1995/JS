function makeAllCaps(wordsArr) {
    const capsArr = []
    return new Promise((resolve, reject) => {
        for (word of wordsArr) {
            if (typeof word === "string") {
                capsArr.push(word.toUpperCase());
            }else{
                reject('not all elements are strings');
            }
        }
        resolve(capsArr);
    });
}

function sortWords(wordsArr){
    return wordsArr.sort();
}


const words =['abcd','efgh',1];

makeAllCaps(words)
.then((capsArr)=>{console.log(sortWords(capsArr));})
.catch(err => console.log(err))



// const wordsArr = ['abc','adbe'];
// for (word of wordsArr) {
//     if (typeof word === "string") {
//         word.toUpperCase();
//     }
// }

// console.log(wordsArr);