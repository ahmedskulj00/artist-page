import React from "react";
import "./Navbar.css";
import Logo from "../../assets/images/logo.png";
import SearchIcon from "../../assets/images/icons/search-white.svg";
import HamburgerMenu from "../../assets/images/icons/burger-menu-white.svg";
import useArtist from "../../context/ArtistContext";
const Navbar = () => {
  const { artists } = useArtist();

  console.log(artists.artists.all_artists);

  return (
    <div className="navbar-container">
      <div className="navbar-inner-container">
        <div className="navbar-left-side">
          <div className="navbar-logo">
            <img src={Logo} alt="logo" className="logo" />
            <div className="artists-links"></div>
          </div>
        </div>
        <div className="navbar-right-side">
          <div className="navbar-search-container">
            <img src={SearchIcon} alt="search" className="search" />
          </div>
          <div className="navbar-menu-container">
            <img
              src={HamburgerMenu}
              alt="burger-menu"
              className="burger-menu"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
