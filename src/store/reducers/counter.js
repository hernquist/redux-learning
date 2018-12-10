import { INCREMENT_COUNTER, DECREMENT_COUNTER, ADD } from "../constants";

const initialState = {
  counter: 0
};

const reducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case INCREMENT_COUNTER: 
      return {
        counter: state.counter + 1
      }
    case ADD:
      return {
        counter: state.counter + action.value
      }
    case DECREMENT_COUNTER: 
      return {
        counter: state.counter - 1
      }
    default:
      return state;
  }
};

export default reducer;