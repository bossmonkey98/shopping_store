import { View, Text, StyleSheet,Image } from 'react-native'
import React from 'react'
import { BannerImg } from '../assets/icons'
import { Colors } from '../../theme'

const Banner = ({background}:{background:string}) => {
  return (
    <View style={{...styles.bannerWrapper,backgroundColor:background}}>
     <Image
     source={BannerImg}
     resizeMode='contain'
     style={styles.bannerImg}
     />
     <View>
        <Text style={styles.getText}>Get</Text>
        <Text style={styles.offersText}>50% OFF</Text>
        <Text style={styles.orderText}>On first 03 order</Text>
     </View>
    </View>
  )
}

const styles = StyleSheet.create({
    bannerWrapper:{
        width:269,
        height:123,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        gap:45,
        borderRadius:16,
    },
    bannerImg:{
        width:68,
        height:68,
        opacity:0.6,
    },
    getText:{
        fontFamily:'Manrope-Regular',
        fontWeight:'300',
        fontSize:20,
        lineHeight:27,
        color:Colors.secondary
    },
    offersText:{
        fontFamily:'Manrope-Bold',
        fontWeight:'800',
        fontSize:26,
        lineHeight:35.5,
        color:Colors.secondary   
    },
    orderText:{
        fontFamily:'Manrope-Regular',
        fontWeight:'300',
        fontSize:13,
        lineHeight:17.76,
        color:Colors.secondary   
    }
})
export default Banner