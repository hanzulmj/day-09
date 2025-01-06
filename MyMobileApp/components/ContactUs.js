import {StyleSheet,View} from 'react-native';
export default function ContactUs(){
    return(
        <>
        <View style={style.header}>
        <Text variant="headlineLarge">Headline Large</Text>
        
        </View>
        <View style={style.body}>

        </View>
        <View style={style.footer}>
            <Text>MyApp @ 2024 </Text>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    header:{
     flex:3,
     width:"100%",
     alignItems:'center'
    },
    body:{
     flex:6,
     width:"100%",
     
    },
    footer:{
     fled:2,
     width:"100%",
     alignItems:'center'
    }
 });