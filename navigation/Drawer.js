import { createDrawerNavigator } from '@react-navigation/drawer';

import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import Matchs from '../screens/Matchs';
import Players from '../screens/Players';
import Favoris from '../screens/Favoris';
export default function Drawer({ navigation }) {
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: 'green',
            },
            headerRightContainerStyle: {
                paddingRight: 10
            },
            headerTintColor: 'white',
        }}>
            <Drawer.Screen options={{
                title: 'Matchs',
                headerStyle: {
                    backgroundColor: 'green'
                },
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    color: 'white',
                },
                drawerIcon: () => <Ionicons name="football" size={30} color="black" />

            }} name="matchs" component={Matchs} />
            <Drawer.Screen options={{
                title: 'Players',
                headerStyle: {
                    backgroundColor: 'green'
                },
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    color: 'white',
                },
                drawerIcon: () => <Ionicons name="person" size={30} color="black" />

            }} name="players" component={Players} />
            <Drawer.Screen options={{
                title: 'Favoris',
                headerStyle: {
                    backgroundColor: 'green'
                },
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    color: 'white',
                },
                drawerIcon: () => <Ionicons name="heart" size={30} color="black" />

            }} name="favoris" component={Favoris} />
        </Drawer.Navigator>
    )
}
