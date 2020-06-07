import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import {globalStyles} from '../styles/globalStyle';
import { Formik } from 'formik';
import { useFormik} from 'formik';
import Header from '../styles/header';
import { render } from 'react-dom';


export default function Register(){
    return (
        <View>
                <Header />
        <View style={globalStyles.container2}>
            
            </View>
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
                    <View >
                        <TextInput 
                            style={globalStyles.input}
                            placeholder='Email'
                            onChangeText={props.handleChange('email')}
                            value={props.values.email}
                        />
                        <TextInput 
                            style={globalStyles.input}
                            placeholder='Password'
                            type='password'
                            secureTextEntry={true}
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
                        <View style={globalStyles.registerButton}>
                        <Button title="Register" color="#252A37" onPress={props.handleSubmit}>Register</Button>
                        </View>
                    </View>
                    )}
                 </Formik> 
                 </View>
                 

) 
}


               {/* </View> */}
                {/* </View> */}
//         );
// }
