import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput,TouchableOpacity} from 'react-native'

const loginScreen = () => {
    const [email, setEmail] = useState('')
    const [passward,setPassword]=useState('')
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Welcome!</Text>
            <View>
                <TextInput
                    placeholder="Enter your email"
                    placeholderTextColor='#fff'
                    value={email}
                    style={styles.email} 
                    onChange={(em)=>setEmail(email)}/>
                <TextInput placeholder="Enter your Passward" 
                  placeholderTextColor='#fff'
                  secureTextEntry
                  value={setPassword}
                  style={styles.email} 
                />
                <TouchableOpacity style={styles.button}>
                    <Text>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default loginScreen
const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    heading: {
        fontSize: 36,
        marginVertical:100
    },
    email: {
        backgroundColor: "#000",
        textAlign:'center',borderRadius:30,
        width:300,
        color:'#fff',marginVertical:20,
        height:70

    },
    button:{
        alignItems:'center',
        backgroundColor:'#ccc',
        width:80,
        height:30,
        borderRadius:10,marginVertical:10,       

    }


}
)

