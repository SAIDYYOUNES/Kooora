import React, { useEffect } from 'react'
import PlayerCard from '../components/PlayerCard'
import { useSelector } from 'react-redux'
import { View, FlatList, ActivityIndicator ,StyleSheet,TextInput} from 'react-native'
import { useDispatch } from 'react-redux'
import { getPlayers } from '../redux/players/actions'

export default function Players() {
  const [text, onChangeText] = React.useState('');
  const [filteredPlayers, setFilteredPlayers] = React.useState(null);
  const dispatch = useDispatch()
  // /** @type {import("../types").} */
  const players = useSelector(state => state.player.players)
  useEffect(() => {
      setFilteredPlayers(players.filter(player => player.player_name.toLowerCase().includes(text.toLowerCase())))

}
  , [text,players])
  useEffect(() => {
    dispatch(getPlayers())
  }, [])
  return (
    <>
    <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="serach for players"
      />
    {players.length>0 ? (
      <View style={{ marginTop: 20 }}>
        <FlatList
          data={filteredPlayers}
          renderItem={({ item }) => {
            return <PlayerCard player={item} />
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
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
