Sreach : reactjs legecy  on browser
Create React App
in cmd

npx create-react-app my-app

cd my-app

npm start

//defalut localhost of react
http://localhost:3000/


delete all src and public files

create file index.js in src folder

//we can made made mobile application  :react

create file index.html in public folder


main ingredient of react not merge
 "react": "^18.3.1",
    "react-dom": "^18.3.1",


***********in index.js
import React from 'react';
console.log(React);
    react :object


ReactDOM is "object" of react-dom library
render is used for printing like cout in c++ and system.out.println() in java

document.getElementById("root"):
Fetches the DOM element with the ID root


with the help of babel compiler we can easily access internally our task
like
result.render(
    <ul>
        <li>{username}</li>
        <li>{age}</li>
    </ul>
)


two types of components class and function
must be first letter capital
must be return something


in src 
create App.js
Content.js
Header.js
export means we can any where


//19/11/24

cmd
install bootstrap in my-app folder
cd my-app
npm i bootstrap

in index.js
bootstrap css import in index.js
we can also add js
below link paste in index.js
import 'bootstrap/dist/css/bootstrap.min.css';


got to bootstrap and search navbar
copy code paste in header.js return ()
in round brackets

npm start in terminal automatic localhost will open

create .container>.row>.col-xl-3 in Content


create Product.js
shortcut     rfc  enter
code will display

in content.js
col-xl-3   <Product />
just type Product and click on suggestions automatic product will import

unchangable data props
reusable data
<Product name="Spark" price="2500" />


creat 3 component in component login,home,register
rfc enter
https://reactrouter.com/

npm install react-router-dom  

create one file in src all letters are small  projectroute.js
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


http://localhost:3000                 Home

http://localhost:3000/loginpage      Login

http://localhost:3000/contentpage     Content

http://localhost:3000/registerpage     Register

every element has closing in react
 let x1 = useRef(); any keyword start from use called as hook

 var[count,setCount]=useState(0)(hoooook)

 count=state variable(100% changable)
 update 
 state variable
 dispatcher function

 props use for decorate 
 not changable

when you visit the component use effect hook will called

if we remove  }, []); then continuosly api will called


3rd party api fetch by using axios
cd my-app

npm i axios