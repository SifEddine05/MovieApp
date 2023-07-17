import { Image, ScrollView, StatusBar, Text, View } from "react-native";
import Card from "../components/Card";
import ActorCard from "../components/ActorCard";
import ReviewCard from "../components/ReviewCard";


const Movie = () => {
   
    


    return ( 
    <View className="flex-1 justify-start items-center pt-4 bg-[#1F1C2C] ">
        <StatusBar style="" />
        <ScrollView>
            <Image className="w-[400px] h-[300px] rounded-xl" source={{uri : "https://image.tmdb.org/t/p/w500/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg"}}/>
            <Text className=" text-center text-white text-[20px] font-bold pt-4">Captain America: Civil War </Text>
            <View className="flex justify-center items-center">
                <Text className="text-white opacity-50 mt-2">2023-06-06 | Eng | Action </Text>
                <View className="border-b-2 w-[300px] mt-6 border-white"></View>
            </View>
            <Text className="mt-4 self-start ml-6 text-white text-[18px] font-bold">Story line</Text>
            <Text className="mt-2 ml-6 text-white opacity-50">Political involvement in the Avengers' affairs causes a rift between Captain America and Iron Man. With many people fearing the actions of super heroes, the government decides to push for the Hero Registration Act, a law that limits a hero's actions. This results in a division in The Avengers.</Text>
            
            <Text className="mt-4 self-start ml-6 text-white text-[18px] font-bold">Star cast</Text>
            <ScrollView horizontal={true} className=" pt-4">
                <ActorCard />
                <ActorCard />
                <ActorCard />
                <ActorCard />
                <ActorCard />
            </ScrollView>

            <Text className="mt-6 self-start ml-6 text-white text-[18px] font-bold">Similair</Text>
            <ScrollView horizontal={true} className=" pt-4">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </ScrollView>

            <Text className="mt-6 self-start ml-6 text-white text-[18px] font-bold ">Reviews</Text>
            <ScrollView horizontal={true} className=" pt-4 mb-4">
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                
            </ScrollView>
           
        
        </ScrollView>
        
    </View> );
}
 
export default Movie;



//Riviews 
//Similaire
//actors 