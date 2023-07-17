import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Home from './screens/Home';
import Movie from './screens/MovieScreen';
import Navigator from './routes/HomeStack'

export default function App() {
  return (
   <Navigator />
    );
}


