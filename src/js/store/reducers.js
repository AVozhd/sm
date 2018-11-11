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
    case types.ACTION_GET_CARD_DIM:
      return {
        ...state,
        cards: {
          ...state.cards,
          dimensions: action.payload
        }
      };
    case types.ACTION_CHANGE_LOGO_PATH:
      return {
        ...state,
        logo: {
          ...state.logo,
          src: action.payload
        }
      };
    case types.ACTION_GET_SLIDE_DIM:
      return {
        ...state,
        slides: {
          ...state.slides,
          dimensions: action.payload
        }
      };
  }
  return state;
};
