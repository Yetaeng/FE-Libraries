const CREATE = "CREATE";
const REMOVE = "REMOVE";

export const create = (text) => {
  return {
    type: CREATE,
    payload: {
      id: Date.now(),
      text,
    },
  };
};

export const remove = (id) => {
  return {
    type: REMOVE,
    id,
  };
};

const initialStates = [{ id: 1, text: "test" }];

export default function todos(state = initialStates, action) {
  switch (action.type) {
    case CREATE:
      return state.concat(action.payload);
    case REMOVE:
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
}
