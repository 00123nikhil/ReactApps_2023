import Header from "./Header";
import Movie from "./Movie";
import Movies from "./Movie.json";
import "./MovieApp.css";

const MovieApp = () => {
  return (
    <>
      <div className="App">
        <Header />
      </div>
      <div className="main">
        {Movies.map((ele, index) => {
          return (
            <Movie
              key={index}
              Title={ele.Title}
              Year={ele.Year}
              Poster={ele.Poster}
            />
          );
        })}
      </div>
    </>
  );
};

export default MovieApp;
