import { all, takeEvery } from 'redux-saga/effects';

import { fetchPostsListFlow, setPostLikeFlow, setPostListTopFalse } from './postsSagas';

export default function *rootSaga() {
   yield all([
      yield takeEvery('FETCH_POSTS_LIST', fetchPostsListFlow),
      yield takeEvery('SET_POST_LIKE', setPostLikeFlow),
      yield takeEvery('SET_POST_LIST_TOP', setPostListTopFalse),
   ]);
}