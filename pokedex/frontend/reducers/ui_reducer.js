import { LOADING, NOT_LOADING } from "../actions/ui_actions";
import { merge } from "lodash";

const defaultState = {loading: true};

const uiReducer = (state = defaultState, action)=>{

  switch(action.type){
    case LOADING:

      return {loading: true};

    case NOT_LOADING:

      return {loading: false};

    default:
      return state;
  }
};

export default uiReducer;
