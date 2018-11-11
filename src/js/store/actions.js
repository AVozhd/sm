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

export const changeLogoPath = (newPath) => {
  return {
    type: types.ACTION_CHANGE_LOGO_PATH,
    payload: newPath
  };
};

export const getSlideDim = (slideDim) => {
  return {
    type: types.ACTION_GET_SLIDE_DIM,
    payload: slideDim
  };
};
