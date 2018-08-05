import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'

import UserBar from '../components/UserBar'
import CardImage from '../components/CardImage'
import SocialBar from '../components/SocialBar'
import LikesBar from '../components/LikesBar'

export const CardItem = ({ avatar, avatarName, image, numberLikes, isLike, setLike }) => {
    return(
        <View style={{ flex: 1, backgroundColor: 'white', borderColor: '#E3E3E3', borderWidth: 2  }}>
            <UserBar 
                avatar={avatar}
                avatarName={avatarName}
            />
            <CardImage 
                image={image}
                styleCard={{ flex: 6 }} 
            />
            <SocialBar isLike={isLike} setLike={setLike} />
            <LikesBar numberLikes={numberLikes} isLike={isLike}/>
        </View>
    )
}

CardItem.propTypes = {
    avatar: PropTypes.string,
    avatarName: PropTypes.string,
    image: PropTypes.object,
    numberLikes: PropTypes.number,
    isLike: PropTypes.number,
    setLike: PropTypes.func
}

export default CardItem;