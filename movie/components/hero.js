import { Image, ScrollView, Text, View } from "react-native";
import Card from "./Card";

const Hero = () => {
    return ( 
    <View  className="rounded-full  flex w-full justify-center items-center ">
        <Image className=" rounded-xl  h-[200px] w-[400px]" source={require('../assets/transformers.webp')}/>
    </View> );
}
 
export default Hero;