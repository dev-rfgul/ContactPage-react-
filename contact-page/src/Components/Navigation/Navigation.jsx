import React from "react";

import styles from "./Navigation.module.css";
const Navigation = () => {

  console.log(styles);
  return (
    <>
      <div className="main container">


        <div>
          <img src="Images/logo.png" alt="" />
        </div>

        <div >

        <ul className="nav">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        </div>
      </div>
    </>
  );
};

export default Navigation;
