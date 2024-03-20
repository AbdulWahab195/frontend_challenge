import { all } from "redux-saga/effects";
import TastList from '../sagas/NewsArticles'

export default function* rootSaga(getState) {
  yield all([
    TastList(),
    
  ]);
}