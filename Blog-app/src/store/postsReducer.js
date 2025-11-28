import { FETCH_POSTS, ADD_POST, UPDATE_POST, DELETE_POST } from "./postTypes";

const initialState = {
  posts: []
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {

    case FETCH_POSTS:
      return { ...state, posts: action.payload };

    case ADD_POST:
      return { ...state, posts: [...state.posts, action.payload] };

    case UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map((p) =>
          p.id === action.payload.id ? action.payload : p
        )
      };

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.payload)
      };

    default:
      return state;
  }
};
