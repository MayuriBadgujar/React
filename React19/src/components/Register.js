import React, { useEffect, useState } from 'react'

export default function Register() {
    //100 is default
    var [count, setcount] = useState(100);
    var [name, setname] = useState("Ananya");
    
    // when you visit the component use effect hook will called
    
    //if we are changing state varaible then useeffect be recalled
    // useEffect(() => {
    //     console.log("useEffect", count, name);
    // })


    //empty array useeffect call only on page load
    // useEffect(() => {
    //   console.log("useEffect", count, name);
    // }, []);
    

    //conditional varaible
    // useEffect(() => {
    //   console.log("useEffect", count, name);
    // },[name]);

    useEffect(() => {
        console.log("useEffect", count, name);
        return () => {
            console.log("I am leaving");
        }
    },[]);


    function f1() {
        //alert("Register");
        setcount(count + 100);
    }
    function f2() {
        setname("Aditya");
     }
  return (
      // <div>Register</div>
      <div className="container">
          <h1>State Varaible</h1>
          <p>{count}</p>
          <button onClick={f1}>Submit</button><br /><br />
          <button onClick={f2}>Change</button>
          <p>{name}</p>
      </div>
  )
}
