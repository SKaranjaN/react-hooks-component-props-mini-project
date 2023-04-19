import React from "react";

function Header(props) {
    return (
      <header>
        <h1>{props.blogName}</h1>
      </header>
    );
  }
   
  export default Header;