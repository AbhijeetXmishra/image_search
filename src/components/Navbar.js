import React, { useState } from "react";
import './Component.css';
import logo from '../components/logo.png';
import DefaultImage from "./Default_Image/DefaultImage";
import SearchImage from "./SearchImage";
import axios from "axios";

function Navbar() {

  const [search, setSearch] = useState("");
  const [getImage, setGetImage] = useState([]);
  const [display, setDisplay] = useState(true);

  const btnClick = ()=>{
    axios.get(`https://api.unsplash.com/search/photos?page=1&query=${search}&client_id=OE3rzMMXOCOnN_skYwzK22L539jLYxSQNZ5UJL5zc-0&per_page=50`)
    .then(res=>setGetImage(res.data.results));

    setDisplay(false);
  }

  const brand = () =>{
    setDisplay(true);
    setSearch("");
  }

  return (
    <div>
      <nav className="navbar bg-warning">
        <div className="container-fluid">
          <img src={logo} alt="logo"/>
          <a onClick={brand} href className="navbar-brand">
            Image Gallery
          </a>
          <div className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
            />
            <button 
            className="btn btn-outline-success"
            onClick={btnClick}
            >
              Search
            </button>
          </div>
        </div>
      </nav>
      {
        display ? <DefaultImage /> : <SearchImage getImage={getImage} />
      }

      
      

    </div>
  );
}

export default Navbar;
