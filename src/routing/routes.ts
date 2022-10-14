import {createStackNavigator} from '@react-navigation/stack'

export enum MainRoutes {
 Splash = 'Splash',
 Loading = 'Loading',
 Home = 'Home',
 Settings = 'Settings',
}

export type MainStackParamList = {
 [MainRoutes.Splash]: undefined
 [MainRoutes.Loading]: undefined
 [MainRoutes.Home]: undefined | {update: boolean}
 [MainRoutes.Settings]: undefined
}

export const MainStack = createStackNavigator<MainStackParamList>()