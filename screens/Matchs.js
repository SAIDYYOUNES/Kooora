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
  
  const [Tournament, setTournament] = useState(null);
  const [filtredMatchs, setFiltredMatchs] = useState(null);
  /** @type {import("../types").SofascoreResponse} */
  const matchs = useSelector(state => state.match.matchs)
  const tournaments = useSelector(state => state.match.tournaments)
  const dispatch = useDispatch()
  const selectTournament = (id) => {
    setTournament(id)
    
  }
  useEffect(() => {
    if(matchs){
    if (Tournament) {
      setFiltredMatchs(matchs.events.filter(match => match.tournament.uniqueTournament.id === Tournament))
    } else {
      setFiltredMatchs(matchs.events)
    }}

  }, [Tournament, matchs])
  useEffect(() => {
    dispatch(getMatchs())
    dispatch(getTournaments())
  }, [])
  return (
    <>
      <View style={{ marginTop: 30 }}>
        <View 
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 10,
        }}
        >
          <Button title="All" onPress={() => setTournament(null)} />
          <FlatList
            data={tournaments}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                <Pressable
                  onPress={() => selectTournament(item.id)}
                >
                  <View
                    style={{
                      borderRadius: 30,
                      // backgroundColor: 'white',
                      height: 100,
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginHorizontal: 10,
                    }}>
                    <Text style={{ maxWidth: 120, textAlign: 'center' }}>{item.name}</Text>
                    <Image
                      source={{ uri: 'https://api.sofascore.com/api/v1/unique-tournament/' + item.id + '/image' }}
                      style={{ width: 70, height: 70, borderRadius: 50 }}
                    />
                  </View>
                </Pressable>
              );
            }}
          />
        </View>
      </View>
      {filtredMatchs ? (
        <View style={{ marginTop: 20 }}>
          <FlatList
            data={filtredMatchs}
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
