import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Obstacles =({ obstacleHeight, obstacleWidth, obstaclesLeft, gap})=>{

    //we are going to move this to app.js
//  const obstacleHeight =300
//  const obstacleWidth= 60   
//  const gap = 30
  
    return(
        <>
        <View style={{
            position: 'absolute',
            backgroundColor: 'green',
            width: obstacleWidth,
            height: obstacleHeight,
            left: obstaclesLeft,
            bottom: 0 + obstacleHeight + gap ,

        }} />

        <View style={{
            position: 'absolute',
            backgroundColor: 'green',
            width: obstacleWidth,
            height: obstacleHeight,
            left: obstaclesLeft,
            bottom: 0,

        }} />
        </>
    )
}

export default Obstacles;