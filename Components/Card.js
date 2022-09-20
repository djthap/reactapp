import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TextInput,
    Button,
    FlatList,
    Pressable,
    useWindowDimensions
  } from "react-native";
  import { useFonts } from 'expo-font';
function Card ({item ,OnClick,id}){
  const {width,height} =useWindowDimensions()
  

  let imageSize=140

  if(width<380){
    imageSize:80
  }
  if(height<400){
    imageSize:80
  }

  const imageStyle= {
    height:100,
    width:100,
    // flex:1
  
  }
  // console.log(props)
    return(
        <View style={styles.box}>
<View style={styles.view}>


        <Text style={styles.heading2}  
        // numberOfLines={1} 
        // adjustsFontSizeToFit={true} 
        >{`${item.title.substr(0, 10)}...`}</Text>
        <Pressable 
        onPress={()=>OnClick(item.id)}
        style={({pressed})=> pressed && styles.selected}
        >

        <Image
          style={imageStyle}
          source={{
            uri: item.image,
          }}
          />
        <Text style={{color:"white"}}>{item.releaseDate}</Text>
            </Pressable>
          </View>
      </View>
    )
}
export default Card;

const styles = StyleSheet.create({
 
    heading2: {
      fontSize: 20,
      width: "100%",
      textAlign: "center",
      color:"black",
flex:1,
        fontFamily: "hel-v2",
        fontSize: 16,
        marginLeft: 0
    
    },
    text: {
      fontSize: 40,
      fontfamily: "cursive",
      alignContent: "center",
      justifyContent: "center",
      width: "100%",
      textAlign: "center",
    },
    box: {
      
      borderWidth: 1,
      flex:1,
      borderColor: "black",
      justifyContent:"space-between",
      alignItems:"center",
      margin: 5
    },
    selected:{
      opacity:0.5
    }
 ,
 view:{
  justifyContent:"center",
  alignItems:"center",
  maxWidth:"100%",
  flex:1
  
 }
  
  });
  