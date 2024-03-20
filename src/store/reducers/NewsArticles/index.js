import {
  RESET_GET_NEWS_LIST,
  GET_NEWS_LIST,
  GET_NEWS_LIST_SUCCESS,
  GET_NEWS_LIST_FAILURE
} from "../../constants/NewsArticles";

const INIT_STATE = {
  newsList: {},
  loadingNewsList: true,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
      case RESET_GET_NEWS_LIST:
          return INIT_STATE;

      case GET_NEWS_LIST:
          return {
              ...state,
              loadingNewsList: true,
          };
      case GET_NEWS_LIST_SUCCESS:
          return {
              ...state,
              loadingNewsList: false,
              newsList: action.payload,
          };
      // eslint-disable-next-line no-fallthrough
      case GET_NEWS_LIST_FAILURE:
          return {
              ...state,
              loadingNewsList: false,
              newsList: "Error in  getting Club Data",
          };
      default:
          return state;
  }
};