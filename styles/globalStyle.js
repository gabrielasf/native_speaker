import { StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
    container : {
        padding : 24,
        flex: 1
    },
    slogan:{
        fontFamily: 'Comfortaa-Light',
        fontSize: 18,
        color: 'gold'
    },
   
    welcome: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#252A37'
    },
    image: {
        position: 'absolute',
        alignItems: 'center'
    },
    title: {
        fontFamily: 'Comfortaa-Bold',
        fontSize: 38,
        color: 'gold'
    },
    headerContainer :{
        width: '100%',
        backgroundColor: '#252A37',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    input: {
        borderWidth: 1,
        borderColor: '#333',
        padding: 8,
        fontSize: 14,
        borderRadius: 6,
        marginHorizontal: 10,
        marginTop: 4,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Comfortaa-SemiBold'
   },
   registerButton : {
       marginHorizontal: 150,
       marginBottom: 6 
   },
   viewinput : {
    flex: 1
   },
   errorText: {
       color: "crimson",
       textAlign: "center",
       fontFamily: "Comfortaa-Bold"
   },
   registrationText: {
       color: '#333',
       textAlign: 'center',
       marginTop: 70,
       margin: 5,
       fontFamily: 'Comfortaa-Bold',
       fontSize: 38,
       
        
   }
});
