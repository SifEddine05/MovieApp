import { Image, Text, TouchableOpacity, View } from "react-native";

const ReviewCard = () => {
    return ( 
    <TouchableOpacity>
        <View className="w-[300px]  bg-slate-500 ml-4 shadow-lg rounded-lg p-2">
            <View className="ml-4 flex flex-row justify-start items-center  ">
                <Image className="rounded-full w-[50px] h-[60px] " source={{uri : "https://secure.gravatar.com/avatar/bf3b87ecb40599290d764e6d73c86319.jpg"}}/>
                <View className='h-[50px] justify-around flex flex-col'>  
                    <Text className="text-white ml-2 font-bold">garethmb</Text>
                    <Text className="text-yellow-200 opacity-50 ml-2">2023-06-06T08:59:11.390Z</Text>
                </View>
            </View>
            <Text className="ml-2">Transformers is the best movie of the franchise ! \r\n\r\nTransformers took everything that worked with Bumblebee . Anthony Ramos and Dominique fishback did a great performance and pete Davinson as mirage stole the show , but the true star is the adsolute best soundtrack of the 90' . I am happy to say that transformers is a lot of fun , the cgi looks pretty good . When I first watched this movie a lot of people were clapping and they laughed a lot . In conclusion , this new transformers movie is the beginning of something much bigger ! Cant wait to see what paramount has in store for us . 9.5/10</Text>
        </View> 
    </TouchableOpacity>
   );
}
 
export default ReviewCard;