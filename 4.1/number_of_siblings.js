let numSiblings = prompt("How many siblings do you have?")
numSiblings = parseInt(numSiblings)
if ( numSiblings === 1 ){
    console.log('1 sibling');
}
else if (numSiblings > 1){
    console.log('More than 1 sibling');
}
else {
    console.log('No siblings');
}

// 6. when changing to '===' and the numsiblings is 1 the type is different because it is a string so it doesn't go in side the if condition instead we can use parseint to convet the number to int then we a have meet the requirements for the value and the type
// 8. because that way we can be sure of the type of the input the user specified
