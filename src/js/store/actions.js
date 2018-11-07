import * as types from './actionsTypes';

export const setWindowDimensions = (newWindowDimensions) => {
  return {
    type: types.ACTION_RESIZE_WINDOW,
    payload: newWindowDimensions
  };
};

export const getCardDim = (cardDimensions) => {
  return {
    type: types.ACTION_GET_CARD_DIM,
    payload: cardDimensions
  };
};
