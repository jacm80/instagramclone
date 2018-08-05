import * as types from '../constants/postsConstants';

const postsListReducers = (state = [], action) => {
	switch (action.type) {
		case types.FETCH_POSTS_LIST:
			return state
		case types.FETCH_POSTS_LIST_SUCCESS:
			return [...state, ...action.payload]
		case types.SET_POST_LIKE:
			return state
		case types.SET_POST_LIKE_SUCCESS:
			return action.payload
		case types.BLANK:
			return [];
		default:
			return state
	}
}

const postListRefreshingReducers = (state = { refreshing: false }, action) => {
	switch (action.type) {
		case types.SET_POST_LIST_REFRESHING:
			return { refreshing: action.payload }
		case types.BLANK:
			return { refreshing: false }
		default:
			return state;
	}
}

const postListLoadingReducers = (state = { loading: false }, action) => {
	switch (action.type) {
		case types.SET_POST_LIST_LOADING:
			return { loading: action.payload }
		case types.BLANK:
			return { loading: false }
		default:
			return state
	}
};

const postListIncrementPageReducers = (state = { pageNumber: 1 }, action) => {
	switch (action.type) {
		case types.INCREMENT_PAGE_POST_LIST:
			return { pageNumber: state.pageNumber + 1 }
		case types.BLANK:
			return { pageNumber: 1 }
		default:
			return state
	}
};

const postSetListTopReducers = (state = { goTop: false }, action) => {
	switch (action.type) {
		case types.SET_POST_LIST_TOP:
			return { ...state, ...action.payload }
		case types.SET_POST_LIST_TOP_FALSE:
			return { goTop: false }
		default:
			return state
	}
}


export default {
	postsList: postsListReducers,
	postListRefreshingReducers,
	postListLoading: postListLoadingReducers,
	postListIncrementPage: postListIncrementPageReducers,
	postSetListTop: postSetListTopReducers
}