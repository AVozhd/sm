import * as types from './actionsTypes';
import initialAppState from './initialAppState';

export const rootReducer = (state = initialAppState, action) => {
  switch (action.type) {
    case types.ACTION_RESIZE_WINDOW:
      return {
        ...state,
        viewport: {
          ...state.viewport,
          dimensions: action.payload
        }
      };
  }
  return state;
};
