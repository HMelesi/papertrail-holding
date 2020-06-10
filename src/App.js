import React from "react";
import "./App.css";
import logo from "./images/logo.png";
import { GrInstagram, GrTwitter } from "react-icons/gr";

function App() {
  return (
    <div className="App">
      <img src={logo} alt="papertrail logo" className="logo" />
      <h1 className="page__header">
        Site coming soon! In the meantime we are on...
      </h1>
      <a
        href="https://www.instagram.com/the_papertrail_/"
        target="blank"
        className="social link__light"
      >
        <h2 className="page__subheader">
          <GrInstagram />
        </h2>
        <h2 className="page__subheader">instagram</h2>
      </a>
      <a
        href="https://twitter.com/the_papertrail_"
        target="blank"
        className="social link__light"
      >
        <h2 className="page__subheader">
          <GrTwitter />
        </h2>
        <h2 className="page__subheader">twitter</h2>
      </a>
    </div>
  );
}

export default App;
