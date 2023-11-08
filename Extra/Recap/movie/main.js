let movies = [
    {
        id: 1,
        title: "The Shawshank Redemption",
        genre: "Drama",
        director: "Frank Darabont",
        releaseYear: 1994,
        rating: 9.3,
        votes: 2345890,
        cover: "https://m.media-amazon.com/images/I/51rXi2SXCXL._AC_UF894,1000_QL80_.jpg",
    },
    {
        id: 2,
        title: "The Godfather",
        genre: "Crime, Drama",
        director: "Francis Ford Coppola",
        releaseYear: 1972,
        rating: 9.2,
        votes: 1620360,
        cover: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    },
    {
        id: 3,
        title: "The Godfather: Part II",
        genre: "Crime, Drama",
        director: "Francis Ford Coppola",
        releaseYear: 1974,
        rating: 9.0,
        votes: 1133175,
        cover: "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    },
    {
        id: 4,
        title: "The Dark Knight",
        genre: "Action, Crime, Drama",
        director: "Christopher Nolan",
        releaseYear: 2008,
        rating: 9.0,
        votes: 2303232,
        cover: "https://musicart.xboxlive.com/7/abb02f00-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080",
    },
    {
        id: 5,
        title: "12 Angry Men",
        genre: "Crime, Drama",
        director: "Sidney Lumet",
        releaseYear: 1957,
        rating: 9.0,
        votes: 689845,
        cover: "https://ih1.redbubble.net/image.1856219220.0238/flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
    },
];

const movieList = document.querySelector('.movie-list');
function createMovieCard(movie) {
    let mainDiv = document.createElement("main");
    let movieInfoDiv = document.createElement("div");
    movieInfoDiv.classList.add("movie-info");
    let moviePosterDiv = document.createElement("div");
    moviePosterDiv.classList.add("movie-poster");
    let title = document.createElement("h1");
    title.innerText = movie.title;
    let genre = document.createElement("h3");
    genre.innerText = `Genre: ${movie.genre}`;
    let director = document.createElement("h3");
    director.innerText = `Director: ${movie.director}`;
    let releaseYear = document.createElement("h3");
    releaseYear.innerText = `Release Year: ${movie.releaseYear}`;
    let rating = document.createElement("h3");
    rating.innerText = `Rating: ${movie.rating}`;
    let votes = document.createElement("h3");
    votes.innerText = `Votes: ${movie.votes}`;
    let poster = document.createElement("img");
    poster.src = movie.cover;
    movieInfoDiv.append(title, genre, director, releaseYear, rating, votes);
    moviePosterDiv.append(poster);
    mainDiv.append(movieInfoDiv, moviePosterDiv);
    movieList.append(mainDiv);
}

movies.forEach(movie =>{
    createMovieCard(movie);
})

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.querySelector("#title").value;
    const genre = document.querySelector("#genre").value;
    const director = document.querySelector("#director").value;
    const releaseYear = document.querySelector("#releaseyear").value;
    const rating = document.querySelector("#rating").value;
    const votes = document.querySelector("#votes").value;
    const cover = document.querySelector("#poster").value;

    const movie = {
        title,
        genre,
        director,
        releaseYear,
        rating,
        votes,
        cover,
    };
    movies.push(movie);
    createMovieCard(movie);
});
