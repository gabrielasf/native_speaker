import React from 'react';
import { Text, View, Button, TextInput, TouchableWithoutFeedback, Keyboard, ScrollView} from 'react-native';
import {globalStyles} from '../styles/globalStyle';
import { Formik } from 'formik';
import Header from '../styles/header';
import * as yup from 'yup';


const userSchema = yup.object({

    email: yup.string().email().required(),
    password: yup.string().required('No password provided.').min(8, 'Password is too short - should be 8 chars minimum.'),
    name: yup.string().required().min(2),
    surname: yup.string().required().min(2),
    phone : yup.number().required(),
    taxNumber: yup.number().required()
});


export default function Register({ navigation }){

    return (
        <View >
            <View style={globalStyles.container2}>
                <ScrollView>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View>
                            <Header />
                        </View>
                    </TouchableWithoutFeedback>
                   
                    <Formik 
                        initialValues = {{ email: '', password:'', name:'', surname:'', phone:'', taxNumber:''}}
                        validationSchema={userSchema}
                        onSubmit = {() => {
                        var raw = "";

                        var requestOptions = {
                        method: 'POST',
                        body: raw,
                        };
                        fetch("https://a1476601-936f-44ad-9190-4bc1e989c33c.mock.pstmn.io/echo", requestOptions)
                        .then(response => response.text())
                        .then(result => console.log(result))
                        .catch(error => console.log('error', error))
                        .then(navigation.navigate('Confirmation'));
                        }}
                        >
                    
                        {(props) => ( 
                        <View styles={globalStyles.viewinput} >
                            
                        <TextInput 
                            style={globalStyles.input}
                            placeholder='Email'
                            onChangeText={props.handleChange('email')}
                            value={props.values.email}
                        />
                        <Text style={globalStyles.errorText}>{props.touched.email && props.errors.email}</Text>
                        <TextInput 
                            style={globalStyles.input}
                            placeholder='Password'
                            type='password'
                            secureTextEntry={true}
                            onChangeText={props.handleChange('password')}
                            value={props.values.password}
                        />
                        <Text style={globalStyles.errorText}>{props.touched.password && props.errors.password}</Text>
                        
                        <TextInput 
                            style={globalStyles.input}
                            placeholder='Name'
                            onChangeText={props.handleChange('name')}
                            value={props.values.name}
                        />
                        <Text style={globalStyles.errorText}>{props.touched.name && props.errors.name}</Text>
                      
                        <TextInput 
                            style={globalStyles.input}
                            placeholder='Surname'
                            onChangeText={props.handleChange('surname')}
                            value={props.values.surname}
                        />
                        <Text style={globalStyles.errorText}>{props.touched.surname && props.errors.surname}</Text>
                      
                        <TextInput 
                        style={globalStyles.input}
                        placeholder='Phone'
                        onChangeText={props.handleChange('phone')}
                        value={props.values.phone}
                        keyboardType="numeric"
                        />
                        <Text style={globalStyles.errorText}>{props.touched.phone && props.errors.phone}</Text>
                      
                        <TextInput 
                            style={globalStyles.input}
                            placeholder='Tax Number'
                            onChangeText={props.handleChange('taxNumber')}
                            value={props.values.taxNumber}
                            keyboardType="numeric"
                        />
                        <Text style={globalStyles.errorText}>{props.touched.taxNumber && props.errors.taxNumber}</Text>
                        
                        
                        <View style={globalStyles.registerButton}>
                            <Button title="Register" color="#252A37" onPress={props.handleSubmit}>Register</Button>
                        </View>
                    </View>
                    )}
                    </Formik> 
                
                 </ScrollView>
            </View>
       
        </View>
    ) 
}
