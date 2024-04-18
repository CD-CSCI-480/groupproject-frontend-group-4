import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './src/app/home';
import ProfilePage from './src/app/Profile';
import MediaDetailsScreen from './src/app/MediaDetails';




const HomeStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeScreenStack = ()=> {
  return(
    <HomeStack.Navigator>
      <HomeStack.Screen name='Home' component={HomePage}/>
      <HomeStack.Screen name ="MediaDetails" component={MediaDetailsScreen}/>
    </HomeStack.Navigator>
  )

}

export default function App() {
  return (
     <NavigationContainer>
      <Tab.Navigator initialRouteName='HomeStack'>
          <Tab.Screen name='HomeStack' component={HomeScreenStack}/>
          <Tab.Screen name='Profile' component={ProfilePage}/>
        </Tab.Navigator>
      </NavigationContainer>
    
  );
}


