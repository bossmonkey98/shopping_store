import { ScrollView, StyleSheet, Text, View,Image, TextInput ,FlatList, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AppHeader, Banner, ProductCard } from '../components'
import { Colors } from '../../theme'
import { NavigationProps } from '../../types'
import { DownArrow, SearchIcon } from '../assets/icons'
import axios from 'axios'

const Home = ({navigation}:NavigationProps) => {
  const [isLoading,setIsLoading] = useState<boolean>(false)
  const [products ,setProducts] = useState<any>([])
  const data=[
    {
      id:1,
      name:'Clown Tang.H03',
      price:'325'
    },
    {
      id:2,
      name:'Clown Fish.H03',
      price:'89'
    },
    {
      id:3,
      name:'Gold Fish.H03',
      price:'325'
    },
    {
      id:4,
      name:'Clown Tang.H03',
      price:'325'
    },
]

  useEffect(()=>{
    const fetchData = async()=>{
      setIsLoading(false);
      try{
        const res = await axios.get('https://dummyjson.com/products')
        //@ts-ignore
        setProducts(res.data.products)
        setIsLoading(false)
      }catch(error){
        setIsLoading(false)
        Alert.alert(error+'')
      }
    }
    fetchData()
  },[])
  return (
    <ScrollView style={styles.container}>
      <View style={styles.topContainer}>
        <AppHeader isBackAvailable={false} navigation={navigation} username='Rahul'/>
        <View style={styles.searchWrapper}>
          <Image 
          source={SearchIcon}
          resizeMode='contain'
          />
          <TextInput 
          style={styles.textInput} 
          placeholder='Search Products or store'
          placeholderTextColor='#8891A5'
          />
        </View>
        <View style={styles.Wrapper}>
          <View style={{flex:1,gap:5}}>
            <Text style={styles.textStyle}>DELIVER TO</Text>
            <View style={styles.textIconWrap}>
              <Text style={styles.adressTimeText}>Green Way 3000, Sylhet</Text>
              <Image 
              source={DownArrow}
              resizeMode='contain'
              /> 
            </View>
          </View>
          <View style={{gap:5}}>
            <Text style={styles.textStyle}>WITHIN</Text>
            <View style={styles.textIconWrap}>
              <Text style={styles.adressTimeText}>1 hour</Text>
              <Image 
              source={DownArrow}
              resizeMode='contain'
              /> 
            </View>
          </View>
        </View>
      </View>
      <View style={{paddingHorizontal:20}}>
      <ScrollView 
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{gap:20,paddingVertical:28}}
      >
        <Banner background={Colors.iconActive}/>
        <Banner background='#FFBC6E'/>
      </ScrollView>
      
      <Text style={styles.recomendedText}>Recommended</Text>
      {
      !isLoading &&
      <FlatList
      data={products}
      renderItem={({item})=><ProductCard 
      name={item.title} 
      price={item.price}
      image={item.thumbnail}
      /> }
      numColumns={2}
      contentContainerStyle={styles.flatlist}
      columnWrapperStyle={{gap:20}}
    />}
      </View>
    </ScrollView>
  )
}

const styles =StyleSheet.create({
    container:{
       minHeight:'100%',
    },
    topContainer:{
        height:282,
        backgroundColor:Colors.primary,
        paddingTop:52,
        paddingHorizontal:20,
    },
    searchWrapper:{
      height:56,
      borderRadius:28,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-evenly',
      backgroundColor:'#153075',
      overflow:'hidden',
      paddingRight:30,
      paddingLeft:40,
      marginTop:45,
    },
    searchIcon:{
      height:18,
      width:18,
    },
    textInput:{
      flex:1,
      fontFamily:'Manrope-Medium',
      fontWeight:'500',
      fontSize:14,
      marginLeft:10,
      color:'#FFF',
    },
    Wrapper:{
      flexDirection:'row',
      paddingTop:35,
    },
    textIconWrap:{
      flexDirection:'row',
      alignItems:'center',
      gap:10,
    },
    textStyle:{
      color:'#8891A5',
      fontFamily:'Manrope-Bold',
      fontSize:11,
      fontWeight:'800', 
      letterSpacing:0.8, 
    },
    adressTimeText:{
      color:'#F8F9FB',
      fontFamily:'Manrope-Medium',
      fontWeight:'500',
      fontSize:14,
      lineHeight:19,
    },
    recomendedText:{
      color:Colors.textSceondary,
      fontFamily:'Manrope-Regular',
      fontWeight:'400',
      fontSize:30,
      lineHeight:38,
    },
    flatlist:{
      gap:10,
    }
})

export default Home