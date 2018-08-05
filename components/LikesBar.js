import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { Icon } from 'expo'

import Colors from '../constants/Colors'

const LikesBar = ({ numberLikes }) => {
    
    const { containerBar, containerIcon } = styles;
    
    return(
        <View style={containerBar}>
            <View style={containerIcon}>
                <Icon.Ionicons
                    name={'ios-heart'}
                    size={10}
                    style={{ marginRight: 5 }}
                />
                <Text style={{ fontWeight: 'bold', fontSize: 10 }}>{ numberLikes } Likes</Text>
            </View>
        </View>
    )
}

LikesBar.propTypes = {
    numberLikes: PropTypes.number
}

const styles = {
    containerBar: {
        borderBottomColor: 'transparent',
        borderBottomWidth: 1,
        paddingTop: 10,
        paddingBottom: 10
    },
    containerIcon: {
        flexDirection: 'row', 
        justifyContent: 'flex-start', 
        alignItems: 'center', 
        marginLeft: 22
    }
}

export default LikesBar