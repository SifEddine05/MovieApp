import { Image, Text, View } from "react-native";

const Headers = () => {
    return ( 
    <View className=" bg-[#1F1C2C] p-1 flex-1 w-full flex-row justify-between  items-center" > 
        <Image source={require('../assets/logo.png')} className="w-[150px] h-[50px] "/>
        <Text className="text-white text-[18px] mr-10">Home</Text>
    </View> );
}
 
export default Headers;