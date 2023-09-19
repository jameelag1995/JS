function remove_duplicates(arr){
    return arr.filter((number,index) => arr.indexOf(number) === index);
}
let arr =[4,3,2,1,4,5,6,5,3,1];
console.log(arr);
console.log(remove_duplicates(arr));