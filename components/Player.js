
import { Text, StyleSheet, View } from 'react-native'
import { Dimensions } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'


export default function Player({ route }) {
  /** @type {import("../types").Player} */
  const player = route.params.player
  
  return (
    <View >
      <ScrollView style={styles.playerDetails} contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.playerContainer}>
        <Image source={{uri : player.team_picture}} blurRadius={1} style={styles.teamPicture}/>
        
        <Text style={styles.playerName}>{player.player_name}</Text>
        <Image
          source={{uri : player.player_picture}}
          style={{width : 200, aspectRatio: 1, backgroundColor : 'white', borderRadius : 100}}
        />
      </View>
        <View style={{marginBottom : 20}}>
          <Text style={{fontSize : 20, fontWeight : '700'}}>Player Details</Text>
        </View>
        <View style={styles.moreDetails}>
          <View style={styles.box}>
            <Text style={{fontSize : 23,color : '#1d1d1d',  fontWeight : '600',}}>Age</Text>
            <Text style={{fontSize : 30, fontWeight : '600'}}>{player.age}Years</Text>
          </View>
          <View style={styles.box}>
            <Text style={{fontSize : 23,color : '#1d1d1d',  fontWeight : '600',}}>Position</Text>
            <View style={{display : 'flex'}}>
              {
                player.position_short_name.split(",").map((position, index) => (
                  <Text key={index} style={{fontSize : 25, fontWeight : '600'}}>
                    {position.trim()}
                  </Text>
                ))
              }
            </View>
          </View>
        </View>
        
        <View style={{marginBottom : 20, marginTop : 10,}}>
          <Text style={{fontSize : 20, fontWeight : '700'}}>Professional Details</Text>
        </View>
        <View style={styles.moreDetails}>
          <View style={styles.box}>
            <Text style={{fontSize : 23,color : '#1d1d1d',  fontWeight : '600',}}>Skill</Text>
            <Text style={{fontSize : 25, color: 'white', fontWeight : '600', backgroundColor : player.sci_skill_color, borderRadius : 20, alignSelf : 'flex-start', paddingHorizontal : 10}}>{player.sci_skill_smg}</Text>
          </View>
          <View style={styles.box}>
            <Text style={{fontSize : 23, color : '#1d1d1d',  fontWeight : '600',}}>Potential</Text>
            <Text style={{fontSize : 25, color : 'white', fontWeight : '600', backgroundColor : player.sci_potential_color, borderRadius : 20, alignSelf : 'flex-start', paddingHorizontal : 10}}>
              {player.sci_potential_smg}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}


const styles =StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : 'black',
    width : Dimensions.get('screen').width,
    height : Dimensions.get('screen').height,
  },
  playerContainer : {
    width : Dimensions.get('screen').width,
    height : '40%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap : 20,
    padding : 10,
    borderRadius: 10,
  },
  playerDetails : {
    width : Dimensions.get('screen').width,
    height : '100%',
    backgroundColor : 'white',
    marginTop : 20,
    padding : 20,
    borderTopLeftRadius : 30,
    borderTopRightRadius : 30
  },
  playerName : {
    
    color : 'black',
    fontSize : 40,
    textAlign : 'center'
  },
  moreDetails : {
    flex : 1,
    flexDirection : 'row',
    gap : 10,
  },
  box : {
    height : 170, 
    backgroundColor : '#0d0d0d2c', 
    padding : 15,
    borderRadius : 20,
    flex : 1,
    justifyContent : 'space-between',
  },
  scrollViewContent: {
    paddingBottom: 30,
  },
  teamPicture : {
    width : '90%', 
    height : 400,
    aspectRatio : 1,
    position : 'absolute', 
    top : 10, 
    left : 10, 
    opacity : .2,
  }
})