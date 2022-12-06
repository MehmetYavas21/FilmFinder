// Latest Movies since 2014

const latestMovies2014 = movies.filter((item) => {
    return item.year >= 2014;
});
console.log('latest movies since 2014: ' , latestMovies2014);
console.log(latestMovies2014.length);
console.log(latestMovies2014[0].title);

const clickLatestMovie = document.querySelector('#first-radio-button');
// for(i=0; i<clickLatestMovie.length; i++){
//     console.log(clickLatestMovie[i]);
// };

clickLatestMovie.addEventListener('change' , function(e){
const latestMovies20141 = latestMovies2014.find((item) => {
    const newLiForLastMovies = document.createElement('li');
    newLiForLastMovies.classList.add('latest-movies-since-2014')
    const latestMoviesPoster = document.createElement('img');
    const newMovieParent = document.getElementById('movies').getElementsByTagName('ul')[0];
    const added = newMovieParent.appendChild(newLiForLastMovies);
    newLiForLastMovies.appendChild(latestMoviesPoster);
    latestMoviesPoster.src="https://m.media-amazon.com/images/M/MV5BZGIzNWYzN2YtMjcwYS00YjQ3LWI2NjMtOTNiYTUyYjE2MGNkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg";
    return added;
});
// trying to redirect from site to IMDB page




const latestMovies20142 = latestMovies2014.find((item) => {
    const newLiForLastMovies = document.createElement('li');
    newLiForLastMovies.classList.add('latest-movies-since-2014')
    const latestMoviesPoster = document.createElement('img');
    const newMovieParent = document.getElementById('movies').getElementsByTagName('ul')[0];
    const added = newMovieParent.appendChild(newLiForLastMovies);
    newLiForLastMovies.appendChild(latestMoviesPoster);
    latestMoviesPoster.src='https://m.media-amazon.com/images/M/MV5BMjU1ODM1MzYxN15BMl5BanBnXkFtZTgwOTA4NDE2ODE@._V1_SX300.jpg';
    return added;
});

const latestMovies20143 = latestMovies2014.find((item) => {
    const newLiForLastMovies = document.createElement('li');
    newLiForLastMovies.classList.add('latest-movies-since-2014')
    const latestMoviesPoster = document.createElement('img');
    const newMovieParent = document.getElementById('movies').getElementsByTagName('ul')[0];
    const added = newMovieParent.appendChild(newLiForLastMovies);
    newLiForLastMovies.appendChild(latestMoviesPoster);
    latestMoviesPoster.src='https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg';
    return added;
});

const latestMovies20144 = latestMovies2014.find((item) => {
    const newLiForLastMovies = document.createElement('li');
    newLiForLastMovies.classList.add('latest-movies-since-2014')
    const latestMoviesPoster = document.createElement('img');
    const newMovieParent = document.getElementById('movies').getElementsByTagName('ul')[0];
    const added = newMovieParent.appendChild(newLiForLastMovies);
    newLiForLastMovies.appendChild(latestMoviesPoster);
    latestMoviesPoster.src='https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg';
    return added;
});

const latestMovies20145 = latestMovies2014.find((item) => {
    const newLiForLastMovies = document.createElement('li');
    newLiForLastMovies.classList.add('latest-movies-since-2014')
    const latestMoviesPoster = document.createElement('img');
    const newMovieParent = document.getElementById('movies').getElementsByTagName('ul')[0];
    const added = newMovieParent.appendChild(newLiForLastMovies);
    newLiForLastMovies.appendChild(latestMoviesPoster);
    latestMoviesPoster.src='https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg';
    return added;
});

const latestMovies20146 = latestMovies2014.find((item) => {
    const newLiForLastMovies = document.createElement('li');
    newLiForLastMovies.classList.add('latest-movies-since-2014')
    const latestMoviesPoster = document.createElement('img');
    const newMovieParent = document.getElementById('movies').getElementsByTagName('ul')[0];
    const added = newMovieParent.appendChild(newLiForLastMovies);
    newLiForLastMovies.appendChild(latestMoviesPoster);
    latestMoviesPoster.src='https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg';
    return added;
});

const latestMovies20147 = latestMovies2014.find((item) => {
    const newLiForLastMovies = document.createElement('li');
    newLiForLastMovies.classList.add('latest-movies-since-2014')
    const latestMoviesPoster = document.createElement('img');
    const newMovieParent = document.getElementById('movies').getElementsByTagName('ul')[0];
    const added = newMovieParent.appendChild(newLiForLastMovies);
    newLiForLastMovies.appendChild(latestMoviesPoster);
    latestMoviesPoster.src='https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg';
    return added;
});
});

//Avengers Movies

const avengersMovie = movies.filter(movie => {
    const includeAvenger = movie.title.includes("Avenger"); 
    return includeAvenger;
}); 
console.log('Avengers Movies: ' , avengersMovie);
console.log(avengersMovie.length);
console.log(avengersMovie[0].title);

const clickAvengersMovie = document.querySelector('#second-radio-button');
// for(i=0; i<clickAvengersMovie.length; i++){
//     console.log(clickAvengersMovie[i]);
// };

clickAvengersMovie.addEventListener('change' , function(e){
const avengersMovie1 = avengersMovie.find((item) => {
    const newLiForAvengersMovie = document.createElement('li');
    newLiForAvengersMovie.classList.add('avenger-movies')
    const avengersMoviePoster = document.createElement('img');
    const avengersMovieParent = document.getElementById('movies').getElementsByTagName('ul')[0];
    const added = avengersMovieParent.appendChild(newLiForAvengersMovie);
    newLiForAvengersMovie.appendChild(avengersMoviePoster);
    avengersMoviePoster.src="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg";
    return added;
});
const avengersMovie2 = avengersMovie.find((item) => {
    const newLiForAvengersMovie = document.createElement('li');
    newLiForAvengersMovie.classList.add('avenger-movies')
    const avengersMoviePoster = document.createElement('img');
    const avengersMovieParent = document.getElementById('movies').getElementsByTagName('ul')[0];
    const added = avengersMovieParent.appendChild(newLiForAvengersMovie);
    newLiForAvengersMovie.appendChild(avengersMoviePoster);
    avengersMoviePoster.src="https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg";
    return added;
});
const avengersMovie3 = avengersMovie.find((item) => {
    const newLiForAvengersMovie = document.createElement('li');
    newLiForAvengersMovie.classList.add('avenger-movies')
    const avengersMoviePoster = document.createElement('img');
    const avengersMovieParent = document.getElementById('movies').getElementsByTagName('ul')[0];
    const added = avengersMovieParent.appendChild(newLiForAvengersMovie);
    newLiForAvengersMovie.appendChild(avengersMoviePoster);
    avengersMoviePoster.src="https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg";
    return added;
});
const avengersMovie4 = avengersMovie.find((item) => {
    const newLiForAvengersMovie = document.createElement('li');
    newLiForAvengersMovie.classList.add('avenger-movies')
    const avengersMoviePoster = document.createElement('img');
    const avengersMovieParent = document.getElementById('movies').getElementsByTagName('ul')[0];
    const added = avengersMovieParent.appendChild(newLiForAvengersMovie);
    newLiForAvengersMovie.appendChild(avengersMoviePoster);
    avengersMoviePoster.src="https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg";
    return added;
});
const avengersMovie5 = avengersMovie.find((item) => {
    const newLiForAvengersMovie = document.createElement('li');
    newLiForAvengersMovie.classList.add('avenger-movies')
    const avengersMoviePoster = document.createElement('img');
    const avengersMovieParent = document.getElementById('movies').getElementsByTagName('ul')[0];
    const added = avengersMovieParent.appendChild(newLiForAvengersMovie);
    newLiForAvengersMovie.appendChild(avengersMoviePoster);
    avengersMoviePoster.src="https://m.media-amazon.com/images/M/MV5BYWE1NTdjOWQtYTQ2Ny00Nzc5LWExYzMtNmRlOThmOTE2N2I4XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg";
    return added;
});
const avengersMovie6 = avengersMovie.find((item) => {
    const newLiForAvengersMovie = document.createElement('li');
    newLiForAvengersMovie.classList.add('avenger-movies')
    const avengersMoviePoster = document.createElement('img');
    const avengersMovieParent = document.getElementById('movies').getElementsByTagName('ul')[0];
    const added = avengersMovieParent.appendChild(newLiForAvengersMovie);
    newLiForAvengersMovie.appendChild(avengersMoviePoster);
    avengersMoviePoster.src="https://m.media-amazon.com/images/M/MV5BYzA4ZjVhYzctZmI0NC00ZmIxLWFmYTgtOGIxMDYxODhmMGQ2XkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg";
    return added;
});
const avengersMovie7 = avengersMovie.find((item) => {
    const newLiForAvengersMovie = document.createElement('li');
    newLiForAvengersMovie.classList.add('avenger-movies')
    const avengersMoviePoster = document.createElement('img');
    const avengersMovieParent = document.getElementById('movies').getElementsByTagName('ul')[0];
    const added = avengersMovieParent.appendChild(newLiForAvengersMovie);
    newLiForAvengersMovie.appendChild(avengersMoviePoster);
    avengersMoviePoster.src="https://m.media-amazon.com/images/M/MV5BNDFmZTkxMjktMzRiYS00YzMwLWFhZDctOTQ2N2NlOTAyZDJhXkEyXkFqcGdeQXVyNjgzNDU2ODI@._V1_SX300.jpg";
    return added;
});
const avengersMovie8 = avengersMovie.find((item) => {
    const newLiForAvengersMovie = document.createElement('li');
    newLiForAvengersMovie.classList.add('avenger-movies')
    const avengersMoviePoster = document.createElement('img');
    const avengersMovieParent = document.getElementById('movies').getElementsByTagName('ul')[0];
    const added = avengersMovieParent.appendChild(newLiForAvengersMovie);
    newLiForAvengersMovie.appendChild(avengersMoviePoster);
    avengersMoviePoster.src="https://m.media-amazon.com/images/M/MV5BZjI3MTI5ZTYtZmNmNy00OGZmLTlhNWMtNjZiYmYzNDhlOGRkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg";
    return added;
});
const avengersMovie9 = avengersMovie.find((item) => {
    const newLiForAvengersMovie = document.createElement('li');
    newLiForAvengersMovie.classList.add('avenger-movies')
    const avengersMoviePoster = document.createElement('img');
    const avengersMovieParent = document.getElementById('movies').getElementsByTagName('ul')[0];
    const added = avengersMovieParent.appendChild(newLiForAvengersMovie);
    newLiForAvengersMovie.appendChild(avengersMoviePoster);
    avengersMoviePoster.src="https://m.media-amazon.com/images/M/MV5BZWI4ZWM4ZWQtODk1ZC00MzMxLThlZmMtOGFmMTYxZTAwYjc5XkEyXkFqcGdeQXVyMTk0MjQ3Nzk@._V1_SX300.jpg";
    return added;
});
});

//X-Men Movies

const XMenMovie = movies.filter(movie => {
    const includeXMen = movie.title.includes("X-Men"); 
    return includeXMen;
}); 
console.log('X-Men Movies: ' , XMenMovie);
console.log(XMenMovie.length);
console.log(XMenMovie[5].title);



const clickXMenMovie = document.querySelector('#third-radio-button');
// for(i=0; i<clickXMenMovie.length; i++){
//     console.log(clickXMenMovie[i]);
// };

clickXMenMovie.addEventListener('change' , function(e){
const clickXMenMovie1 = XMenMovie.find((item) => {
    const newLiForclickXMenMovie = document.createElement('li');
    newLiForclickXMenMovie.classList.add('xMen-movies');
    const xMenMoviePoster = document.createElement('img');
    const xMenMovieParent = document.getElementById('movies').getElementsByTagName('ul')[0];
    const added = xMenMovieParent.appendChild(newLiForclickXMenMovie);
    newLiForclickXMenMovie.appendChild(xMenMoviePoster);
    xMenMoviePoster.src="https://m.media-amazon.com/images/M/MV5BZGIzNWYzN2YtMjcwYS00YjQ3LWI2NjMtOTNiYTUyYjE2MGNkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg";
    return added;
});
const clickXMenMovie2 = XMenMovie.find((item) => {
    const newLiForclickXMenMovie = document.createElement('li');
    newLiForclickXMenMovie.classList.add('xMen-movies');
    const xMenMoviePoster = document.createElement('img');
    const xMenMovieParent = document.getElementById('movies').getElementsByTagName('ul')[0];
    const added = xMenMovieParent.appendChild(newLiForclickXMenMovie);
    newLiForclickXMenMovie.appendChild(xMenMoviePoster);
    xMenMoviePoster.src="https://m.media-amazon.com/images/M/MV5BMTg5OTMxNzk4Nl5BMl5BanBnXkFtZTcwOTk1MjAwNQ@@._V1_SX300.jpg";
    return added;

});
const clickXMenMovie3 = XMenMovie.find((item) => {
    const newLiForclickXMenMovie = document.createElement('li');
    newLiForclickXMenMovie.classList.add('xMen-movies');
    const xMenMoviePoster = document.createElement('img');
    const xMenMovieParent = document.getElementById('movies').getElementsByTagName('ul')[0];
    const added = xMenMovieParent.appendChild(newLiForclickXMenMovie);
    newLiForclickXMenMovie.appendChild(xMenMoviePoster);
    xMenMoviePoster.src="https://m.media-amazon.com/images/M/MV5BZmIyMDk5NGYtYjQ5NS00ZWQxLTg2YzQtZDk1ZmM4ZDBlN2E3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg";
    return added;
});
const clickXMenMovie4 = XMenMovie.find((item) => {
    const newLiForclickXMenMovie = document.createElement('li');
    newLiForclickXMenMovie.classList.add('xMen-movies');
    const xMenMoviePoster = document.createElement('img');
    const xMenMovieParent = document.getElementById('movies').getElementsByTagName('ul')[0];
    const added = xMenMovieParent.appendChild(newLiForclickXMenMovie);
    newLiForclickXMenMovie.appendChild(xMenMoviePoster);
    xMenMoviePoster.src="https://m.media-amazon.com/images/M/MV5BNDk0NjYxMzIzOF5BMl5BanBnXkFtZTYwMTc1MjU3._V1_SX300.jpg";
    return added;
});
const clickXMenMovie5 = XMenMovie.find((item) => {
    const newLiForclickXMenMovie = document.createElement('li');
    newLiForclickXMenMovie.classList.add('xMen-movies');
    const xMenMoviePoster = document.createElement('img');
    const xMenMovieParent = document.getElementById('movies').getElementsByTagName('ul')[0];
    const added = xMenMovieParent.appendChild(newLiForclickXMenMovie);
    newLiForclickXMenMovie.appendChild(xMenMoviePoster);
    xMenMoviePoster.src="https://m.media-amazon.com/images/M/MV5BNDBhNDJiMWEtOTg4Yi00NTYzLWEzOGMtMjNmNjAxNTBlMzY3XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg";    
    return added;
});
const clickXMenMovie6 = XMenMovie.find((item) => {
    const newLiForclickXMenMovie = document.createElement('li');
    newLiForclickXMenMovie.classList.add('xMen-movies');
    const xMenMoviePoster = document.createElement('img');
    const xMenMovieParent = document.getElementById('movies').getElementsByTagName('ul')[0];
    const added = xMenMovieParent.appendChild(newLiForclickXMenMovie);
    newLiForclickXMenMovie.appendChild(xMenMoviePoster);
    xMenMoviePoster.src="https://m.media-amazon.com/images/M/MV5BZWRhMzdhMzEtZTViNy00YWYyLTgxZmUtMTMwMWM0NTEyMjk3XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg";
    return added;
});
const clickXMenMovie7 = XMenMovie.find((item) => {
    const newLiForclickXMenMovie = document.createElement('li');
    newLiForclickXMenMovie.classList.add('xMen-movies');
    const xMenMoviePoster = document.createElement('img');
    const xMenMovieParent = document.getElementById('movies').getElementsByTagName('ul')[0];
    const added = xMenMovieParent.appendChild(newLiForclickXMenMovie);
    newLiForclickXMenMovie.appendChild(xMenMoviePoster);
    xMenMoviePoster.src="https://m.media-amazon.com/images/M/MV5BMjU1ODM1MzYxN15BMl5BanBnXkFtZTgwOTA4NDE2ODE@._V1_SX300.jpg";
    return added;
});
const clickXMenMovie8 = XMenMovie.find((item) => {
    const newLiForclickXMenMovie = document.createElement('li');
    newLiForclickXMenMovie.classList.add('xMen-movies');
    const xMenMoviePoster = document.createElement('img');
    const xMenMovieParent = document.getElementById('movies').getElementsByTagName('ul')[0];
    const added = xMenMovieParent.appendChild(newLiForclickXMenMovie);
    newLiForclickXMenMovie.appendChild(xMenMoviePoster);
    xMenMoviePoster.src="https://m.media-amazon.com/images/M/MV5BNTVjNmEwNTMtNmQ2ZC00MGJkLWI3MDgtNzMyNTc4YjVkNTQ1L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg";
    return added;
});
const clickXMenMovie9 = XMenMovie.find((item) => {
    const newLiForclickXMenMovie = document.createElement('li');
    newLiForclickXMenMovie.classList.add('xMen-movies');
    const xMenMoviePoster = document.createElement('img');
    const xMenMovieParent = document.getElementById('movies').getElementsByTagName('ul')[0];
    const added = xMenMovieParent.appendChild(newLiForclickXMenMovie);
    newLiForclickXMenMovie.appendChild(xMenMoviePoster);
    xMenMoviePoster.src="https://m.media-amazon.com/images/M/MV5BOWMyMThhN2UtMGMzYi00ODVmLWFlODItYmZlMzMxYzE3MmZkXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_SX300.jpg";
    return added;
});
const clickXMenMovie10 = XMenMovie.find((item) => {
    const newLiForclickXMenMovie = document.createElement('li');
    newLiForclickXMenMovie.classList.add('xMen-movies');
    const xMenMoviePoster = document.createElement('img');
    const xMenMovieParent = document.getElementById('movies').getElementsByTagName('ul')[0];
    const added = xMenMovieParent.appendChild(newLiForclickXMenMovie);
    newLiForclickXMenMovie.appendChild(xMenMoviePoster);
    xMenMoviePoster.src="https://m.media-amazon.com/images/M/MV5BNzk4Nzg3NjMyMV5BMl5BanBnXkFtZTcwMjk3MjU0Mg@@._V1_SX300.jpg";
    return added;
});
});

// Princess Movies

const princessMovie = movies.filter(movie => {
    const includePrincess = movie.title.includes("Princess"); 
    return includePrincess;
}); 
console.log('Princess Movies: ' , princessMovie);
console.log(princessMovie.length);
console.log(princessMovie[0].title);


const clickPrincessMovie = document.querySelector('#fourth-radio-button');
// for(i=0; i<clickPrincessMovie.length; i++){
//     console.log(clickPrincessMovie[i]);
// };

clickPrincessMovie.addEventListener('change' , function(e){
const clickPrincessMovie1 = princessMovie.find((item) => {
    const newLiForclickPrincessMovie = document.createElement('li');
    newLiForclickPrincessMovie.classList.add('princess-movies')
    const princessMoviePoster = document.createElement('img');
    const princessMovieParent = document.getElementById('movies').getElementsByTagName('ul')[0];
    const added = princessMovieParent.appendChild(newLiForclickPrincessMovie);
    newLiForclickPrincessMovie.appendChild(princessMoviePoster);
    princessMoviePoster.src= "https://m.media-amazon.com/images/M/MV5BMGM4M2Q5N2MtNThkZS00NTc1LTk1NTItNWEyZjJjNDRmNDk5XkEyXkFqcGdeQXVyMjA0MDQ0Mjc@._V1_SX300.jpg";
    return added;
});
const clickPrincessMovie2 = princessMovie.find((item) => {
    const newLiForclickPrincessMovie = document.createElement('li');
    newLiForclickPrincessMovie.classList.add('princess-movies')
    const princessMoviePoster = document.createElement('img');
    const princessMovieParent = document.getElementById('movies').getElementsByTagName('ul')[0];
    const added = princessMovieParent.appendChild(newLiForclickPrincessMovie);
    newLiForclickPrincessMovie.appendChild(princessMoviePoster);
    princessMoviePoster.src= "https://m.media-amazon.com/images/M/MV5BMTVlNWM4NTAtNDQxYi00YWU5LWIwM2MtZmVjYWFmODZiODE5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg";
    return added;
});
const clickPrincessMovie3 = princessMovie.find((item) => {
    const newLiForclickPrincessMovie = document.createElement('li');
    newLiForclickPrincessMovie.classList.add('princess-movies')
    const princessMoviePoster = document.createElement('img');
    const princessMovieParent = document.getElementById('movies').getElementsByTagName('ul')[0];
    const added = princessMovieParent.appendChild(newLiForclickPrincessMovie);
    newLiForclickPrincessMovie.appendChild(princessMoviePoster);
    princessMoviePoster.src= "https://m.media-amazon.com/images/M/MV5BMzcwYjEwMzEtZTZmMi00ZGFhLWJhZjItMDAzNDVkNjZmM2U5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg";
    return added;
});
const clickPrincessMovie4 = princessMovie.find((item) => {
    const newLiForclickPrincessMovie = document.createElement('li');
    newLiForclickPrincessMovie.classList.add('princess-movies')
    const princessMoviePoster = document.createElement('img');
    const princessMovieParent = document.getElementById('movies').getElementsByTagName('ul')[0];
    const added = princessMovieParent.appendChild(newLiForclickPrincessMovie);
    newLiForclickPrincessMovie.appendChild(princessMoviePoster);
    princessMoviePoster.src= "https://m.media-amazon.com/images/M/MV5BMjEyOTQ5NzAzNl5BMl5BanBnXkFtZTcwMTcyNTU1Mg@@._V1_SX300.jpg";
    return added;
});
const clickPrincessMovie5 = princessMovie.find((item) => {
    const newLiForclickPrincessMovie = document.createElement('li');
    newLiForclickPrincessMovie.classList.add('princess-movies')
    const princessMoviePoster = document.createElement('img');
    const princessMovieParent = document.getElementById('movies').getElementsByTagName('ul')[0];
    const added = princessMovieParent.appendChild(newLiForclickPrincessMovie);
    newLiForclickPrincessMovie.appendChild(princessMoviePoster);
    princessMoviePoster.src="https://m.media-amazon.com/images/M/MV5BODljNTU2ZGMtMWI5Yy00MGNkLTg2MTktN2NhZjY0NDcwMDhiL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" ;
    return added;
});
const clickPrincessMovie6 = princessMovie.find((item) => {
    const newLiForclickPrincessMovie = document.createElement('li');
    newLiForclickPrincessMovie.classList.add('princess-movies')
    const princessMoviePoster = document.createElement('img');
    const princessMovieParent = document.getElementById('movies').getElementsByTagName('ul')[0];
    const added = princessMovieParent.appendChild(newLiForclickPrincessMovie);
    newLiForclickPrincessMovie.appendChild(princessMoviePoster);
    princessMoviePoster.src= "https://m.media-amazon.com/images/M/MV5BOTdkYjA4YzAtMjNiZS00OTgyLTg5Y2ItNGIwZGQyMTUzNzFiXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg";
    return added;
});
});

//Batman Movies

const batmanMovie = movies.filter(movie => {
    const includeBatman = movie.title.includes("Batman"); 
    return includeBatman;
}); 
console.log('Batman Movies: ', batmanMovie);
console.log(batmanMovie.length);
console.log(batmanMovie[0].title);


const clickBatmanMovie = document.querySelector('#fifth-radio-button');
// for(i=0; i<clickBatmanMovie.length; i++){
//     console.log(clickBatmanMovie[i]);
// };
clickBatmanMovie.addEventListener('change' , function(e){
const clickBatmanMovie1 = batmanMovie.find((item) => {
    const newLiForclickBatmanMovie = document.createElement('li');
    newLiForclickBatmanMovie.classList.add('batman-movies')
    const batmanMoviePoster = document.createElement('img');
    const batmanMovieParent = document.getElementById('movies').getElementsByTagName('ul')[0];
    const added = batmanMovieParent.appendChild(newLiForclickBatmanMovie);
    newLiForclickBatmanMovie.appendChild(batmanMoviePoster);
    batmanMoviePoster.src= "https://m.media-amazon.com/images/M/MV5BZmUwNGU2ZmItMmRiNC00MjhlLTg5YWUtODMyNzkxODYzMmZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg";
    return added;
});
const clickBatmanMovie2 = batmanMovie.find((item) => {
    const newLiForclickBatmanMovie = document.createElement('li');
    newLiForclickBatmanMovie.classList.add('batman-movies')
    const batmanMoviePoster = document.createElement('img');
    const batmanMovieParent = document.getElementById('movies').getElementsByTagName('ul')[0];
    const added = batmanMovieParent.appendChild(newLiForclickBatmanMovie);
    newLiForclickBatmanMovie.appendChild(batmanMoviePoster);
    batmanMoviePoster.src= "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg";
    return added;
});
const clickBatmanMovie3 = batmanMovie.find((item) => {
    const newLiForclickBatmanMovie = document.createElement('li');
    newLiForclickBatmanMovie.classList.add('batman-movies')
    const batmanMoviePoster = document.createElement('img');
    const batmanMovieParent = document.getElementById('movies').getElementsByTagName('ul')[0];
    const added = batmanMovieParent.appendChild(newLiForclickBatmanMovie);
    newLiForclickBatmanMovie.appendChild(batmanMoviePoster);
    batmanMoviePoster.src= "https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg";
    return added;
});
const clickBatmanMovie4 = batmanMovie.find((item) => {
    const newLiForclickBatmanMovie = document.createElement('li');
    newLiForclickBatmanMovie.classList.add('batman-movies')
    const batmanMoviePoster = document.createElement('img');
    const batmanMovieParent = document.getElementById('movies').getElementsByTagName('ul')[0];
    const added = batmanMovieParent.appendChild(newLiForclickBatmanMovie);
    newLiForclickBatmanMovie.appendChild(batmanMoviePoster);
    batmanMoviePoster.src= "https://m.media-amazon.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_SX300.jpg";
    return added;
});
const clickBatmanMovie5 = batmanMovie.find((item) => {
    const newLiForclickBatmanMovie = document.createElement('li');
    newLiForclickBatmanMovie.classList.add('batman-movies')
    const batmanMoviePoster = document.createElement('img');
    const batmanMovieParent = document.getElementById('movies').getElementsByTagName('ul')[0];
    const added = batmanMovieParent.appendChild(newLiForclickBatmanMovie);
    newLiForclickBatmanMovie.appendChild(batmanMoviePoster);
    batmanMoviePoster.src= "https://m.media-amazon.com/images/M/MV5BNDdjYmFiYWEtYzBhZS00YTZkLWFlODgtY2I5MDE0NzZmMDljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg";
    return added;
});
const clickBatmanMovie6 = batmanMovie.find((item) => {
    const newLiForclickBatmanMovie = document.createElement('li');
    newLiForclickBatmanMovie.classList.add('batman-movies')
    const batmanMoviePoster = document.createElement('img');
    const batmanMovieParent = document.getElementById('movies').getElementsByTagName('ul')[0];
    const added = batmanMovieParent.appendChild(newLiForclickBatmanMovie);
    newLiForclickBatmanMovie.appendChild(batmanMoviePoster);
    batmanMoviePoster.src= "https://m.media-amazon.com/images/M/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_SX300.jpg";
    return added;
});
const clickBatmanMovie7 = batmanMovie.find((item) => {
    const newLiForclickBatmanMovie = document.createElement('li');
    newLiForclickBatmanMovie.classList.add('batman-movies')
    const batmanMoviePoster = document.createElement('img');
    const batmanMovieParent = document.getElementById('movies').getElementsByTagName('ul')[0];
    const added = batmanMovieParent.appendChild(newLiForclickBatmanMovie);
    newLiForclickBatmanMovie.appendChild(batmanMoviePoster);
    batmanMoviePoster.src= "https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg";
    return added;
});

const clickBatmanMovie8 = batmanMovie.find((item) => {
    const newLiForclickBatmanMovie = document.createElement('li');
    newLiForclickBatmanMovie.classList.add('batman-movies')
    const batmanMoviePoster = document.createElement('img');
    const batmanMovieParent = document.getElementById('movies').getElementsByTagName('ul')[0];
    const added = batmanMovieParent.appendChild(newLiForclickBatmanMovie);
    newLiForclickBatmanMovie.appendChild(batmanMoviePoster);
    batmanMoviePoster.src= "https://m.media-amazon.com/images/M/MV5BOTM3MTRkZjQtYjBkMy00YWE1LTkxOTQtNDQyNGY0YjYzNzAzXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_SX300.jpg";
    return added;
});

const clickBatmanMovie9 = batmanMovie.find((item) => {
    const newLiForclickBatmanMovie = document.createElement('li');
    newLiForclickBatmanMovie.classList.add('batman-movies')
    const batmanMoviePoster = document.createElement('img');
    const batmanMovieParent = document.getElementById('movies').getElementsByTagName('ul')[0];
    const added = batmanMovieParent.appendChild(newLiForclickBatmanMovie);
    newLiForclickBatmanMovie.appendChild(batmanMoviePoster);
    batmanMoviePoster.src= "https://m.media-amazon.com/images/M/MV5BNmY4ZDZjY2UtOWFiYy00MjhjLThmMjctOTQ2NjYxZGRjYmNlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg";
    return added;
});
const clickBatmanMovie10 = batmanMovie.find((item) => {
    const newLiForclickBatmanMovie = document.createElement('li');
    newLiForclickBatmanMovie.classList.add('batman-movies')
    const batmanMoviePoster = document.createElement('img');
    const batmanMovieParent = document.getElementById('movies').getElementsByTagName('ul')[0];
    const added = batmanMovieParent.appendChild(newLiForclickBatmanMovie);
    newLiForclickBatmanMovie.appendChild(batmanMoviePoster);
    batmanMoviePoster.src= "https://m.media-amazon.com/images/M/MV5BMzIxMDkxNDM2M15BMl5BanBnXkFtZTcwMDA5ODY1OQ@@._V1_SX300.jpg";
    return added;
});
});

//


