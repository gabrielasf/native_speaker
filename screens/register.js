import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import {globalStyles} from '../styles/globalStyle';
import { Formik } from 'formik';
import Header from '../styles/header';

export default function Register() {
    
        return (
            <View style= {globalStyles.container}>
                <Header />
                
                {/* <Formik 
                    initialValues={{
                    Email: '', 
                    Password:'', 
                    Name:'', 
                    Surname:'', 
                    Phone:'', 
                    TaxNumber:''}}

                    onSubmit={(values) =>{}}
                    
                    >

                </Formik> */}
                
            </View>
        )
    
}

