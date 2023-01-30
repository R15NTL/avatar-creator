const avatarSelectionMenu = (state = null, action) => {
  switch (action.type) {
    case "MENU_SELECTED":
      return action.payload;
    default:
      return state;
  }
};

export default avatarSelectionMenu;
