import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Color from '../../Styling Materials/Color'
import AddProduct from './Add/AddProduct'
import AddArea from './Add/AddArea'
import AddShop from './Add/AddShop'

const Creations = () => {
    const [addProduct,setAddProduct]=useState(false)
    const [addShop,setAddShop]=useState(false)
    const [addArea,setAddArea]=useState(false)

    const handleAddshop =()=>{
        setAddShop(true);
        setAddProduct(false)
        setAddArea(false)
    }
    const handleAddProduct =()=>{
        setAddProduct(true)
        setAddShop(false)
        setAddArea(false)
    }
    const handleAddArea=()=>{
        setAddArea(true)
        setAddProduct(false)
        setAddShop(false)
    }

  return (
    <ScrollView >
 
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity style={styles.button} onPress={handleAddshop}>
            <Text style={styles.text}>Add a new Shop</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleAddProduct}>
            <Text style={styles.text}>Add a new Product</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}onPress={handleAddArea}>
            <Text style={styles.text}>Add a new Area</Text>
        </TouchableOpacity>
    </ScrollView>
    {addProduct && <AddProduct/>}
    {addArea && <AddArea/>}
    {addShop && <AddShop/>}
    </ScrollView>
  )
}

export default Creations

const styles = StyleSheet.create({
   
    button:{
        backgroundColor: Color.whitecolor,
        height:55,
        width:120,
        borderRadius:15,
        justifyContent:"center",
        elevation:10,
        margin:15
    },
    container:{
        justifyContent:"center",
        alignItems: "center",
    },
   
    text:{
     textAlign:"center"   ,
     fontSize:13,
     fontWeight:"500"
    },

})