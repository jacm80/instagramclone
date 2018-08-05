import React, { Component } from 'react';
import { Icon } from 'expo';
import { connect } from 'react-redux';
import Colors from '../constants/Colors';
import PropTypes from 'prop-types';

import { setPostListTop } from '../actions/postActions';

class TabBarIcon extends Component {

  render() {
    const { name, focused } = this.props;
    return (
      <Icon.Ionicons
        name={name}
        color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
        size={26}
        style={{ marginBottom: -3 }}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
	setPostListTop: (payload) => dispatch(setPostListTop(payload))
 });

 TabBarIcon.propTypes = {
  name: PropTypes.string,
  setPostListTop: PropTypes.func,
 }

export default connect(null, mapDispatchToProps)(TabBarIcon);