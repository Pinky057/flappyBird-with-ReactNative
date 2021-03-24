import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Bird =({birdBottom, birdLeft})=>{

    const birdWidth= 50
    const birdHeight = 60

    return(
        <View style={{
            position: 'absolute',
            backgroundColor: 'red',
            width: birdWidth,
            height: 60,
            left: birdLeft - ( birdWidth / 2 ),
            // bottom: birdBottom - (birdHeight / 2 ),
            bottom: birdBottom,

        }} />
    )
}

export default Bird;