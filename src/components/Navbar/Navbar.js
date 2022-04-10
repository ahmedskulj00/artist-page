import React, { useEffect } from "react";
import "./Navbar.css";
import Logo from "../../assets/images/logo.png";
import SearchIcon from "../../assets/images/icons/search-white.svg";
import HamburgerMenu from "../../assets/images/icons/burger-menu-white.svg";
import useArtist from "../../context/ArtistContext";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { artists, getArtists } = useArtist();

  useEffect(() => {
    getArtists();
  }, []);

  return (
    <div className="navbar-container">
      <div className="navbar-inner-container">
        <div className="navbar-left-side">
          <div className="navbar-logo">
            <img src={Logo} alt="logo" className="logo" />
          </div>
          <div className="artists-links">
            {artists?.all_artists?.map((artist) => (
              <Link key={artist.artist_uuid} to={`/${artist.artist_uuid}`}>
                {artist.artist_name}
              </Link>
            ))}
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
