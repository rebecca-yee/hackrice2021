import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Input, Button } from 'react-native-elements';

const RegisterScreen = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    
    return (
        <View>
            <Input
            placeholder="Enter your Name"
            label="Name"
            leftIcon={{ type:'material', name:'badge'}}
            value={name}
            onChangeText={text => setName(text)}
            /> 
            <Input  
            placeholder="Enter your email"
            label="Email"
            leftIcon={{ type:'material', name:'email'}}
            value={email}
            onChangeText={text => setEmail(text)}
            /> 
            <Input
            placeholder="Enter your password"
            label="Password"
            leftIcon={{ type:'material', name:'lock'}}
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry
            /> 
            <Button title="Register" />
        </View>
    )
   
} 
export default RegisterScreen;