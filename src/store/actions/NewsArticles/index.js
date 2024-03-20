import {
  RESET_GET_NEWS_LIST,
  GET_NEWS_LIST,
  GET_NEWS_LIST_SUCCESS,
  GET_NEWS_LIST_FAILURE
} from "../../constants/NewsArticles";

export const ResetGetNewsList = (data) => {
  return {
      type: RESET_GET_NEWS_LIST,
      payload: data,
  };
};

export const GetNewsList = (data) => {
  return {
      type: GET_NEWS_LIST,
      payload: data,
  };
};
export const GetNewsListSuccess = (payload) => {
  return {
      type: GET_NEWS_LIST_SUCCESS,
      payload,
  };
};
export const GetNewsListFailure = (payload) => {
  return {
      type: GET_NEWS_LIST_FAILURE,
      payload,
  };
};