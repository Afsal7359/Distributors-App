import { View, Text, StyleSheet, Touchable, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Color from '../../Styling Materials/Color'
import { StatusBar } from 'expo-status-bar'
import imageneworder from "../../../assets/neworder.png"
import orderhistoryimg from "../../../assets/ordershistory.png"
import productsimage from "../../../assets/product.png";
import reportimg from "../../../assets/report.png";
import CircularProgress from 'react-native-circular-progress-indicator';

const Dashboard = ({navigation}) => {
    const [user,setuser]=useState("Afsal")
    
  return (
    <View>
        <StatusBar style="auto" translucent={false} backgroundColor={Color.maincolor}/>
        <View style={styles.topview}> 
        <View style={styles.progressbar}>
        <CircularProgress
          value={15666}
          radius={50}
          duration={2000}
          activeStrokeColor={'#f39c12'}
          inActiveStrokeColor={'#fff'}
          progressValueColor={'#fff'}
          maxValue={20000}
          title={"Target"}
          titleColor={'white'}
          titleStyle={{fontWeight: 'bold'}}
          /></View>
             <Text style={styles.nametext}>{user}</Text>
        </View>
        <TouchableOpacity style={styles.card1} onPress={()=> navigation.navigate('New Order')}>
            <Image style={styles.neworderimg} source={imageneworder}/> 
            <Text style={styles.cardText}>New Order</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card2}>
            <Image style={styles.orderhistoryimg} source={orderhistoryimg}/>
            <Text style={styles.cardText}>Orders History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card3}>
        <Image style={styles.neworderimg} source={productsimage}/> 
            <Text style={styles.cardText}>All Products</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card4}>
        <Image style={styles.orderhistoryimg} source={reportimg}/>
            <Text style={styles.cardText}>Reports</Text>
        </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    topview:{
        height:280,
        backgroundColor:Color.maincolor,
        borderBottomLeftRadius:160,
        borderBottomRightRadius:160,
        alignItems:"center",
        justifyContent:"center"
    },
    nametext:{
        color:"#fff",
        marginBottom:60,
        fontWeight:"900",
    },
   
    card1:{
        backgroundColor:"#fff",
        height:135,
        width:135,
        borderRadius:10,
        position:"absolute",
        top:205,
        left:25,
        elevation:105
    },
    card2:{
        backgroundColor:"#fff",
        height:135,
        width:135,
        borderRadius:10,
        position:"absolute",
        top:205,
        left:205,
        elevation: 105,
    },
    cardText:{
        fontSize:15,
        textAlign:"center",
    },
    neworderimg:{
        marginHorizontal:35,
        marginVertical:20
    },
    orderhistoryimg:{
        height:60,
        width:60,
        marginHorizontal:35,
        marginVertical:15
    },
    card3:{
        backgroundColor:"#fff",
        height:135,
        width:135,
        borderRadius:10,
        position:"absolute",
        top:405,
        left:25,
        elevation:105
    },
    card4:{
        backgroundColor:"#fff",
        height:135,
        width:135,
        borderRadius:10,
        position:"absolute",
        top:405,
        left:205,
        elevation:105
    },
    progressbar:{
       marginBottom:10
       
    }


})

export default Dashboard