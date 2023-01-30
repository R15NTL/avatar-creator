import { combineReducers } from "redux";
import avatarStyleSelector from "./avatarStyleSelector";
import avatarComponentSelector from "./avatarComponentSelector";
import avatarSelectionMenu from "./avatarSelectionMenu";

const rootReducer = combineReducers({
  avatarStyleSelector,
  avatarComponentSelector,
  avatarSelectionMenu,
});

export default rootReducer;
