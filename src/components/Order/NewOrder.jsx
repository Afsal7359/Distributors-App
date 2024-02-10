import { View, Text, StyleSheet, ScrollView, Touchable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Color from '../../Styling Materials/Color'
import { SearchBar } from 'react-native-elements'
import data from '../../Styling Materials/Data'


const NewOrder = () => {

  const [search,setSearch]=useState('');
 
  return (
     <View>
      <Text style={styles.selectedtext}>Selected Item</Text>
    
      <ScrollView style={styles.selecteditemscroll} showsVerticalScrollIndicator={false}>
        <View style={{alignItems:"center"}}>
      <View style={styles.headingview}>
          <Text style={styles.headingtext}>ITEM(Price)</Text>
          <Text style={styles.headingtext}>Quantity</Text>
          <Text style={styles.headingtext}>Total Price</Text>
        </View>
        
        {data.map((item, index) => (
        <View key={index} style={styles.selectitemview}>
          <Text>Name: {item.name}</Text>
          <Text>Price: {item.price}</Text>
          <Text>Stock: {item.stock}</Text>
        </View>
      ))}
      </View>
      </ScrollView>
       {/* <TouchableOpacity style={styles.buttonContainer}><Text style={styles.buttonText}> View All</Text></TouchableOpacity> */}
      <View style={{alignItems:"center"}}>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={(value)=>setSearch(value)}
         value={search} round
    
         containerStyle={{
           backgroundColor: 'transparent', // Set your desired background color
           borderBottomColor: 'transparent', // Hide the border
           borderTopColor: 'transparent', // Hide the border
           paddingHorizontal:30,
          
         }}
         inputContainerStyle={{
           backgroundColor: Color.whitecolor, // Set your desired input background color
           borderRadius: 10, // Set your desired input border radius
           height: 40, // Set your desired input height
           width:300,
           shadowColor: '#000',
           shadowOffset: { width: 0, height: 2 },
           shadowOpacity: 0.5,
           shadowRadius: 2,
           elevation: 5, 
           
         }}
         inputStyle={{
           color: '#000', // Set your desired input text color
         }}
         placeholderTextColor="#999" // Set your desired placeholder text color
       />
      
      </View>
      <ScrollView style={styles.itemScrollview}>
      <View style={styles.productcontainer}>
      {data.map((item, index) => (
        <View key={index} style={styles.itemView}>
          <Text style={styles.itemText}>Name: {item.name}</Text>
          <Text>Price: {item.price}</Text>
          <Text>Stock: {item.stock}</Text>
        </View>
      ))}
    </View>
    
      
      </ScrollView>
    <TouchableOpacity style={styles.savebtn}>
      <Text>Save   ₹.20000</Text>
    </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  savebtn:{
    backgroundColor:Color.maincolor,
    width:"50%",
    alignItems:"center",
    justifyContent:"center",
    alignContent:"center",
    marginTop:10,
    marginHorizontal:"25%",
    height:45,
    borderRadius:10,

  },
  productcontainer:{
    flexDirection: 'row',
    flexWrap: 'wrap', 
    justifyContent: 'space-between', 
    paddingHorizontal: 16,
  },
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
     height:350
    },
    itemView:{
      width:120,
      height:85,
      borderRadius:15,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.5,
      shadowRadius: 2,
      elevation: 5, 
      alignItems:"center",
      justifyContent:"center",
      margin:15,
      backgroundColor:Color.whitecolor 
    },
    selectedtext:{
        fontSize:15,
        margin:15,
        textAlign:"center",
        fontWeight:"900",
       
    },
    selecteditemscroll:{
      height:200,
      width:"auto",
      marginHorizontal:25,
      borderColor:Color.maincolor,
      borderWidth:1,
      borderRadius:25,
      marginBottom:5,
      paddingBottom:10
    },
    headingview:{
      flexDirection:'row',
      justifyContent:'space-around',
      width:"90%",
      marginVertical:"2%",
      height:35,
      backgroundColor:Color.whitecolor,
      alignItems:"center",
      borderRadius:10
    },
    headingtext:{
      fontWeight:"900"
    },
    selectitemview:{
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:"center",
      marginBottom:15,
      width:"90%",
      color:Color.whitecolor,
      height:35,
      backgroundColor:Color.whitecolor,
      borderRadius:10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 5, 
    }
})
export default NewOrder