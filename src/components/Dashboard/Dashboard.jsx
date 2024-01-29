import { View, Text, StyleSheet, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import Color from '../../Styling Materials/Color'
import { StatusBar } from 'expo-status-bar'

const Dashboard = () => {
  return (
    <View>
        <StatusBar style="auto" translucent={false} backgroundColor={Color.maincolor}/>
        <View style={styles.topview}></View>
        <TouchableOpacity style={styles.card1}></TouchableOpacity>
        <TouchableOpacity style={styles.card2}></TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    topview:{
        height:280,
        backgroundColor:Color.maincolor,
        borderBottomLeftRadius:160,
        borderBottomRightRadius:160
    },
    card1:{
        backgroundColor:"#fff",
        height:105,
        width:105,
        borderRadius:10,
        position:"absolute",
        top:205,
        left:25,
        elevation:105
    },
    card2:{
        backgroundColor:"#fff",
        height:105,
        width:105,
        borderRadius:10,
        position:"absolute",
        top:205,
        left:205,
        elevation: 105,
    }
})

export default Dashboard