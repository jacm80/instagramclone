import React, { Component } from 'react';
import { View, Text, Image, ActivityIndicator, Dimensions } from 'react-native';
import GridView from 'react-native-super-grid';
import { connect } from 'react-redux';

import { 
	fetchPostList, 
	setPostListRefreshing, 
	setPostListLoading,
	setPostLike,
	setPostListTop
} from '../actions/postActions'

const cardWidth = (Dimensions.get('window').width / 2) - 20;

class MosaicScreen extends Component {

	static navigationOptions = {
		title: 'List Images',
	};

	constructor(props) {
		super(props);
		this._flatList = React.createRef();
		this.state = { numItemsPerPage: 10 }
	}

	getMorePosts = () => {
		const { numItemsPerPage } = this.state;
		const { fetchPostList } = this.props;
		fetchPostList({ numItemsPerPage })
		// setPostListTop({ goTop: true }); // TEST
	}

	handleLoadMore = () => {
		console.log('call handleLoadMore');
		const { refreshing, setPostListRefreshing, setPostListLoading } = this.props;
		setPostListRefreshing(true);
		setPostListLoading(true);
		refreshing && this.getMorePosts();
	}

	_renderFooter = () => {
		const { loading } = this.props;
		if (!loading) return null;
		return (
			<View style={{ paddingVertical: 20, borderTopWidth: 1, borderColor: '#CED0CE' }} >
				<ActivityIndicator animating size="large" />
			</View>
		);
	};

	render() {
		const { postsList, refreshing, loading } = this.props;
		return (<GridView
			itemDimension={140}
			onEndReached={this.handleLoadMore}
			onEndReachedThreshold={0.1}
			ListFooterComponent={this._renderFooter}
			renderItem={item => {
				return (
					<View style={styles.itemContainer}>
						<Image style={{ position: 'absolute', height: 200, width: 200, resizeMode: 'cover' }} source={item.img} />
						<View style={{ backgroundColor: 'rgba(51, 51, 51, 0.8)', padding: 6, flex: 1, maxHeight: 40, alignSelf: 'stretch' }}>
							<Text style={styles.itemCode}>@{item.userName}</Text>
						</View>
					</View>
				);
			}}
			handleLoadMore={this.handleLoadMore}
			items={postsList}
			styleList={styles.gridView}
			loading={loading}
			refreshing={refreshing}
		   ref={this._flatList}
		/>)
	}
}

const styles = {
	gridView: {
		paddingTop: 25,
		flex: 1,
	},
	itemContainer: {
		flex: 1,
		justifyContent: 'flex-end',
		padding: 10,
		height: 150,
		position: 'relative',
		overflow: 'hidden',
		width: cardWidth,
		borderWidth: 6,
		borderColor: 'transparent',
	},
	itemName: {
		fontSize: 16,
		color: '#fff'
	},
	itemCode: {
		fontSize: 12,
		color: '#fff',
	},
};

const mapStateToProps = state => {
	return {
		postsList: state.postsList,
		loading: state.postListLoading.loading,
		pageNumber: state.postListIncrementPage.pageNumber,
		refreshing: state.postListRefreshingReducers.refreshing,
	};
};

const mapDispatchToProps = dispatch => ({
	fetchPostList: (payload) => dispatch(fetchPostList(payload)),
	setPostListRefreshing: (payload) => dispatch(setPostListRefreshing(payload)),
	setPostListLoading: (payload) => dispatch(setPostListLoading(payload)),
	setPostLike: (payload) => dispatch(setPostLike(payload)),
	setPostListTop: (payload) => dispatch(setPostListTop(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(MosaicScreen);