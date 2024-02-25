import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Drawer from './Drawer';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Player from '../components/Player';
import Match from '../components/Match';
export default function MainStack() {
  const Stack = createStackNavigator();
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Drawer" component={Drawer} options={{ headerShown: false }} />
      <Stack.Screen options={({ route }) => ({
        title: route.params.match.homeTeam.name + ' VS ' + route.params.match.awayTeam.name,
        // headerRight: () => (
        //   <TouchableOpacity onPress={
        //     () => navigation.navigate('Panier')

        //   } >
        //     <Ionicons style={{ paddingRight: 10 }} name="cart" size={30} color="white" />
        //   </TouchableOpacity>
        // ),
        headerStyle: {
          backgroundColor: 'green',
        },

        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        }
      })}

        name="match" component={Match} />
      <Stack.Screen options={({ route }) => ({
        title: route.params.player.player_name,
       
        headerStyle: {
          backgroundColor: 'green'
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: 'white',
        }
      }
      )} 
       name="player" component={Player} />
      {/* <Stack.Screen name="Achats" component={Achats} /> */}
    </Stack.Navigator>
  )
}
