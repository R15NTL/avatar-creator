export const updateAvatarStyleSelectorOption = (index, newValue) => {
  return (dispatch) => {
    dispatch({
      type: "SET_MY_AVATAR_STYLE",
      payload: { index, newValue },
    });
  };
};

export const updateAvatarComponentSelectorOption = (index, newValue) => {
  return (dispatch) => {
    dispatch({
      type: "SET_MY_AVATAR_COMPONENT",
      payload: { index, newValue },
    });
  };
};
