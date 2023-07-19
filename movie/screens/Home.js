import { Image, ScrollView,   Keyboard ,StatusBar, Text, View , Modal, TextInput, TouchableOpacity, TouchableWithoutFeedback} from "react-native";
import Headers from "../components/Headers";
import Bar from "../components/ButtonsBar";
import Hero from "../components/hero";
import Movies from "../components/Movies";
import { useEffect, useState } from "react";
import { FontAwesome } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import Search from "../components/Search";
const Home = ({navigation}) => {
    const [open,setOpen]=useState(false)
    const [Popular,setPopular]=useState(null)
    const [Popular1,setPopular1]=useState(null)

    const [TopRated,setTopRated]=useState(null)
    const [TopRated1,setTopRated1]=useState(null)

    const [Upcoming,setUpcoming]=useState(null)
    const [Upcoming1,setUpcoming1]=useState(null)

    useEffect(()=>{
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDI0N2FkMTk5YTgyYzBkZTY1NTVmNzFjZDAwNmFlNSIsInN1YiI6IjY0YjNlNWYyMGJiMDc2MDEwYzUxNDQ1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ks0LpIAdWN76Lxwp4vgWOmLYGZAf7ZOULFPYqnNOK0M'
            }
          };
          
          fetch('https://api.themoviedb.org/3/movie/popular', options)
            .then(response => response.json())
            .then(response => {setPopular(response)
                setPopular1(response)}
            )
            .catch(err => console.error(err));
           
            fetch('https://api.themoviedb.org/3/movie/top_rated', options)
            .then(response => response.json())
            .then(response => {setTopRated(response)
                          setTopRated1(response)    
            })
            .catch(err => console.error(err));

            fetch('https://api.themoviedb.org/3/movie/upcoming', options)
            .then(response => response.json())
            .then(response => {setUpcoming(response)
                              setUpcoming1(response)
            })
            .catch(err => console.error(err));
        
    },[])
    return ( 
    <View className="flex-1 items-start bg-[#1F1C2C]" >
        <StatusBar style="" />
        {/* <Modal visible={open} >
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
        </Modal>  */}

       <Search  className="mt-[80px]"/>
       {/* <Bar setOpen={setOpen} setPopular={setPopular} setTopRated={TopRated} setUpcoming={setUpcoming} Popular1={Popular1} TopRated1={TopRated1} Upcoming1={Upcoming1}/> */}
       <ScrollView className="mb-4 mt-8">
        <Hero />
       {Popular ? <Movies key={1} navigation={navigation} data={Popular} title="Popular"/> : <Text className="text-white">Loading ...</Text>}
       {TopRated ? <Movies key={2} navigation={navigation}  data={TopRated} title="Top Rated" /> : <Text className="text-white">Loading ...</Text>}
        {Upcoming ? <Movies key={3} navigation={navigation} data={Upcoming} title="Upcoming" /> : <Text className="text-white">Loading ...</Text>}
       </ScrollView>
    </View> );
}
 
export default Home;


/// action ... 28 
// Comedy ... 35
// Horror ... 27