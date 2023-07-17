import { Image, Text, TouchableOpacity, View } from "react-native";

const ActorCard = () => {
    return ( 
     <TouchableOpacity>
            <View className="ml-4 flex flex-row justify-start items-center  ">
            <Image className="rounded-full w-[70px] h-[80px] " source={{uri : "https://image.tmdb.org/t/p/w500/2Stnm8PQI7xHkVwINb4MhS7LOuR.jpg"}}/>
            <View className="flex justify-around ">
                <Text className="ml-3 text-white opacity-50">Actor</Text>
                <Text className="ml-3 mt-4 text-white ">Anthony Ramos</Text>
            </View>
            </View> 
     </TouchableOpacity>   
   );
}
 
export default ActorCard;