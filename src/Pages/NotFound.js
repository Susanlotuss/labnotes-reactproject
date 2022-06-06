import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
    return (
      <div className="NotFound">
        <h1>404</h1>
        <p>Not Found</p>
        <nav>
        <Link to="/">Home</Link>
        </nav>
      </div>
    );
  }

  export default NotFound;