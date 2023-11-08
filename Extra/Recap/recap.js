let movies = [
    {
      id: 1,
      title: "The Shawshank Redemption",
      genre: "Drama",
      director: "Frank Darabont",
      releaseYear: 1994,
      rating: 9.3,
      votes: 2345890,
      cover: "https://m.media-amazon.com/images/I/51rXi2SXCXL._AC_UF894,1000_QL80_.jpg"
    },
    {
      id: 2,
      title: "The Godfather",
      genre: "Crime, Drama",
      director: "Francis Ford Coppola",
      releaseYear: 1972,
      rating: 9.2,
      votes: 1620360,
      cover: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
    },
    {
      id: 3,
      title: "The Godfather: Part II",
      genre: "Crime, Drama",
      director: "Francis Ford Coppola",
      releaseYear: 1974,
      rating: 9.0,
      votes: 1133175,
      cover: "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
    },
    {
      id: 4,
      title: "The Dark Knight",
      genre: "Action, Crime, Drama",
      director: "Christopher Nolan",
      releaseYear: 2008,
      rating: 9.0,
      votes: 2303232,
      cover: "https://musicart.xboxlive.com/7/abb02f00-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080"
    },
    {
      id: 5,
      title: "12 Angry Men",
      genre: "Crime, Drama",
      director: "Sidney Lumet",
      releaseYear: 1957,
      rating: 9.0,
      votes: 689845,
      cover: "https://ih1.redbubble.net/image.1856219220.0238/flat,750x,075,f-pad,750x1000,f8f8f8.jpg"
    },
  ];

function getMovieInitials(title) {
    let titleArr = title.split(" ");
    let initials = "";
    for (word of titleArr) {
        initials += word[0].toUpperCase();
    }
    return initials;
}
console.log("Movie Initials:", getMovieInitials("the dark knight"));

function splitGenres(genres) {
    return genres.split(", ");
}
console.log("Split Genres:", splitGenres("Action, Adventure, Sci-Fi"));

const getTotalMovieLength = (movies) => {
    let totalLength = 0;
    for (let i = 0; i < movies.length; i++) {
        totalLength += movies[i].length;
    }
    return "Total movie length is " + totalLength + " minutes";
};

function DisplayMovieTitles(moviesArr) {
    const titles = [];
    moviesArr.forEach((movie) => {
        titles.push(movie.title);
    });
    return titles;
}
console.log("Movies List:", DisplayMovieTitles(movies));
function highlyRatedMovies(moviesArr, minRating) {
    return moviesArr.filter((movie) => movie.rating > minRating);
}

console.log("Highly Rated Movies:", highlyRatedMovies(movies, 9.1));

function averageMovieRating(moviesArr) {
    let sum = 0;
    moviesArr.forEach((movie) => (sum += movie.rating));
    return (avg = sum / moviesArr.length);
}
console.log("Rating Average:", averageMovieRating(movies));

function sortMoviesByVotes(moviesArr) {
    return moviesArr.sort((a, b) => b.votes - a.votes);
}
console.log("Movies Sorted by Votes", sortMoviesByVotes(movies));

const movieDatabase = {
    movies: [],
    addMovie: function (movieTitle) {
        this.movies.push({
            title: movieTitle.toUpperCase(),
            ratings: [],
            averageRating: 0,
        });
    },
    removeMovie: function (movieTitle) {
        this.movies = this.movies.filter(
            (movie) => movie.title !== movieTitle.toUpperCase()
        );
    },
    addRating: function (movieTitle, rating) {
        const movie = this.movies.find(
            (movie) => movie.title === movieTitle.toUpperCase()
        );
        if (movie) {
            movie.ratings.push(rating);
        }
    },
    removeRating: function (movieTitle, rating) {
        const movie = this.movies.find(
            (movie) => movie.title === movieTitle.toUpperCase()
        );
        if (movie) {
            movie.ratings = movie.ratings.filter((r) => r !== rating);
        }
    },
    searchMovie: function (str) {
        return this.movies.filter((movie) =>
            movie.title.includes(str.toUpperCase())
        );
    },
};
console.log("testing movies database");
movieDatabase.addMovie("Pulp Fiction");
movieDatabase.addMovie("Cast Away");
movieDatabase.removeMovie("Pulp Fiction");
console.log(movieDatabase.movies);
movieDatabase.addRating("cast away", 5.1);
movieDatabase.addRating("cast away", 5.3);
movieDatabase.addRating("cast away", 5.5);
console.log(movieDatabase.movies);
movieDatabase.removeRating("cast away", 5.3);
console.log(movieDatabase.movies);


function createMovieCard(){
    movies.forEach((movie) =>{
        let mainDiv = document.createElement('main');
        let movieInfoDiv = document.createElement('div');
        movieInfoDiv.classList.add('movie-info');
        let moviePosterDiv = document.createElement('div');
        moviePosterDiv.classList.add('movie-poster');
        let title = document.createElement('h1');
        title.innerText = movie.title;
        let genre = document.createElement('h3');
        genre.innerText = `Genre: ${movie.genre}`;
        let director = document.createElement('h3');
        director.innerText = `Director: ${movie.director}`;
        let releaseYear = document.createElement('h3');
        releaseYear.innerText = `Release Year: ${movie.releaseYear}`;
        let rating = document.createElement('h3');
        rating.innerText = `Rating: ${movie.rating}`;
        let votes = document.createElement('h3');
        votes.innerText = `Votes: ${movie.votes}`;
        let poster = document.createElement('img');
        poster.src = movie.cover;
        movieInfoDiv.append(title,genre,director,releaseYear,rating,votes);
        moviePosterDiv.append(poster);
        mainDiv.append(movieInfoDiv,moviePosterDiv);
        document.body.append(mainDiv);

    })
}
createMovieCard();