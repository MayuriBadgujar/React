import React from 'react';
import "./css/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
//console.log(React);
import ReactDOM from 'react-dom';
import App from './components/App';
//console.log(ReactDOM);
import projetroute from './projectroute';
//router website code
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const result = ReactDOM.createRoot(document.getElementById("root"));
//result.render("Hellooooooooo Worldddd!");

// var username = "Mayuri";
// var age = 25;
// result.render(
//     <ul>
//         <li>{username}</li>
//         <li>{age}</li>
//     </ul>
// )



//result.render(<App/>);
result.render(<RouterProvider router={projetroute} />);