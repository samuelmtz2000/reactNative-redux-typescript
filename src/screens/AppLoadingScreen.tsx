import React, { useEffect } from 'react'
import { Text , StyleSheet, View} from 'react-native'
import { MainRoutes } from '../routing/routes'
import { MainNavigationProp } from '../routing/types'

type AppLoadingScreenProps = {
  navigation: MainNavigationProp<MainRoutes.Loading>
}

const AppLoadingScreen = ({navigation}: AppLoadingScreenProps): React.ReactElement => {
  useEffect (() => {
    setTimeout(() => {
      navigation.navigate(MainRoutes.Home)
    }, 2000)
  }, [navigation])
  return (
        <View style={styles.page}>
            <Text>loading...</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
export default AppLoadingScreen