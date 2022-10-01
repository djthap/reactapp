import React, { useEffect, useState } from 'react'
import { View, Text, ActivityIndicator,StyleSheet, ImageBackground,Pressable,Image,FlatList,TouchableOpacity } from 'react-native'
import { getinfo } from '../actions/http';
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from '@expo/vector-icons/Ionicons';
import theme from "../theme/Config";

function NewScreen({route,navigation}) {
    
const [animeDescription, setAnimeDescription] = useState();
const [episodes, setepisodes] = useState([]);
const [checkData, setcheckData] = useState(true);

useEffect(() => {
  let isCancelled =false
  const id  = route.params.id;
  async  function getData(){
    const data = await getinfo(id)
setAnimeDescription(data)
setepisodes(data.episodes.reverse())
setcheckData(false)
  }

  if(!isCancelled){
    getData()
  }
  return () => {
    isCancelled = false
  };
}, []);

async function handleEpisode(id){


  navigation.navigate("WatchVideo", {
    id,
    animeDetails: animeDescription,
    episodeLists : episodes
  })
}


  return (
    <View style={{flex:1}}>
    {
checkData ?( <View style={style.container}>
<ActivityIndicator size="large" color={"red"}/>
</View>):(
<View  style={style.display}>
  
    </View>
  )
}
</View>
  )
}

export default NewScreen;
const style = StyleSheet.create({
    container: {
      flex: 1,
      maxHeight:200,
      backgroundColor:theme.bg.wallpaper,
      borderRadius:50
    
  
    },
    display:{
        flex:1
    }
    
   
  });