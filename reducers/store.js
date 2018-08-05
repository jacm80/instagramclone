import { combineReducers } from 'redux';

import postsListReducers from '../reducers/postsListReducers';

export default combineReducers({
    ...postsListReducers
})