// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map((movie) => movie.director);
  // console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  const arrayDirector = array.filter((movie) => movie.director === director);
   //console.log("EXERCICE 2 -->", arrayDirector); 
  return arrayDirector;

}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const moviesDirector = getMoviesFromDirector(array, director);
  const averageMovies = moviesAverage(moviesDirector);
  return averageMovies;

}
function moviesAverage(array) {
  const averageMovies = array.reduce((acc, movie) => acc + movie.score, 0);
  return Number((averageMovies / array.length).toFixed(2));
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  const orderedAlphabetically = array.map((movie) => movie.title).sort().slice(0, 20);
  return orderedAlphabetically;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {

  const orderedByYear = [...array].sort((a, b) => {
    if (a.year === b.year) { a.title > b.title ? 1 : -1 };
    return a.year > b.year ? 1 : -1;

  })

  return orderedByYear;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {

  const moviesGenre = array.filter((movie) => movie.genre.find(genreMovie => genreMovie === genre) && movie.score !== "");
  const moviesGenreAverage = moviesAverage(moviesGenre);
  return moviesGenreAverage;

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  const arrayDurationInMinuts = array.map((movies) => ({ ...movies }));
  arrayDurationInMinuts.forEach((movie) => {
    let duration = movie.duration;
    let hours = Number(duration.match(/\d+(?=h)/g));
    let minutes = Number(duration.match(/\d+(?=min)/g));
    let totalMinutes = Number(hours * 60 + minutes);
    movie.duration = totalMinutes;
  });
  return arrayDurationInMinuts;

}


// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  const bestFilmOfYear = [...array].filter((movie) => movie.year === year).sort((a, b) => b.score - a.score).slice(0, 1);
  return bestFilmOfYear;

}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
