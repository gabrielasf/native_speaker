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
        padding: 13,
        fontSize: 18,
        borderRadius: 6,
        marginHorizontal: 10,
        margin: 3,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Comfortaa-SemiBold'
   },
   registerButton : {
       marginHorizontal: 120,
       padding: 10,
       
   },
   container2 : {
    padding : 10,
    flex: 1
},
});
