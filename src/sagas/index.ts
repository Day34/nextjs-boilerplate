import { all } from 'redux-saga/effects';
import { watchLogin, watchUserInfo, watchUpdateUserInfo } from './auth';
import { watchRecommendDomain, watchLinkConnect, watchLinkRank } from './link';

function* rootSaga() {
  yield all([
    watchLogin(),
    watchUserInfo(),
    watchUpdateUserInfo(),
    watchRecommendDomain(),
    watchLinkConnect(),
    watchLinkRank(),
  ]);
}

export default rootSaga;
