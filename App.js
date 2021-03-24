import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

import Bird from './components/Bird';
import Obstacles from './components/Obstacles';

export default function App() {
  const screenWidth = Dimensions.get("screen").width;
  const screenHeight = Dimensions.get("screen").height;
  const birdLeft =screenWidth / 2;
  const [birdBottom, setBirdBottom]= useState(screenWidth/2);
  const [obstaclesLeft, setObstaclesLeft] = useState(screenWidth)
  
  //variables

  const gravity = 3;
  const obstacleHeight = 300; 
  const obstacleWidth = 60;
  const gap = 50;
  
  let gameTimerId ; // we decalring it as global varibale so we can acess this from every where.
  let obstacleLeftTimerId ;

  // console.log(screenWidth)
  // console.log(screenHeight)


  //start bird falling 
  //as long as the bird bottom is bigger than zero we are going to deduct 3 in every thirty miliseconds
 
  useEffect(()=>{
 if ( birdBottom > 0 ) {
   gameTimerId = setInterval(()=>{
  setBirdBottom ( birdBottom => birdBottom - gravity)
   }, 30)
   return ()=>{
     clearInterval(gameTimerId);
   }
 } 
  }, [birdBottom]);

  // console.log(birdBottom)

// start obstacles for the game

useEffect(()=>{
if(obstaclesLeft > 0){
  obstacleLeftTimerId = setInterval(()=>{
    setObstaclesLeft (obstaclesLeft => obstaclesLeft - 5)
  }, 30)
}
return ()=>{
  clearInterval(obstacleLeftTimerId)
}
}, [obstaclesLeft]);


  return (
    <View style={styles.container}>
      <Bird
      birdBottom={birdBottom}
      birdLeft={birdLeft}
      />
    <Obstacles
    obstacleWidth ={obstacleWidth}
    obstacleHeight = {obstacleHeight}
    gap = {gap}
    obstaclesLeft = {obstaclesLeft}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
