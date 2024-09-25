import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Feed from '../screens/Feed'
import {Feather} from '@expo/vector-icons'

import AgendamentoColeta from '../screens/Agendamento';
import ListagemAgenda from '../screens/ListagemAgend';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
             name="Feed"
             component={Feed}
             options={{
                tabBarIcon: ({ color, size }) => <Feather name="home" color={color} size={size}/>,
                tabBarLabel: 'Início'
             }}
             />
            <Tab.Screen
             name="Agendamento Coleta"
             component={AgendamentoColeta}
             options={{
                tabBarIcon: ({ color, size }) => <Feather name="plus" color={color} size={size}/>,
                tabBarLabel: 'Agendamento Coleta'
             }}
            />    
            <Tab.Screen
             name="Controle Agendamento"
             component={ListagemAgenda}
             options={{
                tabBarIcon: ({ color, size }) => <Feather name="plus" color={color} size={size}/>,
                tabBarLabel: 'Controle Agendamento'
             }}
            />
       
          
        </Tab.Navigator>
    )
}