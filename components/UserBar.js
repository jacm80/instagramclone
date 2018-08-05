import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import { Icon } from 'expo'

import Colors from '../constants/Colors';

const UserBar = ({ avatar, avatarName }) => {

    const { userBarContainer, containerItem, containerRow, containerAvatar, imageStyle, textStyle } = styles;

    return (
        <View style={userBarContainer}>
            <View style={containerItem}>
                <View style={containerRow}>
                    <View style={containerAvatar}>
                        <Image source={{ uri: avatar }} style={imageStyle} />
                        <Text style={textStyle}>@{avatarName}</Text>
                    </View>
                    <Icon.Ionicons
                        name={'ios-more'}
                        size={30}
                        style={{ marginLeft: 10, textAlign: 'right' }}
                    />
                </View>
            </View>
        </View>
    )
}

UserBar.propTypes = {
    avatar: PropTypes.string,
    avatarName: PropTypes.string
}

const styles = {
    userBarContainer: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: Colors.BORDER_COLOR_APP,
        padding: 10
    },
    containerItem: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },
    containerRow: {
        flexDirection: 'row', 
        alignItems: 'center'
    },
    containerAvatar: {
        flex: 6, 
        flexDirection: 'row', 
        alignItems: 'center'
    },
    imageStyle: {
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
        marginRight: 10
    },
    textStyle: {
        fontWeight: 'bold'
    }
}

export default UserBar;