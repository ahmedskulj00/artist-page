export const initialState = {
  artist: {},
  artists: [],
  loading: false,
  error: null,
};

const artistReducer = (state, action) => {
  switch (action.type) {
    case "GET_ARTIST":
      return {
        ...state,
        loading: false,
        artist: action.payload,
      };
    case "GET_ARTIST_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "GET_ARTISTS":
      return {
        ...state,
        loading: false,
        artists: action.payload,
      };
    case "GET_ARTISTS_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default artistReducer;
