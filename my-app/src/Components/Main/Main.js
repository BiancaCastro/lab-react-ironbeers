import React, { Component } from "react";
import { Link } from 'react-router-dom';

import Allbeers from "../Allbeers/Allbeers";
import NewBeer from "../NewBeer/NewBeer";
import RandomBeer from "../RandomBeer/RandomBeer";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Link to="/allbeers" ><h1>All beers</h1></Link>
         <p>Lorem djfsdkfjksfjksjfsk</p>
         <Link to="/newbeer" ><h1>New beers</h1></Link>
         <p>Lorem djfsdkfjksfjksjfsk</p>
         <Link to="/randombeer" ><h1>Random beer</h1></Link>
         <p>Lorem djfsdkfjksfjksjfsk</p>

      </div>
    );
  }
}
