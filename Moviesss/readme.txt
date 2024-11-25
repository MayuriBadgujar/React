npx create-react-app .

above command use for if i want to  use my folder movieflix then type above command if not then use reactjs legecy command
it will create my-app folder

npm start

npm i bootstrap

import 'bootstrap/dist/css/bootstrap.css';  //for css
import 'bootstrap/dist/js/bootstrap.js';    //for js


for arrow function short form
rafce

 <Header />  in app.js ..........app.js is parent of my project
    <Footer />


in css parentsearch googlefont in browser 
choose any font like poppins go to import copy that code paste in index.css part
and in body tag 


body{
    margin: 0;
    font-family: Poppins !important;
      background-color: #370617 !important;
    color:whitesmoke !important;
}


header.js  empty frament

 <>  </>

      remove div tag from header.js


      in react unpaired tag is not allowed
      hr and input before >   we have to give />


      6.28   version react router

      import {
  createBrowserRouter,
  RouterProvider,
}  from "react-router-dom";

copy above snippet from react router -->tutorial-->Adding a router


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

if i want to apply any image then dont use  double quotes
just pass import            import logo from '../assets/MovieFlixLogo.png'
  <img src={logo} alt="" width={150} />

  npm i axios

   // https://api.themoviedb.org/3/movie/popular?api_key=${Api_key}&language=en-US&page=1
const Api_key = "c45a857c193f6302f2b5061c3b85e743";
  
  const fetchPopularMovies = () => {
    axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${Api_key}&language=en-US&page=1`
    ).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    })
  }
