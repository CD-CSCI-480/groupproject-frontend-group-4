import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './src/app/home';
import ProfilePage from './src/app/Profile';
import MediaDetailsScreen from './src/app/MediaDetails';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const HomeStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeScreenStack = ()=> {
  return(
    <HomeStack.Navigator>
      <HomeStack.Screen name='Home' component={HomePage} options={{
        headerStyle:{
          backgroundColor:"#2F2F2F",
          
        },
        headerTitleStyle:{
          color:"white"
        }
      }} />
      <HomeStack.Screen name ="MediaDetails" component={MediaDetailsScreen}/>
    </HomeStack.Navigator>
  )

}

export default function App() {
  return (
     <NavigationContainer>
      <Tab.Navigator initialRouteName='HomeStack' screenOptions={{
        
        tabBarStyle:{
          backgroundColor:"#2F2F2F",
        
        },
        tabBarActiveTintColor:"#EE731B"
      }} >
          <Tab.Screen name='HomeStack' component={HomeScreenStack} options={{
            headerShown:false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
  

             }}/>
          <Tab.Screen name='Profile' component={ProfilePage} options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
          
            ),
          
          }}/>
        </Tab.Navigator>
      </NavigationContainer>
    
  );
}


