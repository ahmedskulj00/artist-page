import axios from "axios";
import { createContext, useEffect, useContext, useReducer } from "react";
import { initialState } from "../reducer/artistReducer";
import artistReducer from "../reducer/artistReducer";

const ArtistContext = createContext(initialState);

export const ArtistProvider = ({ children }) => {
  const [state, dispatch] = useReducer(artistReducer, initialState);

  useEffect(() => {
    const getArtist = async (artistId) => {
      try {
        const res = await axios.get(`https://run.mocky.io/v3/${artistId}`);
        dispatch({ type: "GET_ARTIST", payload: res.data });
      } catch (err) {
        dispatch({ type: "GET_ARTIST_ERROR", payload: err });
      }
    };

    const getArtists = async () => {
      try {
        const res = await axios.get(
          `https://run.mocky.io/v3/3cab6663-7cd8-4365-b8a6-4a1d89305f6a`
        );
        dispatch({ type: "GET_ARTISTS", payload: res.data });
      } catch (err) {
        dispatch({ type: "GET_ARTISTS_ERROR", payload: err });
      }
    };

    getArtist();
    getArtists();
  }, []);

  const value = {
    artist: state.artist,
    artists: state.artists,
  };
  return (
    <ArtistContext.Provider value={value}>{children}</ArtistContext.Provider>
  );
};

const useArtist = () => {
  const context = useContext(ArtistContext);
  if (!context) {
    throw new Error("useArtist must be used within an ArtistProvider");
  }
  return context;
};

export default useArtist;
