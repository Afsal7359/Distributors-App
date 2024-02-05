import { View, Text, StyleSheet, ScrollView, Touchable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Color from '../../Styling Materials/Color'
import { SearchBar } from 'react-native-elements'
import data from '../../Styling Materials/Data'


const NewOrder = () => {
const Data = data.items
  const [search,setSearch]=useState('');
  return (
     <View>
      <Text style={styles.selectedtext}>Selected Item</Text>
    
      <ScrollView style={styles.selecteditemscroll} showsVerticalScrollIndicator={false}>
      <View style={styles.headingview}>
          <Text style={styles.headingtext}>ITEM(Price)</Text>
          <Text style={styles.headingtext}>Quantity</Text>
          <Text style={styles.headingtext}>Total Price</Text>
        </View>
        
       {Data.map((item)=>(
        <View style={styles.selectitemview}>
          <Text>{item.name}</Text>
          <Text>25</Text>
          <Text>2600</Text>
        </View>
       ))}
      </ScrollView>
       {/* <TouchableOpacity style={styles.buttonContainer}><Text style={styles.buttonText}> View All</Text></TouchableOpacity> */}
      <View>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={(value)=>setSearch(value)}
         value={search} round
    
         containerStyle={{
           backgroundColor: 'transparent', // Set your desired background color
           borderBottomColor: 'transparent', // Hide the border
           borderTopColor: 'transparent', // Hide the border
           paddingHorizontal:30
         }}
         inputContainerStyle={{
           backgroundColor: Color.maincolor, // Set your desired input background color
           borderRadius: 10, // Set your desired input border radius
           height: 40, // Set your desired input height
           width:300,
           
         }}
         inputStyle={{
           color: '#000', // Set your desired input text color
         }}
         placeholderTextColor="#999" // Set your desired placeholder text color
       />
      
      </View>
      <ScrollView style={styles.itemScrollview}>
        <View style={{flexDirection:"row"}}>
      <View style={styles.itemView}>
        <Text>Medmix (25)</Text>
        <Text>Price : ₹ 1500</Text>
        <Text>Q : 15000</Text>
      </View>
      <View style={styles.itemView}>
        <Text>Medmix (25)</Text>
        <Text>Price : ₹ 1500</Text>
        <Text>Q : 15000</Text>
      </View>
      </View>
      <View style={{flexDirection:"row"}}>
      <View style={styles.itemView}>
        <Text>Medmix (25)</Text>
        <Text>Price : ₹ 1500</Text>
        <Text>Q : 15000</Text>
      </View>
      <View style={styles.itemView}>
        <Text>Medmix (25)</Text>
        <Text>Price : ₹ 1500</Text>
        <Text>Q : 15000</Text>
      </View>
      </View>
      <View style={{flexDirection:"row"}}>
      <View style={styles.itemView}>
        <Text>Medmix (25)</Text>
        <Text>Price : ₹ 1500</Text>
        <Text>Q : 15000</Text>
      </View>
      <View style={styles.itemView}>
        <Text>Medmix (25)</Text>
        <Text>Price : ₹ 1500</Text>
        <Text>Q : 15000</Text>
      </View>
      </View>
      <View style={{flexDirection:"row"}}>
      <View style={styles.itemView}>
        <Text>Medmix (25)</Text>
        <Text>Price : ₹ 1500</Text>
        <Text>Q : 15000</Text>
      </View>
      <View style={styles.itemView}>
        <Text>Medmix (25)</Text>
        <Text>Price : ₹ 1500</Text>
        <Text>Q : 15000</Text>
      </View>
      </View>
      <View style={{flexDirection:"row"}}>
      <View style={styles.itemView}>
        <Text>Medmix (25)</Text>
        <Text>Price : ₹ 1500</Text>
        <Text>Q : 15000</Text>
      </View>
      <View style={styles.itemView}>
        <Text>Medmix (25)</Text>
        <Text>Price : ₹ 1500</Text>
        <Text>Q : 15000</Text>
      </View>
      </View>
      <View style={{flexDirection:"row"}}>
      <View style={styles.itemView}>
        <Text>Medmix (25)</Text>
        <Text>Price : ₹ 1500</Text>
        <Text>Q : 15000</Text>
      </View>
      <View style={styles.itemView}>
        <Text>Medmix (25)</Text>
        <Text>Price : ₹ 1500</Text>
        <Text>Q : 15000</Text>
      </View>
      </View>
      
      </ScrollView>
    
    </View>
  )
}
const styles = StyleSheet.create({
  buttonContainer: {
    width: 100,
    padding: 3,
    backgroundColor: Color.maincolor,
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal:105
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
    itemScrollview:{
     height:250
    },
    itemView:{
      width:140,
      height:85,
      borderRadius:15,
      borderWidth:2,
      alignItems:"center",
      justifyContent:"center",
      margin:20,
      backgroundColor:Color.maincolor
    },
    selectedtext:{
        fontSize:15,
        margin:15,
        textAlign:"center",
        fontWeight:"900",
       
    },
    selecteditemscroll:{
      height:155,
      width:"auto",
      marginHorizontal:25,
      borderColor:Color.maincolor,
      borderWidth:1,
      borderRadius:25,

    },
    headingview:{
      flexDirection:'row',
      justifyContent:'space-around',
      margin:15,
    },
    headingtext:{
      fontWeight:"900"
    },
    selectitemview:{
      flexDirection:'row',
      justifyContent:'space-around',
      marginBottom:15,
      color:Color.whitecolor,
    }
})
export default NewOrder