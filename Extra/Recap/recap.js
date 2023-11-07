let movies = [
    {
        id: 1,
        title: "The Shawshank Redemption",
        genre: "Drama",
        director: "Frank Darabont",
        releaseYear: 1994,
        rating: 9.3,
        votes: 2345890,
    },
    {
        id: 2,
        title: "The Godfather",
        genre: "Crime, Drama",
        director: "Francis Ford Coppola",
        releaseYear: 1972,
        rating: 9.2,
        votes: 1620360,
    },
    {
        id: 3,
        title: "The Godfather: Part II",
        genre: "Crime, Drama",
        director: "Francis Ford Coppola",
        releaseYear: 1974,
        rating: 9.0,
        votes: 1133175,
    },
    {
        id: 4,
        title: "The Dark Knight",
        genre: "Action, Crime, Drama",
        director: "Christopher Nolan",
        releaseYear: 2008,
        rating: 9.0,
        votes: 2303232,
    },
    {
        id: 5,
        title: "12 Angry Men",
        genre: "Crime, Drama",
        director: "Sidney Lumet",
        releaseYear: 1957,
        rating: 9.0,
        votes: 689845,
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
        let index = 0;
        for (let i = 0; i < this.movies.length; i++) {
            if (this.movies[i].title === movieTitle.toUpperCase()) {
                index = i;
                break;
            }
        }
        this.movies.splice(index, 1);
    },
    addRating: function (movieTitle, rating) {
        for (movie of this.movies) {
            if (movieTitle.toUpperCase() === movie.title) {
                movie.ratings.push(rating);
            }
        }
    },
    removeRating: function (movieTitle, rating) {
        let index = 0;
        for (movie of this.movies) {
            if (movieTitle.toUpperCase() === movie.title) {
                for (let i = 0; i < movie.ratings.length; i++) {
                    if (movie.ratings[i] == rating) {
                        index = i;
                    }
                }
                movie.ratings.splice(index, 1);
            }
        }
    },
    searchMovie: function (str) {
        return this.movies.filter((movie) =>
            movie.title.includes(str.toUpperCase())
        );
    },
};

movieDatabase.addMovie("Pulp Fiction");
movieDatabase.addMovie("Cast Away");
console.log(movieDatabase.movies);
movieDatabase.removeMovie("Pulp Fiction");
movieDatabase.addRating("cast away", 5.1);
movieDatabase.addRating("cast away", 5.3);
movieDatabase.addRating("cast away", 5.5);
console.log(movieDatabase.movies);
movieDatabase.removeRating("cast away", 5.3);
console.log(movieDatabase.movies);
