import { View, Text,Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { BannerImg, HeartIcon } from '../assets/icons';
import { Colors } from '../../theme';

interface ProductCardProps {
    image?:string;
    price:string|number;
    name:string
}

const ProductCard:React.FC<ProductCardProps> = ({image,name,price}) => {
  return (
    <TouchableOpacity style={styles.cardContainer}>
      <View style={styles.imgContainer}>
        <Image style={styles.thumbnail} source={{uri:image}} resizeMode='stretch' />
        <Image source={HeartIcon}/>
      </View>
      <View>
        <View>
        <Text>${price}</Text>
        <Text>{name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    cardContainer:{
        flex:1,
        minWidth: 160,
        height: 194,
        borderRadius:12,
        backgroundColor:Colors.bg,
        marginVertical:10,
        //overflow:'hidden'
    },
    imgContainer:{
      flex:1,
    },
    thumbnail: {
     flex:1,
    },
})
export default ProductCard