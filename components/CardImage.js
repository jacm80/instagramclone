import React from 'react'
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';

const CardImage = ({ image, styleCard }) => {
    return (
        <View style={styleCard}>
            <Image 
            source={image} 
            style={{ flex: 1, height: 300 }}
            />
        </View>
    )
}

CardImage.propTypes = {
    image: PropTypes.object
}

export default CardImage