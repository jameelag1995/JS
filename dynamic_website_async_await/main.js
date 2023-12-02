const url = "https://65676a1d64fcff8d73105558.mockapi.io/api/v1/dogs";
const fetchData = async()=>{
    try {
        const response = await fetch(url);
        if(!response.ok){
            throw new Error('problem with fetching data');
        }
        const result = await response.json();
        console.log(result);
        result.forEach(dog =>{
            let dogCard = document.createElement('div');
            dogCard.innerHTML = `<img src=${dog.img} />
            <h2>${dog.name}</h2>
            <h3>Dog Type: ${dog.type}</h3>`;
            dogCard.classList.add('card');
            document.body.append(dogCard);
        })

    } catch (error) {
        console.log("error",error);
    }
    
}

fetchData();