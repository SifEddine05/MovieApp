import { Image, ScrollView,   Keyboard ,StatusBar, Text, View } from "react-native";
import Headers from "../components/Headers";
import Bar from "../components/ButtonsBar";
import Hero from "../components/hero";
import Movies from "../components/Movies";
import { useEffect, useState } from "react";

import Search from "../components/Search";
import Card from "../components/Card";
const Home = ({navigation}) => {
    const [open,setOpen]=useState(false)
    const [Popular,setPopular]=useState(null)

    const [Movies1,setMovies1]=useState(null)

    const [TopRated,setTopRated]=useState(null)

    const [Upcoming,setUpcoming]=useState(null)

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
                }
            )
            .catch(err => console.error(err));
           
            fetch('https://api.themoviedb.org/3/movie/top_rated', options)
            .then(response => response.json())
            .then(response => {setTopRated(response)
                              
            })
            .catch(err => console.error(err));

            fetch('https://api.themoviedb.org/3/movie/upcoming', options)
            .then(response => response.json())
            .then(response => {setUpcoming(response)
                             
            })
            .catch(err => console.error(err));


           
        
    },[])
    return ( 
    <View className="flex-1 items-start bg-[#1F1C2C]" >
        <StatusBar style="" />
    

       <Search  className="mt-[80px]" setOpen={setOpen} open={open} setMovies1={setMovies1}/>
       <ScrollView className="mb-4 mt-8">
     {(!Movies1) &&
     <View>
            <Hero /> 
       {Popular ? <Movies key={1} navigation={navigation} data={Popular} title="Popular"/> : <Text className="text-white">Loading ...</Text>}
       {TopRated ? <Movies key={2} navigation={navigation}  data={TopRated} title="Top Rated" /> : <Text className="text-white">Loading ...</Text>}
        {Upcoming ? <Movies key={3} navigation={navigation} data={Upcoming} title="Upcoming" /> : <Text className="text-white">Loading ...</Text>}
     </View>}

     {(Movies1) &&  
     <ScrollView horizontal={true}>
     {Movies1.results.map((elem)=>{
        return(<Card navigation={navigation}  data={elem} />)
    }) }
     </ScrollView> }
        
       </ScrollView>
    </View> );
}
 
export default Home;


