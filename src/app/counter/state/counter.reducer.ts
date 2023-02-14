import { increment, decrement, reset, customIncrement } from './counter.action';
import { intialState } from './counter.state';
import { Action, createReducer, on } from "@ngrx/store";

const _counterReducer = createReducer(intialState,
  on(increment, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    }
  }),
  on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    }
  }),
  on(reset, (state) => {
    return {
      ...state,
      counter: 0,
    }
  }),
  on(customIncrement, (state, action) => {
    return {
      ...state,
      counter: state.counter + action.count,
    }
  })
);

export function counterReducer(state: any, action: Action) {
  return _counterReducer(state, action);
}
