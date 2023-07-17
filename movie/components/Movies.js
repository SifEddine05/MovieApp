import { ScrollView, Text, View } from "react-native";
import Card from "./Card";

const Movies = ({navigation}) => {
    return ( 
    <View className="h-fit pt-6">
        <Text className="self-w-full start pl-3  text-white text-[28px] font-bold">Popular</Text>
        <ScrollView horizontal={true} className=" pt-4">
            <Card navigation={navigation}/>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </ScrollView>
    </View> );
}
 
export default Movies;
