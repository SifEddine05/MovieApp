import { Image, ScrollView, StatusBar, Text, View } from "react-native";
import Card from "../components/Card";
import ActorCard from "../components/ActorCard";
import ReviewCard from "../components/ReviewCard";
import { useEffect, useState } from "react";


const Movie = ({navigation}) => {
    const [data , setData] = useState(null)
    const [Credit , setCredit] = useState(null)
    const [Similair , setSimilair] = useState(null)
    const [Reviews , setReviews] = useState(null)

   useEffect(()=>{
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDI0N2FkMTk5YTgyYzBkZTY1NTVmNzFjZDAwNmFlNSIsInN1YiI6IjY0YjNlNWYyMGJiMDc2MDEwYzUxNDQ1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ks0LpIAdWN76Lxwp4vgWOmLYGZAf7ZOULFPYqnNOK0M'
        }
      };
      
      fetch('https://api.themoviedb.org/3/movie/'+navigation.getParam('id'), options)
        .then(response => response.json())
        .then(response => setData(response))
        .catch(err => console.error(err));

        fetch('https://api.themoviedb.org/3/movie/'+navigation.getParam('id')+'/credits', options)
        .then(response => response.json())
        .then(response => setCredit(response.cast))
        .catch(err => console.error(err));
        
        fetch('https://api.themoviedb.org/3/movie/'+navigation.getParam('id')+'/similar', options)
        .then(response => response.json())
        .then(response => setSimilair(response.results))
        .catch(err => console.error(err));

        fetch('https://api.themoviedb.org/3/movie/'+navigation.getParam('id')+'/reviews', options)
        .then(response => response.json())
        .then(response => {setReviews(response.results)
            
        }
        )
        .catch(err => console.error(err));

   },[])
    


    return ( 
    <View className="flex-1 justify-start items-center pt-4 bg-[#1F1C2C] ">
        <StatusBar style="" />
       {(data && Credit && Similair && Reviews) ? <ScrollView>
            <Image className="w-[400px] h-[300px] rounded-xl" source={{uri : "https://image.tmdb.org/t/p/w500"+data.backdrop_path}}/>
            <Text className=" text-center text-white text-[20px] font-bold pt-4">{data.original_title}</Text>
            <View className="flex justify-center items-center">
                <Text className="text-white opacity-50 mt-2">{data.release_date }| {data.original_language } | {data.genres[0].name }  </Text>
                <View className="border-b-2 w-[300px] mt-6 border-white"></View>
            </View>
            <Text className="mt-4 self-start ml-6 text-white text-[18px] font-bold">Story line</Text>
            <Text className="mt-2 ml-6 text-white opacity-50">{data.overview}</Text>
            
            <Text className="mt-4 self-start ml-6 text-white text-[18px] font-bold">Star cast</Text>
            <ScrollView horizontal={true} className=" pt-4">
                
                {Credit.map((e)=>{
                    return(<ActorCard data={e} key={e.id}/>)
                })}
                
                
            </ScrollView>

            <Text className="mt-6 self-start ml-6 text-white text-[18px] font-bold">Similair</Text>
            <ScrollView horizontal={true} className=" pt-4">
            {Similair.map((elem)=>{
                return(<Card navigation={navigation}  data={elem} />)
            })}
            </ScrollView>

            <Text className="mt-6 self-start ml-6 text-white text-[18px] font-bold ">Reviews</Text>
            <ScrollView horizontal={true} className=" pt-4 mb-4  ">
            {Reviews.map((elem)=>{
                return(<ReviewCard  data={elem}/>)
            })}
                
                
                
            </ScrollView>
           
        
        </ScrollView> : <Text className="text-white">Loading ...</Text> }
        
    </View> );
}
 
export default Movie;



//Riviews 
//Similaire
//actors 