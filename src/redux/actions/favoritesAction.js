export const favorite = (payload) => {
  return {
    type: "FAVORITE",
    payload: payload,
  };
};

export const clear = () => {
  return {
    type: "CLEAR",
  };
};
