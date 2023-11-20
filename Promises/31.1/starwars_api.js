const url = "https://swapi.dev/api/";

const fetchData = async () => {
    for (let index = 1; index <= 10; index++) {
        try {
            const response = await fetch(url + `people/${index}/`);
            console.log(response);
            if (!response.ok) {
                throw new Error(`problem with index: ${index}`);
            }
            const result = await response.json();
            const planetResponse = await fetch(result.homeworld);
        if (!planetResponse.ok) {
            throw new Error("planet url not found");
        }
        const planetResult = await planetResponse.json();
            showData(result,planetResult);
        } catch (error) {
            console.log(error);
        }
    }
};



const table = document.getElementById("table");
const showData = (result,planetResult) => {
    const row = document.createElement("tr");
    const name = document.createElement("td");
    name.innerText = result.name;
    const height = document.createElement("td");
    height.innerText = result.height;
    const hairColor = document.createElement("td");
    hairColor.innerText = result.hair_color;
    const homePlanet = document.createElement("td");
    homePlanet.innerText = planetResult.name;
    const planetPopulation = document.createElement("td");
    planetPopulation.innerText = planetResult.population;
    row.append(name, height, hairColor,homePlanet,planetPopulation);

    table.append(row);
};
fetchData();
