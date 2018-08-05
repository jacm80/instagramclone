import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Icon } from 'expo'
import PropTypes from 'prop-types';

import Colors from '../constants/Colors'

export const SocialBar = ({ isLike, setLike }) => {

    const { containerStyle, containerIcon } = styles

    return (
        <View style={containerStyle}>
            <View style={containerIcon}>
                <TouchableOpacity onPress={() => setLike() }>
                    <Icon.Ionicons
                        name={ isLike ? 'ios-heart' : 'ios-heart-outline' }
                        size={30}
                        style={{ marginLeft: 10, marginRight: 20 }}
                    />
                </TouchableOpacity>
                <Icon.Ionicons
                    name={'ios-chatbubbles-outline'}
                    size={30}
                    style={{ marginRight: 20 }}
                />
                <Icon.Ionicons
                    name={'ios-redo-outline'}
                    size={30}
                    style={{ marginRight: 20 }}
                />
            </View>
        </View>
    )
}

const styles = {
    containerStyle: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: Colors.BORDER_COLOR_APP,
        borderBottomWidth: 1
    },
    containerIcon: {
        flex: 1,
        flexDirection: 'row', 
        alignSelf: 'stretch',
        justifyContent: 'flex-start',
        padding: 10,
        alignItems: 'center',
        borderBottomColor: 'transparent',
        borderBottomWidth: 1
    }
}

SocialBar.propTypes = {
    isLike: PropTypes.number,
    setLike: PropTypes.func
}

export default SocialBar