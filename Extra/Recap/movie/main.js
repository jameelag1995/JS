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
    },{
        id: 6,
        title: "Inception",
        genre: "Action, Adventure, Sci-Fi",
        director: "Christopher Nolan",
        releaseYear: 2010,
        rating: 8.8,
        votes: 2061234,
        cover: "https://www.movieposters.com/cdn/shop/products/20664117398ad7301d9a9af6d2e5aa5c_1e3ea98b-b962-4982-9f74-2e44381fc6ff_480x.progressive.jpg?v=1573618694",
      },
      {
        id: 7,
        title: "The Matrix",
        genre: "Action, Sci-Fi",
        director: "Lana Wachowski, Lilly Wachowski",
        releaseYear: 1999,
        rating: 8.7,
        votes: 1662448,
        cover: "https://www.movieposters.com/cdn/shop/products/ed4796ac6feff9d2a6115406f964c928_6b200bda-fe71-4900-ad7f-903cdda50dab_480x.progressive.jpg?v=1573587596",
      },
      {
        id: 8,
        title: "The Lord of the Rings: The Fellowship of the Ring",
        genre: "Action, Adventure, Drama",
        director: "Peter Jackson",
        releaseYear: 2001,
        rating: 8.8,
        votes: 1609156,
        cover: "https://www.movieposters.com/cdn/shop/products/8becb80335052bfa132019f1ec67b74f_3d38a4a9-dbc2-468e-bb9e-af0089168ba5_480x.progressive.jpg?v=1573588889",
      },
      {
        id: 9,
        title: "Forrest Gump",
        genre: "Drama, Romance",
        director: "Robert Zemeckis",
        releaseYear: 1994,
        rating: 8.8,
        votes: 1901369,
        cover: "https://www.movieposters.com/cdn/shop/products/forrest-gump---24x36_480x.progressive.jpg?v=1645558337",
      },
];

const movieList = document.querySelector(".movie-list");
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

movies.forEach((movie) => {
    createMovieCard(movie);
});

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const id = movies.length + 1;
    const title = document.querySelector("#title").value;
    const genre = document.querySelector("#genre").value;
    const director = document.querySelector("#director").value;
    const releaseYear = document.querySelector("#releaseyear").value;
    const rating = document.querySelector("#rating").value;
    const votes = document.querySelector("#votes").value;
    const cover = document.querySelector("#poster").value;

    const movie = {
        id,
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

function searchMovie(str) {
    return movies.filter((movie) =>
        movie.title.toLowerCase().includes(str.toLowerCase())
    );
}

const searchInput = document.querySelector("#search");
searchInput.addEventListener("keyup", (e) => {
    movieList.innerHTML = "";
    const searchedMovies = searchMovie(e.target.value);
    searchedMovies.forEach((movie) => {
        createMovieCard(movie);
    });
});

const sortAlpha = document.querySelector("#sort-alpha");
const sortRlsYear = document.querySelector("#sort-rlsyear");
const sortRating = document.querySelector("#sort-rating");

sortAlpha.addEventListener("click", (e) => {
    movieList.innerHTML = "";
    const sortedMovies = [...movies].sort((a, b) => {
        const titleA = a.title.toLowerCase();
        const titleB = b.title.toLowerCase();

        if (titleA < titleB) {
            return -1;
        }
        if (titleA > titleB) {
            return 1;
        }
        return 0;
    });
    sortedMovies.forEach((movie) => {
        createMovieCard(movie);
    });
});

sortRlsYear.addEventListener("click", (e) => {
    movieList.innerHTML = "";
    const sortedMovies = [...movies].sort((a, b) => {
        return a.releaseYear - b.releaseYear;
    });
    sortedMovies.forEach((movie) => {
        createMovieCard(movie);
    });
});

sortRating.addEventListener("click", (e) => {
    movieList.innerHTML = "";
    const sortedMovies = [...movies].sort((a, b) => {
        return b.rating - a.rating;
    });
    sortedMovies.forEach((movie) => {
        createMovieCard(movie);
    });
});
