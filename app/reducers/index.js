import { combineReducers } from "redux";
import axios from "axios";

const SET_CANDIES = "SET_CANDIES";

export const createSetCandiesAction = (candies) => {
  return {
    type: SET_CANDIES,
    candiesFromServer: candies,
  };
};

export const createThunkActionToFetchCandies = () => {
  return async (dispatch) => {
    const responseObj = await axios.get("/api/candies");
    const candies = responseObj.data;
    // const candies = (await axios.get("/api/candies")).data;
    const action = createSetCandiesAction(candies);
    dispatch(action);
  };
};

const candiesReducer = (state = [], action) => {
  switch (action.type) {
    case SET_CANDIES:
      return action.candiesFromServer;
    default:
        return state;
  }
};

const rootReducer = combineReducers({
  candies: candiesReducer,
});

export default rootReducer
