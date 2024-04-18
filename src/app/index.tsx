import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "./home";
import ProfilePage from "./Profile";
import { View } from "react-native";

const Tab = createBottomTabNavigator();
const startPage = () => {
    return(
         <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomePage}/>
                <Tab.Screen name="Profile" component={ProfilePage}/>
            </Tab.Navigator>
         </NavigationContainer>
         
         )
}

export default startPage;