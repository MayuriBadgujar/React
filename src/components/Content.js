import React from "react";
import Product from "./Product";

function Content() {
    // return <h1>Content</h1>
    return (
      <div className="container">
        <div className="row">
          <div className="col-xl-3">
            <Product name="Bata" price="2000" />
          </div>
          <div className="col-xl-3">
            <Product name="Nike" price="3000" />
          </div>
          <div className="col-xl-3">
            <Product name="Jordan" price="4000" />
          </div>
          <div className="col-xl-3">
            <Product name="Spark" price="2500" />
          </div>
        </div>
      </div>
    );
}
export default Content;