import { combineReducers } from "redux";
import avatarStyleSelector from "./avatarStyleSelector";
import avatarComponentSelector from "./avatarComponentSelector";

const rootReducer = combineReducers({
  avatarStyleSelector,
  avatarComponentSelector,
});

export default rootReducer;
