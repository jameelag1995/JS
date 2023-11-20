const key = 'f3ccfca7';

const movieInput = document.getElementById('movie');
const searchBtn = document.getElementById('search-btn');
const movieInfoDiv = document.getElementById('movie-info');
const url = `http://www.omdbapi.com/?i=tt3896198&apikey=f3ccfca7&t=`;
movieInput.addEventListener('keypress',e =>{
    if(e.key == 'Enter'){
        fetchUserData(movieInput.value);
    }
})

searchBtn.addEventListener('click',e =>{
    fetchUserData(movieInput.value);

})
const fetchUserData = async (movie) =>{
    try{
        console.log(movie);
        const response = await fetch(url + movie);
        console.log(response);
        if (!response.ok){
            throw new Error ('Error fetching user data');
        }
        const result = await response.json();
        console.log(result);
        showMovie(result);
    }
    catch(err){
        console.log(err);
    }
}

const showMovie = (movieInfo)=>{
    movieInfoDiv.innerHTML = '';
    const movieImg = document.createElement('img');
    movieImg.src = movieInfo.Poster;
    const movieName = document.createElement('h3');
    movieName.innerText = movieInfo.Title;
    const movieGenre = document.createElement('p');
    movieGenre.innerText = `Genre: ${movieInfo.Genre}`;
    const movieYear = document.createElement('p');
    movieYear.innerText = `Year: ${movieInfo.Year}`;
    const moviePlot = document.createElement('p');
    moviePlot.innerText = `Plot: ${movieInfo.Plot}`;
    const movieDirector = document.createElement('p');
    movieDirector.innerText = `Director: ${movieInfo.Director}`;
    const movieActors = document.createElement('p');
    movieActors.innerText = `Actors: ${movieInfo.Actors}`;
    const movieRatings = document.createElement('p');
    movieInfo.Ratings.forEach(rate =>{
        movieRatings.innerText += ` ${rate.Source}: ${rate.Value} |`;
    })
    movieInfoDiv.append(movieImg,movieName,movieGenre,movieYear,moviePlot,movieDirector,movieActors,movieRatings);
}