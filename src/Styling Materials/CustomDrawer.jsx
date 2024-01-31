// CustomDrawer.js

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      {/* Your custom header */}
      <View style={styles.header}>
        {/* <Text style={styles.headerText}>App Name</Text> */}
        <Image style={styles.headerImage} source={require("../../assets/profile.png")} />
      </View>

      {/* Original drawer items */}
      <DrawerItemList {...props} />

      {/* Your custom footer */}
      <TouchableOpacity
        style={styles.footer}
        onPress={() => {
          // Add your custom action here
        }}
      >
        <Text style={styles.footerText}>Custom Footer</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems:"center"
  },
  headerImage: {
  height:95,
  width:95,
   marginVertical:25
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  footerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CustomDrawer;
