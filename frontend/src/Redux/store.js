import { createStore } from "redux";

let inState = {
  data: [],
};

let appReducer = (state = inState, action) => {
  let copy = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case "add":
      copy.data = action.payload;
      console.log("data", copy.data);
      return copy;

    default:
      return copy;
  }
};

let store = createStore(appReducer);
export default store;
