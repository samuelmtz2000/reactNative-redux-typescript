import React from 'react'
import { Button, Text } from 'react-native'
import { setLogin } from '../redux/ducks/user'
import { useReduxDispatch } from '../redux/store'
import { MainRoutes } from '../routing/routes'
import { MainNavigationProp } from '../routing/types'

type HomeScreenProps = {
  navigation: MainNavigationProp<MainRoutes.Home>
}

const HomeScreen = ({navigation}:HomeScreenProps) : React.ReactElement => {
  const dispatch = useReduxDispatch()
  const logout = () => {
    dispatch(setLogin(false))
  }
  return (
    <>
    <Text>Welcome!</Text>
    <Button title="Logout" onPress={() => logout()} />
    <Button title='Go to Settings' onPress={() => navigation.navigate(MainRoutes.Settings)} />
    </>
  )
}

export default HomeScreen