const ADD_ITEM = "ADD_ITEM";
const ADD_PERSON = "ADD_PERSON";
const UPDATE_PERSON = "UPDATE_PERSON";
const ADD_MESSAGE = "ADD_MESSAGE";
const REMOVE = "REMOVE";
const UPDATE = "UPDATE";

export const addItem = (something) => ({
  type: ADD_ITEM,
  item: {
    id: Date.now(),
    something: something || "",
  },
});

export const addPerson = ({ name, age, address }) => ({
  type: ADD_PERSON,
  person: {
    id: Date.now(),
    name: name || "",
    age: age || "",
    address: address || "",
  },
});

export const updatePerson = ({ id, name, age, address }) => ({
  type: UPDATE_PERSON,
  person: {
    id,
    name,
    age,
    address,
  },
});

export const addMessage = (text) => ({
  type: ADD_MESSAGE,
  text,
});

export const remove = (id) => ({
  type: REMOVE,
  id,
});

export const update = () => ({
  type: UPDATE,
});

const initialState = {
  items: [],
  people: [
    // {
    //   id: "1",
    //   name: "",
    //   age: "",
    //   address: "",
    // },
  ],
  message: "",
};

export function add(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: state.items.concat(action.item),
      };
    case ADD_PERSON: {
      return {
        ...state,
        people: state.people.concat(action.person),
      };
    }
    case UPDATE_PERSON:
      return {
        ...state,
        people: state.people.map((person) =>
          person.id === action.person.id
            ? Object.entries(person).toString() !==
              Object.entries(action.person).toString()
              ? action.person
              : person
            : person
        ),
      };
    case ADD_MESSAGE:
      return {
        ...state,
        message: action.text,
      };
    case REMOVE:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
        people: state.people.filter((person) => person.id !== action.id),
      };
    default:
      return state;
  }
}
