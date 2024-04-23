import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/app/SignIn";
import SignUp from "./src/app/SignUp";
import AppNavigator from "./AppNavigator";
import { UserProvider } from "./src/components/UserProvider";

const LoginStack = createNativeStackNavigator();
const EnterStack =  createNativeStackNavigator();

const LoginScreenStack = () => {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen name="SignIn" component={Login} options={{
        headerStyle:{
          backgroundColor:"#2F2F2F",
          
        },
        headerTitleStyle:{
          color:"white"
        },
      }}/>
      <LoginStack.Screen name="AppNavigator" component={AppNavigator} options={{
        headerShown:false
      }}/>
    </LoginStack.Navigator>
  )
}


export default function App() {
  return(
    <UserProvider >
    <NavigationContainer >
      <EnterStack.Navigator screenOptions={{
        
      }}>
        <EnterStack.Screen name="LoginStack" component={LoginScreenStack} options={{
          headerStyle:{
            backgroundColor:"#2F2F2F",
            
          },
          headerTitleStyle:{
            color:"white"
          },
          headerShown:false
        }}/>
        <EnterStack.Screen name="SignUp" component={SignUp} options={{
          headerStyle:{
            backgroundColor:"#2F2F2F",
            
          },
          headerTitleStyle:{
            color:"white"
          },
        }}/>

      </EnterStack.Navigator>
    </NavigationContainer>
    </UserProvider>
  )
}


