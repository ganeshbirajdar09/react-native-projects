import {ADD_SEASON, REMOVE_SEASON, MARK_COMPLETE} from '../action/action.types';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_SEASON:
      return [...state, action.payload];
    case REMOVE_SEASON:
      return state.filter(season => season.id !== action.payload);
    case MARK_COMPLETE:
      return state.map(season => {
        if (season.id == action.payload) {
          season.isWatched = !season.isWatched;
        }
        return season;
      });

    default:
      return state;
  }
};
