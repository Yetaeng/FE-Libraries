const ADD_ITEM = 'ADD_ITEM';
const ADD_PERSON = 'ADD_PERSON';
const ADD_MESSAGE = 'ADD_MESSAGE';
const REMOVE = 'REMOVE'

export const addItem = item => ({
  type: ADD_ITEM,
  item
});

export const addPerson = ({name, age, address}) => ({
  type: ADD_PERSON,
  person: {
    id: Date.now(), 
    name: name || '',
    age: age || '',
    address: address || ''
  }
})

export const addMessage = text => ({
  type: ADD_MESSAGE,
  text
})

export const remove = id => ({
  type: REMOVE,
  id
})

const initialState = {
  items: [],
  people: [],
  // people: [{
  //   id: "",
  //   name: "",
  //   age: "",
  //   address: "",
  // }],
  message: "",
};

export function add(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: state.items.concat(action.item)
      }
    case ADD_PERSON:
      return {
        ...state,
        people: state.people.concat(action.person)
      };
    case ADD_MESSAGE:
      return {
        ...state,
        message: action.text
      };
    case REMOVE:
      return {
        ...state,
        people: state.people.filter(person => person.id !== action.id)
      };
    default:
      return state;
  }
}
