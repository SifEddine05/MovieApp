import { Image, Text, TouchableOpacity, View } from "react-native";

const ActorCard = ({data}) => {
    return ( 
     <TouchableOpacity>
            {data ? <View className="ml-4 flex flex-row justify-start items-center  ">
            <Image className="rounded-full w-[70px] h-[80px] " source={{uri : "https://image.tmdb.org/t/p/w500"+data.profile_path}}/>
            <View className="flex justify-around ">
                <Text className="ml-3 text-white opacity-50">{data.known_for_department}</Text>
                <Text className="ml-3 mt-4 text-white ">{data.name}</Text>
            </View>
            </View> : <Text className="text-white">Loading ... </Text> }
     </TouchableOpacity>   
   );
}
 
export default ActorCard;