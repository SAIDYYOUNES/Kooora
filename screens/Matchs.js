import React, { useEffect, useState } from 'react'
import { View, ActivityIndicator, Text, Image, Pressable, Button  } from 'react-native'
import { FlatList } from 'react-native'
// import { FlatList } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'
import MatchCard from '../components/MatchCard'
import { useDispatch } from 'react-redux'
import { getMatchs, getTournaments } from '../redux/matchs/actions'
import Animated from 'react-native-reanimated'

export default function Matchs() {
  
  /** @type {import("../types").SofascoreResponse} */
  const matchs = useSelector(state => state.match.matchs)
  const dispatch = useDispatch()

 
  useEffect(() => {
    dispatch(getMatchs())
    
  }, [])
  return (
    <>
      
      {matchs ? (
        <View style={{ marginTop: 20 }}>
          <FlatList
            data={matchs}
            renderItem={({ item }) => {
              return <MatchCard match={item} />
            }}
            ItemSeparatorComponent={() => <View style={{ height: 30 }} />}
            keyExtractor={item => item.id}
          />
        </View>
      ) : (
        <View style={{ marginTop: 200 }}>

          <ActivityIndicator size="large" />
        </View>
      )}
    </>
  )
}
