import { Text, Touchable, TouchableOpacity } from "react-native";
import { Image, ScrollView, View } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 

const Card = ({navigation}) => {
    return ( 
       <TouchableOpacity className="mx-4 " onPress={()=>{navigation.push('Movie')}}>
          <Image className="w-[150px] h-[200px] rounded-xl" source={{uri : "https://image.tmdb.org/t/p/w500/tBiUXvCqz34GDeuY7jK14QQdtat.jpg"}}/>
          <View className=" bg-slate-400 rounded-lg bg-opacity-25 p-1 flex justify-start items-center flex-row" style={{position: 'absolute',
               right:     3,
               top:      3,}}>
            <AntDesign name="star" size={20} color="yellow"  />
            <Text className="text-white ml-1">4.8</Text>
            
          </View>
         
       </TouchableOpacity>
      
     );
}
 
export default Card;