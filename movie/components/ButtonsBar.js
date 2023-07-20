import { Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons'; 
import { useState } from "react";

const Bar = ({setOpen}) => {

    const [style1,setStyle1]=useState('rounded-full p-1 px-4 bg-[#FF692B]')
    const [style2,setStyle2]=useState('rounded-full p-1 px-4 ')
    const [style3,setStyle3]=useState('rounded-full p-1 px-4 ')
    const [style4,setStyle4]=useState('rounded-full p-1 px-4 ')
    const handlePress =(e)=>{
        if(e===1)
        {
            setStyle1('rounded-full p-1 px-4 bg-[#FF692B]')
            setStyle2('rounded-full p-1 px-4 ')
            setStyle3('rounded-full p-1 px-4 ')
            setStyle4('rounded-full p-1 px-4 ')
            

        }
        else if(e===2)
        {
            setStyle1('rounded-full p-1 px-4 ')
            setStyle2('rounded-full p-1 px-4 bg-[#FF692B]')
            setStyle3('rounded-full p-1 px-4 ')
            setStyle4('rounded-full p-1 px-4 ')
        }
        else if(e===3)
        {
            setStyle1('rounded-full p-1 px-4 ')
            setStyle2('rounded-full p-1 px-4 ')
            setStyle3('rounded-full p-1 px-4 bg-[#FF692B]')
            setStyle4('rounded-full p-1 px-4 ')
        }
        else {
            setStyle1('rounded-full p-1 px-4 ')
            setStyle2('rounded-full p-1 px-4 ')
            setStyle3('rounded-full p-1 px-4 ')
            setStyle4('rounded-full p-1 px-4 bg-[#FF692B]')
        }
    }
    return ( 
    <View className="flex h-fit flex-row justify-around items-center w-full py-6">
        <TouchableOpacity onPress={()=>handlePress(1)}  className={style1}> 
            <Text className="text-[20px] text-white">All</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>handlePress(2)} className={style2} >
            <Text className="text-[20px] text-white">Action</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>handlePress(3)} className={style3} >
            <Text className="text-[20px] text-white">Comedy</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={()=>handlePress(4)} className={style4}> 
            <Text className="text-[20px] text-white">Horor</Text>
        </TouchableOpacity>
        <TouchableOpacity className="rounded-full p-1 " onPress={()=>setOpen(true)}> 
            <FontAwesome name="search" size={20} color="white" />
        </TouchableOpacity>
    </View> );
}
 
export default Bar;