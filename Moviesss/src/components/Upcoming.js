import axios from "axios";
import React, { useEffect } from "react";

const Upcoming = () => {
  // https://api.themoviedb.org/3/movie/popular?api_key=${Api_key}&language=en-US&page=1
  const Api_key = "c45a857c193f6302f2b5061c3b85e743";

  const fetchUpcomingMovies = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${Api_key}&language=en-US&page=1`
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchUpcomingMovies();
  }, []);

  return <div>Upcoming</div>;
};

export default Upcoming;


// import axios from "axios";
// import React, { useEffect } from "react";

// export default function Upcoming() {
//   const Api_key = "c45a857c193f6302f2b5061c3b85e743";

//   const fetchPopularMovies = () => {
//     axios
//       .get(
//         `api.themoviedb.org/3/movie/upcoming?api_key=${Api_key}&language=en-US&page=1`
//       )
//       .then((response) => {
//         console.log(response);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   useEffect(() => {
//     fetchPopularMovies();
//   }, []);

//   return <div>Upcoming</div>;
// }
