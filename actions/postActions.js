import * as types from '../constants/postsConstants';

const fetchPostList = payload => ({
    type: types.FETCH_POSTS_LIST,
    payload
})

const setPostListRefreshing = payload => ({
    type: types.SET_POST_LIST_REFRESHING,
    payload
})

const setPostListLoading = payload => ({
    type: types.SET_POST_LIST_LOADING,
    payload
})

const setTotalPagesPostList = payload => ({
    type: types.SET_TOTAL_PAGES_POST_LIST,
    payload
})

const setPostLike = payload => ({
    type: types.SET_POST_LIKE,
    payload
})

const setPostListTop = payload => ({
    type: types.SET_POST_LIST_TOP,
    payload
})

export {
    fetchPostList,
    setPostListRefreshing,
    setPostListLoading,
    setTotalPagesPostList,
    setPostLike,
    setPostListTop
}