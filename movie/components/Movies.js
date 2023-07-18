import { ScrollView, Text, View } from "react-native";
import Card from "./Card";

const Movies = ({navigation,title ,data}) => {
    return ( 
    <View className="h-fit pt-6">
        <Text className="self-w-full start pl-3  text-white text-[28px] font-bold">{title}</Text>
        <ScrollView horizontal={true} className=" pt-4">
            {data.results.map((elem)=>{
                return(<Card navigation={navigation}  data={elem} />)
            })}  
        </ScrollView>
    </View> );
}
 
export default Movies;
