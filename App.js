import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

import Bird from './components/Bird';

export default function App() {
  const screenWidth = Dimensions.get("screen").width;
  const screenHeight = Dimensions.get("screen").height;
  const birdLeft =screenWidth / 2;
  const [birdBottom, setBirdBottom]= useState(screenWidth/2);
  const gravity = 3;
  let gameTimerId ; // we decalring it as global varibale so we can acess this from every where.

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

  return (
    <View style={styles.container}>
      <Bird
      birdBottom={birdBottom}
      birdLeft={birdLeft}
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
