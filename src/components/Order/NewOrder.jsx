import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const NewOrder = () => {
  return (
     <View>
      <Text style={styles.selectedtext}>Selected Item</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    selectedtext:{
        fontSize:15,
        margin:15,
    }
})
export default NewOrder