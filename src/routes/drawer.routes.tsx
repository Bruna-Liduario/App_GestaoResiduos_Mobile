import { createDrawerNavigator } from '@react-navigation/drawer';
import {Feather} from '@expo/vector-icons'

import TabRoutes from './tab.routes';
import PapelScreen from '../screens/PapelScreen';
import PlasticoScreen from '../screens/PlasticoScreen';
import VidroScreen from '../screens/VidroScreen';
import MetalScreen from '../screens/MetalScreen';
import MadeiraScreen from '../screens/MadeiraScreen';
import PilhaScreen from '../screens/PilhaScreen';
import OrganicoScreen from '../screens/OrganicoScreen';
import HospitalarScreen from '../screens/HospitalarScreen';
import RadioativoScreen from '../screens/RadioativoScreen';


const Drawer = createDrawerNavigator();

export default function DrawerRoutes(){
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name="Informações"
                component={TabRoutes}
                options={{
                    drawerIcon: ({ color, size }) => <Feather name="home" color={color} size={size}/>,
                    drawerLabel: 'Início'
                    
                }}
            />
            <Drawer.Screen
                name="Papel"
                component={PapelScreen}
                options={{
                    drawerIcon: ({ color, size }) => <Feather name="repeat" color={color} size={size}/>,
                    drawerLabel: 'Papel'
                }}
            />
            <Drawer.Screen
                name="Plastico"
                component={PlasticoScreen}
                options={{
                    drawerIcon: ({ color, size }) => <Feather name="repeat" color={color} size={size}/>,
                    drawerLabel: 'Plástico'
                }}
            />
            <Drawer.Screen
                name="Vidro"
                component={VidroScreen}
                options={{
                    drawerIcon: ({ color, size }) => <Feather name="repeat" color={color} size={size}/>,
                    drawerLabel: 'Vidro'
                }}
            />
            <Drawer.Screen
                name="Metal"
                component={MetalScreen}
                options={{
                    drawerIcon: ({ color, size }) => <Feather name="repeat" color={color} size={size}/>,
                    drawerLabel: 'Metal'
                }}
            />
            <Drawer.Screen
                name="Madeira"
                component={MadeiraScreen}
                options={{
                    drawerIcon: ({ color, size }) => <Feather name="repeat" color={color} size={size}/>,
                    drawerLabel: 'Madeira'
                }}
            />
            <Drawer.Screen
                name="Pilhas e Baterias"
                component={PilhaScreen}
                options={{
                    drawerIcon: ({ color, size }) => <Feather name="repeat" color={color} size={size}/>,
                    drawerLabel: 'Pilhas e Baterias'
                }}
            />            
            <Drawer.Screen
                name="Lixo Orgânico"
                component={OrganicoScreen}
                options={{
                    drawerIcon: ({ color, size }) => <Feather name="repeat" color={color} size={size}/>,
                    drawerLabel: 'Lixo Orgânico'
                }}
            />
            <Drawer.Screen
                name="Lixo Hospitalar"
                component={HospitalarScreen}
                options={{
                    drawerIcon: ({ color, size }) => <Feather name="repeat" color={color} size={size}/>,
                    drawerLabel: 'Lixo Hospitalar'
                }}
            />
            <Drawer.Screen
                name="Lixo Radioativo"
                component={RadioativoScreen}
                options={{
                    drawerIcon: ({ color, size }) => <Feather name="repeat" color={color} size={size}/>,
                    drawerLabel: 'Lixo Radioativo'
                }}
            />
            
        </Drawer.Navigator>
    )
}