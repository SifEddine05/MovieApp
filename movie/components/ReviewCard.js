import { Image, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import { ScrollView } from "react-native";

const ReviewCard = ({data}) => {
    return ( 
    <TouchableOpacity>
        {data ? <ScrollView className="w-[300px]  bg-slate-500 ml-4 shadow-lg rounded-lg p-2">
            <View className="ml-4 flex flex-row justify-start items-center  ">
               {data.author_details.avatar_path ? <Image className="rounded-full w-[50px] h-[60px] " source={{uri : "https://secure.gravatar.com/avatar"+data.author_details.avatar_path}}/> : <AntDesign name="user" size={30} color="white" /> }
                <View className='h-[50px] justify-around flex flex-col'>  
                    <Text className="text-white ml-2 font-bold">{data.author}</Text>
                    <Text className="text-yellow-200 opacity-50 ml-2">{data.created_at}</Text>
                </View>
            </View>
            <View style={{  }}>
            <ScrollView>
                <Text className="ml-2 ">{data.content}</Text>
            </ScrollView>
            </View>

                
            
           
        </ScrollView> : <Text className="text-white">Loading ... </Text> }
    </TouchableOpacity>
   );
}
 
export default ReviewCard;