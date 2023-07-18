import { Text, Touchable, TouchableOpacity } from "react-native";
import { Image, ScrollView, View } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 

const Card = ({navigation,data}) => {
    return ( 
      <View>
        {data ? <TouchableOpacity className="mx-4 " onPress={()=>{navigation.push('Movie',{id:data.id})}}>
          <Image className="w-[150px] h-[200px] rounded-xl" source={{uri : "https://image.tmdb.org/t/p/w500"+data.poster_path}}/>
          <View className=" bg-slate-400 rounded-lg bg-opacity-25 p-1 flex justify-start items-center flex-row" style={{position: 'absolute',
               right:     3,
               top:      3,}}>
            <AntDesign name="star" size={20} color="yellow"  />
            <Text className="text-white ml-1">{data.vote_average}</Text>
            
          </View>
         
       </TouchableOpacity> : <Text className="text-white"> Loading ... </Text>}
      </View>
       
      
     );
}
 
export default Card;