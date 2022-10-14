import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { MainRoutes, MainStack } from "./routes";
import HomeScreen from "../screens/HomeScreen";
import SplashScreen from "../screens/SplashScreen";
import AppLoadingScreen from "../screens/AppLoadingScreen";
import SettingsScreen from "../screens/SettingsScreen";
import { useReduxSelector } from "../redux/store";

const MainNavigation = (): React.ReactElement =>
{
 const isLogedIn = useReduxSelector((state) => state.user.login)
 
 return(
  <NavigationContainer>
   <MainStack.Navigator >
    {isLogedIn ? (
     <>
     <MainStack.Screen name={MainRoutes.Home} component={HomeScreen}/>
     <MainStack.Screen name={MainRoutes.Loading} component={AppLoadingScreen}/>
     <MainStack.Screen name={MainRoutes.Settings} component={SettingsScreen}/>
     </>
    ) : (
     <>
     <MainStack.Screen name={MainRoutes.Splash} component={SplashScreen}/>
     </>
    )}
   </MainStack.Navigator>
  </NavigationContainer>
 )
} 

export default MainNavigation