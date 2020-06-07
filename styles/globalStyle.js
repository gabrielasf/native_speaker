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
    }
      });
