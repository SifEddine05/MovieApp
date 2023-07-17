import {createStackNavigator} from 'react-navigation-stack' 
import {createAppContainer} from 'react-navigation'
import Home from '../screens/Home'
import Movie from '../screens/MovieScreen'
import Headers from '../components/Headers'

const screens = {
	Home : {
		screen : Home ,   
        navigationOptions : {
            headerTitle: ()=><Headers />
            }
	},
	Movie : {
		screen : Movie  ,
        navigationOptions : {
            headerTitle: ()=><Headers />
            }
	}
}

const HomeStack = createStackNavigator(screens,{
    defaultNavigationOptions: {
      headerTintColor: '#444',
      headerStyle: { backgroundColor: '#1F1C2C', height: 60 ,width:'100%'}
    }}
  )
export default createAppContainer(HomeStack) 
