import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes';
import { StatusBar } from 'react-native';

export default function App() {
    return (
      <NavigationContainer>
         <StatusBar barStyle="dark-content" backgroundColor="#fff" />
         <Routes />
      </NavigationContainer>
     
    );
  }

