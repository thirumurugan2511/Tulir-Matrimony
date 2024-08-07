// Action Types
const SET_PROFILE_COUNT = 'SET_PROFILE_COUNT';

// Action Creators
export const setProfileCount = (count) => ({
  type: SET_PROFILE_COUNT,
  payload: count,
});

// Initial State
const initialState = {
  profileCount: 0,
};

// Reducer
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE_COUNT:
      return {
        ...state,
        profileCount: action.payload,
      };
    default:
      return state;
  }
};

export default profileReducer;
