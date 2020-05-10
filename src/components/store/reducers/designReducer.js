const initialState = {
  design: [
    { id: 1, name: "project one", tshirtcolor: "black" },
    { id: 2, name: "project tow", tshirtcolor: "blue" },
  ],
};

const designreducer = (state = initialState, action) => {
  switch (action.type) {
    case "save product":
      console.log("design", action.design);
  }
  return state;
};
export default designreducer;
