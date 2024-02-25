import React from 'react'
import { Text, StyleSheet, View, Image, Pressable } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Icon from 'react-native-vector-icons/Ionicons'



import { favoriteMatch } from '../redux/matchs/actions'




export default function Match({ route }) {

  const favoris = useSelector(state => state.match.favorited)
  /** @type {import("../types").Match} */
  const match = route.params.match
  const dispatch = useDispatch()
  function addTofavorite() {
    dispatch(favoriteMatch(match))
  }
  return (
    <View style={styles.root}>
      <View key={match.id}>
        <View style={styles.cardContainer}>
          <View style={styles.cardView}>
            <Image style={styles.matchImage} source={{ uri: 'https://api.sofascore.app/api/v1/team/' + match.awayTeam.id + '/image' }} />
            <Text style={styles.secondClub}>{match.awayTeam.name}</Text>

          </View>
          <Text>VS</Text>
          <View style={styles.cardView}>
            <Image style={styles.matchImage} source={{ uri: 'https://api.sofascore.app/api/v1/team/' + match.homeTeam.id + '/image' }} />
            <Text style={styles.firstClub}>{match.homeTeam.name}</Text>
          </View>
        </View>
        <View style={styles.cardFooter}>
          <Image style={styles.matchImageFlug} source={{ uri: 'https://api.sofascore.app/api/v1/unique-tournament/' + match.tournament.uniqueTournament.id + '/image' }} />
          <Text style={styles.dateMatch}>{new Date(match.startTimestamp * 1000).toLocaleDateString()}</Text>
          <Text style={styles.timeMatch}>{new Date(match.startTimestamp * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
          <View style={styles.cardViewSlug}>
            <Text style={styles.matchName}>{match.slug}</Text>
          </View>


        </View>
        <View style={styles.cardScore}>
          <Text style={styles.homeScoreText} >{match.homeScore.normaltime}</Text>
          <Text style={styles.awayScoreText}>{match.awayScore.normaltime}</Text>
          <Pressable onPress={() => addTofavorite()} style={{
            borderColor:'black',
            borderWidth:2
          }}>
            {favoris.includes(match) ? <Icon name='heart' color={'red'} size={40} /> : <Icon name='heart' color={'white'} size={40}  />}
          </Pressable>
        </View>
        <View style={styles.cardViewFlug}>
          <Text style={styles.matchCategoryName}>{match.tournament.category.name}</Text>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  matchesMap: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
    marginTop: 10
  },
  cardContainer: {
    top: 14,
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    padding: 20,
    width: 360,
    height: 100,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 15,
    alignItems: 'center'
  },
  dateMatch: {
    color: 'gray',
    fontSize: 16,
    marginRight: 230,
    bottom: 11
  },
  matchImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginVertical: 10,
  },
  firstClub: {
    fontSize: 10,
    color: 'black',
  },
  secondClub: {
    fontSize: 10,
    color: 'black',
  },
  cardView: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  cardFooter: {
    top: 5,
    backgroundColor: 'white',
    width: 360,
    height: 90,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 15,
    alignItems: 'center'
  },
  cardViewSlug: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  matchImageFlug: {
    width: 30,
    height: 30,
    borderRadius: 10,
    marginVertical: 10,
    top: 20
  },
  matchName: {
    fontSize: 14,
    color: 'black',
    bottom: 18,

  },
  matchCategoryName: {
    fontSize: 10,
    color: 'black',
    bottom: 34,
    left: 138
  },
  cardViewFlug: {
    flexDirection: 'row',
    alignItems: 'center',
    left: 40,
    bottom: 20

  },
  timeMatch: {
    color: 'gray',
    fontSize: 16,
    marginLeft: 150,
    bottom: 34

  },
  root: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  cardScore: {
    top: -4,
    backgroundColor: 'white',
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    width: 360,
    height: 70,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 15,
    alignItems: 'center'
  },
  awayScoreText: {
    color: 'black',
    fontSize: 30,
    right: 40
  },
  homeScoreText: {
    color: 'black',
    fontSize: 30,
    left: 40
  },

});
