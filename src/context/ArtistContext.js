import { createContext } from "react";
import { initialState } from "../reducer/artistReducer";

const ArtistContext = createContext(initialState);

export default ArtistContext;
