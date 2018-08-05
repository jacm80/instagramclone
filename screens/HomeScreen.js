import React, { PureComponent } from 'react'
import { Text, View, FlatList, ActivityIndicator } from 'react-native'
import PropTypes from 'prop-types'
import { Icon } from 'expo'
import { connect } from 'react-redux';

import CardItem from '../components/CardItem'
import { 
	fetchPostList, 
	setPostListRefreshing, 
	setPostListLoading,
	setPostLike,
	setPostListTop
} from '../actions/postActions'

const styles = {
	containerBarTop: {
		backgroundColor: '#f4f3ef',
		height: 80,
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 30,
		// borderWidth: 1,
		// borderColor: 'purple'
	},
	titleStyle: {
		flex: 3,
		fontFamily: 'countryside',
		fontWeight: 'bold',
		fontSize: 18,
		textAlign: 'center',
		marginLeft: 24
	},
	containerInbox: {
		alignItems: 'flex-end'
		// borderWidth: 1,
		// borderColor: 'red'
	},
	containerRow: {
		flex: 1,
		flexDirection: 'row',
		alignSelf: 'stretch',
		justifyContent: 'center',
		alignItems: 'center',
		// borderWidth: 1,
		// borderColor: 'blue'
	}
}

class HomeScreen2 extends PureComponent {

	static navigationOptions = {
		header: (
			<View style={styles.containerBarTop}>
				<View style={styles.containerRow}>
					<Text style={styles.titleStyle}>InstagramClone</Text>
					<View style={styles.containerInbox}>
						<Icon.Ionicons
							name={'ios-filing'}
							size={35}
							style={{ textAlign: 'right', padding: 5, marginRight: 10 }}
						/>
					</View>
				</View>
			</View>
		)
	};

	constructor(props) {
		super(props);
		this._flatList = React.createRef();
		this.state = { numItemsPerPage: 10 }
	}

	componentDidMount = () => {
		const { fetchPostList, setPostListTop, navigation } = this.props;
		navigation.setParams({ goListTop: setPostListTop({ goTop: true }) });
		fetchPostList();
	}
	componentDidUpdate(prevProps) {
		if (prevProps.goTop === true) this._goTopList()
	}

	_renderItem = ({ item }) => {
		const { setPostLike } = this.props;
		const { id, avatar, likes, isLike, text, user, userName, img, createdAt } = item
		// console.log('>>>>>>> img', img)

		return (<CardItem
			avatar={avatar}
			avatarName={userName}
			image={img}
			numberLikes={likes}
			isLike={isLike}
			setLike={() => setPostLike(id)}
		/>)
	}

	_keyExtractor = (item) => item.id.toString()

	_renderFooter = () => {
		const { loading } = this.props;
		if (!loading) return null;
		return (
		   <View style={{ paddingVertical: 20, borderTopWidth: 1, borderColor: '#CED0CE' }} >
			  <ActivityIndicator animating size="large" />
		   </View>
		);
	 };

	 getMorePosts = () => {
		const { numItemsPerPage } = this.state;
		const { fetchPostList } = this.props;
		fetchPostList({numItemsPerPage})
		// setPostListTop({ goTop: true }); // TEST
	 }

	 handleLoadMore = () => {
		console.log('call handleLoadMore');
		const { refreshing, setPostListRefreshing, setPostListLoading} = this.props;
		setPostListRefreshing(true);
		setPostListLoading(true);
		refreshing && this.getMorePosts();
	 }

	_renderFlatList = () => {
		const { postsList, refreshing, loading } = this.props;
		if (postsList) {
			return (<FlatList
						style={{ paddingLeft: 5, paddingRight: 5 }}
						renderItem={this._renderItem}
						ListFooterComponent={this._renderFooter}
						keyExtractor={this._keyExtractor}
						refreshing={refreshing}
						onEndReached={this.handleLoadMore}
						onEndReachedThreshold={0.1}
						data={postsList}
						loading={loading}
						ref={this._flatList}
					/>) 
		} else return null
	}

	_goTopList = () => this._flatList.current.scrollToOffset(0)

	render() {
		return this._renderFlatList()
	}
}

HomeScreen2.propTypes = {
	avatar: PropTypes.string,
	avatarName: PropTypes.string,
	image: PropTypes.object
}

const mapStateToProps = state => {
	return {
		postsList: state.postsList,
		loading: state.postListLoading.loading,
		pageNumber: state.postListIncrementPage.pageNumber,
		refreshing: state.postListRefreshingReducers.refreshing,
		goTop: state.postSetListTop.goTop
		// totalPage: state.postListTotalPage.postListTotalPage
	};
 };
  
 const mapDispatchToProps = dispatch => ({
	fetchPostList: (payload) => dispatch(fetchPostList(payload)),
	setPostListRefreshing: (payload) => dispatch(setPostListRefreshing(payload)), 
	setPostListLoading: (payload) => dispatch(setPostListLoading(payload)),
	setPostLike: (payload) => dispatch(setPostLike(payload)),
	setPostListTop: (payload) => dispatch(setPostListTop(payload))
 });

export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen2);
