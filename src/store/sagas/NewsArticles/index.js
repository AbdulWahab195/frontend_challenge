import { call, put, takeEvery } from 'redux-saga/effects';
import {
  GetNewsListSuccess,
  GetNewsListFailure,
} from '../../actions/NewsArticles';
import { GET_NEWS_LIST } from '../../constants/NewsArticles';
import { baseUrl } from '../../../utils/APIBaseUrl';
import getRequest from '../../../utils/APIHelperGet';


export const fetchNewsListRequest = async (actions) => {
    const {source, search, fromDate, toDate, category} = actions.payload;
  return await getRequest(
    `${baseUrl}?q=${search}&from=${fromDate}&to=${toDate}&category=${category?.value || ''}&sources=${source?.value || ''}&apiKey=9a1ccb1470924231bd23c76ee076ed05`,
  )
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
};

function* fetchNewsList(params) {
  try {
    let response = yield call(fetchNewsListRequest, params);
    yield put(GetNewsListSuccess(response));
  } catch (error) {
    console.error(error);
    yield put(GetNewsListFailure(error));
  }
}

export default function* rootSaga() {
  yield takeEvery(GET_NEWS_LIST, fetchNewsList);
}