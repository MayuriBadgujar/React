import React, { useRef } from "react";

export default function Login() {
  let x1 = useRef();
  let x2 = useRef();
  let x3 = useRef();
  function f1() {
    //  alert("Login success");
    // console.log(x1);
    // console.log(x2);
    // console.log(x1.current.value);
    //   console.log(x2.current.value);

    var data = {
      name: x1.current.value,
      age: x2.current.value,
      place: x3.current.value,
    };
    // console.log(data);
    //output in string
    data = JSON.stringify(data);
    //console.log(data);

    //output of promise
    fetch("http://localhost:9065/users", {
      method: "Post",
      body: data,
      headers: {
        "content-type": "application/json",
      },
    })
      .then(function (result) {
        console.log(result);
      })
      .catch(function (err) {
        console.log(err);
      });
  }
  return (
    //   <div>Login</div>

    <div className="container">
      <h1>Login Form</h1>
      <input type="text" ref={x1} />
      <br />
      <input type="text" ref={x2} />
      <br />
      <input type="text" ref={x3} />
      <br />
      <button onClick={f1}>Login</button>
      <p></p>
      <p></p>
    </div>
  );
}
