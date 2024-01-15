import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { Colors } from '../../theme'
import { BagIcon } from '../assets/icons'
import {NavigationFunction} from '../../types'

interface AppHeaderProps {
  isBackAvailable:boolean,
  username:string,
  navigation:NavigationFunction
}
const AppHeader:React.FC<AppHeaderProps> = ({isBackAvailable,username,navigation}) => {
  const bagColor = isBackAvailable?Colors.iconBg:Colors.secondary;
  return (
    <View style={styles.headerContainer}>
      {isBackAvailable?
      <Image source={BagIcon}/>:
        <Text style={styles.user}>Hey, {username}</Text>
    }
    <TouchableOpacity style={{position:'relative'}} onPress={()=>navigation?.navigate('Cart')}>
    <Image 
    source={BagIcon} 
    style={styles.BagIcon} 
    resizeMode='contain'
    tintColor={bagColor}
    />
    <View style={styles.cartCount}>
      <Text style={styles.countText}>3</Text></View>
    </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  headerContainer:{
    height:30,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  user:{
    fontFamily:'Manrope-SemiBold',
    fontSize:22,
    color:Colors.secondary,
    lineHeight:30.05,
  },
  BagIcon:{
    height:24,
    width:24,
  },
  cartCount:{
    height:24,
    width:24,
    borderRadius:50,
    backgroundColor:Colors.iconActive,
    justifyContent:'center',
    alignItems:'center',
    position:'absolute',
    bottom:9,
    left:8,
  },
  countText:{
    fontFamily:'Manrope-SemiBold',
    color:Colors.secondary,
    fontSize:14,
  }
})
export default AppHeader