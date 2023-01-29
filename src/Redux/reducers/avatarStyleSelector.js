import { styleOptions } from "../../avatars/avatarCreator/avatarTree";
let initState = [];

Object.keys(styleOptions).forEach(() => {
  initState.push(0);
});

const avatarStyleSelector = (state = initState, action) => {
  switch (action.type) {
    case "SET_MY_AVATAR_STYLE":
      const { index, newValue } = action.payload;
      let newState = [...state];
      newState[index] = newValue;
      return newState;
    default:
      return state;
  }
};

export default avatarStyleSelector;
