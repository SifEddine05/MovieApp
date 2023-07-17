import { Image, ScrollView,   Keyboard ,StatusBar, Text, View , Modal, TextInput, TouchableOpacity, TouchableWithoutFeedback} from "react-native";
import Headers from "../components/Headers";
import Bar from "../components/ButtonsBar";
import Hero from "../components/hero";
import Movies from "../components/Movies";
import { useState } from "react";
import { FontAwesome } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
const Home = ({navigation}) => {
    const [open,setOpen]=useState(false)
    return ( 
    <View className="flex-1 items-start bg-[#1F1C2C]" >
        <StatusBar style="" />
        <Modal visible={open} >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View className="bg-[#1F1C2C] flex-1">
                    <TouchableOpacity onPress={()=>setOpen(false)}>
                        <View className="flex-row items-center justify-center mb-4 mt-4 ml-3">
                            <AntDesign name="closecircle" size={24} color="white" />
                            <Text className="text-white ml-3 ">Cancel Serach </Text>
                        </View>
                    </TouchableOpacity> 
                <View className="flex-row items-center justify-center  mt-4 ml-3">
                        <TextInput className="bg-slate-300 rounded-xl w-3/4  p-2 mr-6" />
                        <TouchableOpacity>
                            <FontAwesome name="search" size={28} color="white"  />
                        </TouchableOpacity>
                    </View>
                </View>
                </TouchableWithoutFeedback>
        </Modal> 
       
       <Bar setOpen={setOpen}/>
       <ScrollView className="mb-4">
        <Hero />
        <Movies key={1} navigation={navigation}/>
        <Movies key={2} navigation={navigation}/>
        <Movies key={3} navigation={navigation}/>
       </ScrollView>
    </View> );
}
 
export default Home;