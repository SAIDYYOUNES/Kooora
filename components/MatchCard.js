import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import { format } from 'date-fns'
import { useDispatch } from 'react-redux'
import { favoriteMatch } from '../redux/matchs/actions'
import { useSelector } from 'react-redux'
const MatchCard = (props) => {
  const dispatch = useDispatch()
  /** @type {import("../types").Match} */
  const match = props.match
  const navigation = useNavigation()
  const favoris =  useSelector(state => state.match.favorited)
  function addTofavorite(){
    dispatch(favoriteMatch(match))
  }
  
  return (
    <Pressable style={{height: 200}}
     onPress={() => navigation.navigate('match', { match })}
     >
      <View style={styles.container}>
        <View style={{ flex: 1, flexDirection: 'row', gap: 10, justifyContent: 'center' }}>
          
          <Text style={styles.text}>{match.tournament.name}</Text>
        </View>
        <View style={styles.cardMatch}>
          <View
          style={{alignItems:'center'}}
          >
            <Image
              source={{ uri: 'https://api.sofascore.app/api/v1/team/' + match.homeTeam.id + '/image' }}
              style={styles.teamImg}
            />
            <Text style={styles.text}>{match.homeTeam.name}</Text>
          </View>
          <Text style={styles.text}>VS</Text>
          <View 
          style={{alignItems:'center'}}
          >
            <Image
              source={{ uri: 'https://api.sofascore.app/api/v1/team/'+match.awayTeam.id+'/image' }}
              style={styles.teamImg}
            />
            <Text style={styles.text}>{match.awayTeam.name}</Text>
          </View>
        </View>
        <View style={styles.hr}></View>
        <View style={styles.calendar}>
          <View style={{ flexDirection: 'row', gap: 5 }}>
            <Icon name='calendar' color={'white'} size={20} />
            <Text style={styles.text}>{format(new Date(match.startTimestamp*1000), "yyyy-MM-dd")}</Text>
          </View>
          <View style={{ flexDirection: 'row', gap: 5 }}>
            <Pressable onPress={() => addTofavorite()}>
              { favoris.includes(match) ?<Icon name='heart' color={'red'} size={40} /> :<Icon name='heart' color={'white'} size={40} />}
            </Pressable>
          </View>
          <View style={{ flexDirection: 'row', gap: 5 }}>
            <Icon name='time' color={'white'} size={20} />
            <Text style={styles.text}>{format(new Date(match.startTimestamp*1000), "HH-mm")}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    backgroundColor: 'black',
    padding: 20,
    borderRadius: 20,
  },
  cardMatch: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingBottom:20
  },
  text: {
    color: 'white',
    fontSize: 15,
    
  },
  teamImg: {
    width: 60,
    height: 60,
  },
  hr: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
    height: 1,
    backgroundColor: 'white',
  },
  calendar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})

export default MatchCard