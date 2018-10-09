import React from 'react';

function Navbar(props) {
  return (
    <nav className="bg-nav fixed-top navbar nav-height nav-shadow p-0 tp-text">
      <ul className="row center list-inline m-0 nav-fill nav-height nav-width">
        <li className="col list-inline-item my-auto nav-calc-font p-0 m-0 text-center">
          <a className="nav-calc-font navbar-brand p-0 m-0 title-line-hgt" href="/">
            Stranger Things <br></br>Memory Game
          </a>
        </li>
        <li id="animate-this" className="col list-inline-item my-auto nav-calc-font m-0 p-0 text-center">
          {props.message}
        </li>
        <li className="col list-inline-item my-auto nav-calc-font m-0 p-0 score-li-width text-center">
          Score: {props.score} | Top Score: {props.topScore}
        </li>
      </ul>
    </nav>
  );    
};

export default Navbar;
