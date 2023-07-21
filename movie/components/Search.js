import { Image, ScrollView,   Keyboard ,StatusBar, Text, View , Modal, TextInput, TouchableOpacity, TouchableWithoutFeedback, Alert} from "react-native";
import { FontAwesome } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { useState } from "react";

const Search = ({setOpen , open,setMovies1}) => {

    const [SrhValue,setSrhValue]=useState('')
   const handleCancel =()=>{
    setOpen(false)
    setMovies1(null)
    setSrhValue('')
   }
    const handleSearch = ()=>{
        setOpen(true)
        
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDI0N2FkMTk5YTgyYzBkZTY1NTVmNzFjZDAwNmFlNSIsInN1YiI6IjY0YjNlNWYyMGJiMDc2MDEwYzUxNDQ1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ks0LpIAdWN76Lxwp4vgWOmLYGZAf7ZOULFPYqnNOK0M'
            }
          };
        
        fetch('https://api.themoviedb.org/3/search/movie?query='+SrhValue, options)
        .then(response => response.json())
        .then(response =>{setMovies1(response) 
        })
        .catch(err =>console.log(err));
        
    }
    return ( <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            
        <View className="flex-row items-center justify-center  mt-4 ml-3">
                    {open && <TouchableOpacity onPress={handleCancel}>
                        <View className="flex-row items-center justify-center mb-4 mt-4 mr-3">
                            <AntDesign name="closecircle" size={24} color="white" />
                        </View>
                    </TouchableOpacity>  }
                <TextInput className="bg-slate-300 rounded-xl w-3/4  p-2 mr-6"  value={SrhValue} onChangeText={(e)=>{setSrhValue(e)}}/> 
                <TouchableOpacity onPress={handleSearch} > 
                    <FontAwesome name="search" size={28} color="white"  />
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback> );
}
 
export default Search;


