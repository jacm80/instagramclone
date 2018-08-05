import _ from 'lodash';
import { put, call, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import * as types from '../constants/postsConstants';
import { getPost } from '../fixtures/PostTest';

function* fetchPostsListFlow({ payload }) {

    console.log('>>>>>> payload', payload);

    const getPageNumber = (state) => state.postListIncrementPage.pageNumber;
    const pageNumber = yield select(getPageNumber);
    let numItemsPerPage = 10;
    if ((payload) && (numItemsPerPage in payload)) numItemsPerPage = payload.numItemsPerPage;
    const data = yield call(getPost, pageNumber, numItemsPerPage);
    yield call(delay, 1000);
    yield put({ type: types.FETCH_POSTS_LIST_SUCCESS, payload: data });
    yield put({ type: types.SET_POST_LIST_LOADING, payload: false });
    yield put({ type: types.SET_POST_LIST_REFRESHING, payload: false });
    yield put({ type: types.INCREMENT_PAGE_POST_LIST });
}

function* setPostLikeFlow({ payload }) {
    const getAllPost = (state) => state.postsList
    const posts = yield select(getAllPost)
    const newPosts = _.map(posts, post => {
        if (post.id === payload) {
            if (post.isLike) return { ...post, isLike: 0, likes: post.likes-=1 }
            else return { ...post, isLike: 1, likes: post.likes+=1 }
        } else return post
    });
    yield put({ type: types.SET_POST_LIKE_SUCCESS, payload: newPosts })
}

function* setPostListTopFalse() {
    yield call(delay, 1000);
    yield put({ type: types.SET_POST_LIST_TOP_FALSE, payload: { goTop: false } });
}

export {
    fetchPostsListFlow,
    setPostLikeFlow,
    setPostListTopFalse
};