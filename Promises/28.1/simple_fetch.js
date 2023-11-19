
const url = "https://api.chucknorris.io/jokes/random"

const fetchData = async(joke)=>{
    const response = await fetch(url)
    const result = await response.json()
    console.log(result.value);
    joke.innerText = result.value;
}



const btn = document.getElementById('fetch');
const joke = document.getElementById('joke');
btn.addEventListener('click',e => {
    fetchData(joke)
})