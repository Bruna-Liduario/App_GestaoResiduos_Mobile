import { createStackNavigator } from '@react-navigation/stack';
import DrawerRoutes from './drawer.routes'

import Welcome from '../login/Welcome';
import SignIn from '../login/SignIn';
import SignUp from '../login/SignUp';

export type RootStackParamList = {
    Welcome: undefined;
    SignIn: undefined;
    Drawer: undefined;
    SignUp: undefined;
  };

const Stack = createStackNavigator<RootStackParamList>();


export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={Welcome} />
            
            <Stack.Screen name="SignIn"component={SignIn} />

            <Stack.Screen name="SignUp" component={SignUp} />

            <Stack.Screen name="Drawer" component={DrawerRoutes} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}