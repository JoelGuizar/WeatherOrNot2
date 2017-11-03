import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type){
    case FETCH_WEATHER:
    //concat creates a new array, doesn't mutate state
    //return state.concat([action.payload.data]) same as below via ES6;
      return [ action.payload.data, ...state];
  }
  return state;
}
