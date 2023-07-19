import { Image, ScrollView,   Keyboard ,StatusBar, Text, View , Modal, TextInput, TouchableOpacity, TouchableWithoutFeedback} from "react-native";
import { FontAwesome } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 

const Search = () => {
    return ( <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            
        <View className="flex-row items-center justify-center  mt-4 ml-3">
                <TextInput className="bg-slate-300 rounded-xl w-3/4  p-2 mr-6" />
                <TouchableOpacity>
                    <FontAwesome name="search" size={28} color="white"  />
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback> );
}
 
export default Search;