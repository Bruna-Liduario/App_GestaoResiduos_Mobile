import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Feed from '../screens/Feed'
import {Feather} from '@expo/vector-icons'
import NotificacaoColeta from '../screens/NotificacaoColeta';
import AgendamentoColeta from '../screens/Agendamento';

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
             name="Notificação Coleta"
             component={NotificacaoColeta}
             options={{
                tabBarIcon: ({ color, size }) => <Feather name="plus" color={color} size={size}/>,
                tabBarLabel: 'Notificação Coleta'
             }}
            />
       
          
        </Tab.Navigator>
    )
}