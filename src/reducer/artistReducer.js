export const initialState = {
  artist: {
    artist: {},
    loading: false,
    error: null,
  },
  artists: {
    artists: [],
    loading: false,
    error: null,
  },
};

const artistReducer = (state, action) => {
  switch (action.type) {
    case "GET_ARTIST":
      return {
        ...state,
        artist: {
          ...state.artist,
          loading: false,
          artist: action.payload,
        },
      };
    case "GET_ARTIST_ERROR":
      return {
        ...state,
        artist: {
          ...state.artist,
          loading: false,
          error: action.payload,
        },
      };
    case "GET_ARTISTS":
      return {
        ...state,
        artists: {
          ...state.artists,
          loading: false,
          artists: action.payload,
        },
      };
    case "GET_ARTISTS_ERROR":
      return {
        ...state,
        artists: {
          ...state.artists,
          loading: false,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};

export default artistReducer;
