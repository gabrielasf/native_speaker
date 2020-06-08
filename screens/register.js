import React from 'react';
import { Text, View, Button, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import {globalStyles} from '../styles/globalStyle';
import { Formik } from 'formik';
import Header from '../styles/header';
import * as yup from 'yup';


const userSchema = yup.object({

    email: yup.string().email().required(),
    password: yup.string().required('No password provided.').min(8, 'Password is too short - should be 8 chars minimum.'),
    // .matches(
    //     /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    //     "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"),
    name: yup.string().required().min(2),
    surname: yup.string().required().min(2),
    phone : yup.number().required(),
    taxNumber: yup.number().required()
});


export default function Register(){

    return (
        <View >
            <View style={globalStyles.container2}>
                
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View>
                    <Header />
                </View>
                </TouchableWithoutFeedback>
            
                    <Formik 
                        initialValues = {{ email: '', password:'', name:'', surname:'', phone:'', taxNumber:''}}
                        validationSchema={userSchema}
                        onSubmit={(values) => {
                            navigation.navigate('Confirmation');
                        console.log(values);
                    }}
                    >
                
                    {(props) => ( 
                    <View styles={globalStyles.viewinput} >
                        <TextInput 
                            style={globalStyles.input}
                            placeholder='Email'
                            onChangeText={props.handleChange('email')}
                            value={props.values.email}
                            onBlur={props.handleBlur('email')}
                        />
                        <Text style={globalStyles.errorText}>{props.touched.email && props.errors.email}</Text>
                        <TextInput 
                            style={globalStyles.input}
                            placeholder='Password'
                            type='password'
                            secureTextEntry={true}
                            onChangeText={props.handleChange('password')}
                            value={props.values.password}
                            onBlur={props.handleBlur('password')}
                        />
                        <Text style={globalStyles.errorText}>{props.touched.password && props.errors.password}</Text>
                      
                        <TextInput 
                            style={globalStyles.input}
                            placeholder='Name'
                            onChangeText={props.handleChange('name')}
                            value={props.values.name}
                            onBlur={props.handleBlur('name')}
                        />
                        <Text style={globalStyles.errorText}>{props.touched.name && props.errors.email}</Text>
                      
                        <TextInput 
                            style={globalStyles.input}
                            placeholder='Surname'
                            onChangeText={props.handleChange('surname')}
                            value={props.values.surname}
                            onBlur={props.handleBlur('surname')}
                        />
                        <Text style={globalStyles.errorText}>{props.touched.surname && props.errors.surname}</Text>
                      
                        <TextInput 
                        style={globalStyles.input}
                        placeholder='Phone'
                        onChangeText={props.handleChange('phone')}
                        value={props.values.phone}
                        keyboardType="numeric"
                        onBlur={props.handleBlur('phone')}
                        />
                        <Text style={globalStyles.errorText}>{props.touched.phone && props.errors.phone}</Text>
                      
                        <TextInput 
                            style={globalStyles.input}
                            placeholder='Tax Number'
                            onChangeText={props.handleChange('taxNumber')}
                            value={props.values.taxNumber}
                            onBlur={props.handleBlur('taxNumber')}
                        />
                        <Text style={globalStyles.errorText}>{props.touched.taxNumber && props.errors.taxNumber}</Text>
                      
                        <View style={globalStyles.registerButton}>
                            <Button title="Register" color="#252A37" onPress={props.handleSubmit}>Register</Button>
                        </View>
                    </View>
                    )}
                 </Formik> 
            </View>
        </View>
    ) 
}

