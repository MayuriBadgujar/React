
import React from "react"
import ReactDOM from "react-dom/client"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routing";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />,
);