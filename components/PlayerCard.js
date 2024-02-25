import { View, Text, StyleSheet, Image, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const PlayerCard = ({ player}) => {
  // /** @type {import("../types").SofascoreResponse} */
  const navigation = useNavigation()
  return (
    <Pressable onPress={()=>navigation.navigate('player',{player})}  style={({pressed}) => [{backgroundColor : pressed ? "#c2c1c1" : 'white'}, styles.container]}>
      <Image source={{uri:player.team_picture}} style={styles.flag}/>
      <View style={styles.playerInfo}>
        <Text style={styles.playerName}>{player.player_name}</Text>
        <Text style={{color : '#242323', fontSize : 18, fontWeight: '600'}}>Age:{player.age}</Text>
        
      </View>
      <View style={styles.playerPicture}>
        <Image source={{uri:player.player_picture}}  style={{width : 140, height : 150}}/>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection : 'row',
    alignItems: 'center',
    padding : 40,
    width : '90%',
    marginLeft : 'auto',
    marginRight: 'auto',
    borderRadius : 20,
    shadowColor: "#3f02cc",
    shadowRadius: 20,
    elevation: 10,
    borderRadius : 20,
  },
  playerInfo : {
    flex : 2,
    gap : 10,
  },
  playerPicture : {
    flex: 1,
    position : 'relative',
    justifyContent: 'center',
  },
  playerName : {
    fontSize : 30,
    fontWeight : '700'
  },
  stats : {
    flex: 1,
    flexDirection : 'row',
    justifyContent: 'center',
    gap : 10,
  },
  flag : {
    width: 50, 
    height: 40, 
    resizeMode: 'stretch',
    position: 'absolute',
    top : 10,
    right: '26%',
    borderRadius: 10,
  }
})

export default PlayerCard