import { pathOptions } from "../../avatars/avatarCreator/avatarTree";
let initState = [];

Object.keys(pathOptions).forEach(() => {
  initState.push(0);
});

const avatarComponentSelector = (state = initState, action) => {
  switch (action.type) {
    case "SET_MY_AVATAR_COMPONENT":
      const { index, newValue } = action.payload;
      let newState = [...state];
      newState[index] = newValue;
      return newState;
    default:
      return state;
  }
};

export default avatarComponentSelector;
