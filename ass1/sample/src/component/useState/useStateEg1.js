import React,{useState} from 'react'
import {View,Text,Button} from 'react-native'

const useStateEg = ()=>{
    const[data,setData]=useState(0)
    return(
        <View>
            <Text style={{fontSize:15,textAlign:'center',color:'#0c0'}}>
                More Examples of state in functional component (useState)
            </Text>   
            <Button title="Decrement" onPress={()=>setData(data-1)}/>
            <Text style={{fontSize:36}}>{data}</Text>
            <Button  title="Increment"onPress={()=>setData(data+1)}/>
         


            
        </View>
    )
}
export default useStateEg