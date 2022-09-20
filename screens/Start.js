import {React,useState,useRef,useEffect} from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  Button,
  FlatList,
  Modal,
  Alert,
  SafeAreaView,
  Dimensions,
  useWindowDimensions,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  Pressable,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Carousel from 'react-native-anchor-carousel';
import { getTrending, SearchAnime } from "../actions/http";
import Card from "../Components/Card";
import ModalCard from "../Components/ModalCard";

export default function Start({ navigation }) {
const [loading, setloading] = useState(true);
const [trendingData, settrendingData] = useState([]);
    useEffect(() => {
        let isCancelled =false
      
        async  function getData(){
          const data = await getTrending()
  settrendingData(data)
  console.log(data)
     setloading(false)
        }
      
        if(!isCancelled){
          getData()
        }
        return () => {
          isCancelled = false
        };
      }, []);
      
  return (
    <View style={{flex:1}}>
<View style={style.container}>

      <Text style={style.heading}>Amitrasu</Text>
      <Pressable onPress={()=>navigation.navigate("Search")} style={{ position:"absolute", right: "3%" ,top:"65%",width:"12%"}}>
              <Ionicons name="search" size={40} color="black" />
          </Pressable>
</View>
          
<View style={{flex:1}}>
    {
      loading?<View style={{flex:1,justifyContent:"center"}}>
        <ActivityIndicator  color={"red"} size={45}/>

      </View>:<View style={{flex:1}}>

<Text style={{flex:1}}>
  <Image source={{uri:trendingData}}></Image>
  {trendingData}
</Text>
      </View>
    }
</View>
    </View>

  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "7%",
    height:"9%",
    maxHeight:"9%"
  },
  heading: {
    flex: 1,
    fontSize: 36,
    textAlign: "center",
    fontFamily: "pop-regular",
  },
});
