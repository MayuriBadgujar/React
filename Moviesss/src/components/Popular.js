import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Popular = () => {
  
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  // https://api.themoviedb.org/3/movie/popular?api_key=${Api_key}&language=en-US&page=1
  const Api_key = "c45a857c193f6302f2b5061c3b85e743";
  
  const fetchPopularMovies = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${Api_key}&language=en-US&page=${page}`
      )
      .then((response) => {
        console.log(response.data.results);
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    fetchPopularMovies();
},[])

  return (
    <>
      <div className="container">
        <div className="row">
          {movies &&
            movies.length > 0 &&
            movies.map((movie) => {
              return (
                <div className="col-xl-3">
                  <img
                    src={`https://image.tmdb.org/t/p/w500{movies.poster_path}`}
                    alt=""
                    className="img-fluid"
                  />
                  <h4>{movie.title}</h4>
                  <p>
                    Rating: <strong>{movie.vote_average}</strong>
                  </p>
                </div>
              );
            })}
        </div>
        {movies.length > 0 && (
          <div className="pagination">
            <button className="btn btn-danger">Previous</button>
            <button className="btn btn-danger">{ page }</button>
            <button className="btn btn-danger">Next</button>
          </div>
        )}
      </div>
    </>
  );
  
}
;

export default Popular;


