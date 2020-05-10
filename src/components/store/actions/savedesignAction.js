export const savedesign = (design) => {
  return (dispatch, getstate) => {
    dispatch({ type: "save product", design });
  };
};
