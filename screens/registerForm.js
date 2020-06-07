import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import {globalStyles} from '../styles/globalStyle';
import { Formik } from 'formik';


export default function RegisterForm(){
    return(
        <View style={globalStyles.container}>
            <Formik 
                    initialValues={{
                        email: '', 
                        password:'', 
                        name:'', 
                        surname:'', 
                        phone:'', 
                        taxNumber:''
                    }}
                    onSubmit={(values) =>{
                        console.log("values");

                    }}
                >
                
                    {(props) => ( 
                    <View>
                        <TextInput 
                            style={globalStyles.input}
                            placeholder='Email'
                            onChangeText={props.handleChange('email')}
                            value={props.values.email}
                        />
                        <TextInput 
                            style={globalStyles.input}
                            placeholder='Password'
                            type='Password'
                            onChangeText={props.handleChange('password')}
                            value={props.values.password}
                        />
                        <TextInput 
                            style={globalStyles.input}
                            placeholder='Name'
                            onChangeText={props.handleChange('name')}
                            value={props.values.name}
                        />
                        <TextInput 
                            style={globalStyles.input}
                            placeholder='Surname'
                            onChangeText={props.handleChange('surname')}
                            value={props.values.surname}
                        />
                        <TextInput 
                        style={globalStyles.input}
                        placeholder='Phone'
                        onChangeText={props.handleChange('phone')}
                        value={props.values.phone}
                        />
                        <TextInput 
                            style={globalStyles.input}
                            placeholder='Tax Number'
                            onChangeText={props.handleChange('taxNumber')}
                            value={props.values.taxNumber}
                        />
                        <Button text="Register" color="##252A37" onPress={props.handleSubmit}/>

                    </View>)};

                

                </Formik>
                </View>


    )
}