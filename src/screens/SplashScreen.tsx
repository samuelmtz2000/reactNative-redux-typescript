import React from 'react'
import { Text, TouchableWithoutFeedback, View, StyleSheet } from 'react-native'
import { setLogin } from '../redux/ducks/user'
import { useReduxDispatch } from '../redux/store'

const SplashScreen = () => {
  const dispatch = useReduxDispatch()

  const handleClick = () => {
    dispatch(setLogin(true))
  }

  return (
    <TouchableWithoutFeedback onPress={() => handleClick()}>
            <View style={styles.page}>
                <View style={styles.titleBox}>
                    <Text>ALL BITS EQUAL</Text>
                    <Text>presents</Text>
                    <Text>The Expo Starter Kit</Text>
                </View>
                <View style={styles.contentBox}>
                    <Text>Touch Screen to start!</Text>
                </View>
                <View style={styles.footer}>
                    <Text>written by Konrad Abe</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleBox: {
        width: '100%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentBox: {
        width: '100%',
        height: '45%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    footer: {
        width: '100%',
        height: '10%',
        paddingRight: '3%',
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
})


export default SplashScreen