export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  discover: null,
  top_artists: null,
  spotify: null,
  //TODO: Remove the default token value after finishing debugging and replace with null
  // token:
  //   "BQB4Dnxdzued-lxFX-k2FRE3W-5jYzrw_9FuQ3sBGip-A-XDBT6HWdjM_616SCBC7W75YZOktU71YDPcqN0TDkJZq-f3DE68O6s0ABt43qdzjzGsWF3G1JB3OAA1yyEtmSRUsO8EYO2uaL9YymbmSLgn07x5LuE_BNHiz0zrWH8tp-ZUauukiral_etezcCpZ7fLuoQ9OwEaCxG1",
  token: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER":
      return {
        ...state,
        discover: action.discover,
      };
    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };
    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };
    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };
    default:
      return state;
  }
};

export default reducer;
