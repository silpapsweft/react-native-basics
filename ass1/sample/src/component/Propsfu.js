import React,{useState} from 'react'
import { View, Text, Button } from 'react-native'
import Profile from './Profile'

const Propsfu = () => {
    const[count,setCount]=useState(0)
    return (
        <View>
            <Text>Props Functional</Text>
            <Text>{count}</Text>
            <Button title="Increment" onPress={()=>setCount(count+1)}/>
            <Profile data={count}/>
        </View>
    )
}

export default Propsfu
