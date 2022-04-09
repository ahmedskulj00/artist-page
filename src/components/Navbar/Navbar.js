import React, { useEffect } from "react";
import "./Navbar.css";
import Logo from "../../assets/images/logo.png";
import SearchIcon from "../../assets/images/icons/search-white.svg";
import HamburgerMenu from "../../assets/images/icons/burger-menu-white.svg";
import useArtist from "../../context/ArtistContext";
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
            <div className="artists-links">
              {artists?.all_artists?.map((artist) => (
                <p key={artist.artist_uuid} href={`/artist/${artist.id}`}>
                  {artist.artist_name}
                </p>
              ))}
            </div>
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
