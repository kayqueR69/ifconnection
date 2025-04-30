import { View, Text, TouchableOpacity } from "react-native"
 
import { Header } from "../components/Header"
import { StyleSheet } from "react-native"
import { useRoute } from "@react-navigation/native"
import { Postagens } from "../../mock/Postagens"
import { Post } from "../components/Post"
import { useState } from "react"
import { Feather } from 'react-native-vector-icons'

export function Profile () {

    const route = useRoute()
    const {uid} = route.params

    return (
        <>
        {/*<View style={{ width : '100%'}}>
            
            <Header usuario={{usuario : usuario}}/>
            <View style={styles.postLine} >
                <Text style={styles.textPostLine}>Postagens</Text>
                <TouchableOpacity>
                    <Feather name={'plus-circle'} size={40} color={'white'}/>
                </TouchableOpacity>
            </View>

            <View style={styles.containerPost}>
                {Postagens.map((item, index) => (
                    <View key={index} style={styles.containerPost}>
                        {item.idUsuario == usuario.id ? (<Post post={item} key={index}/>) : console.log('')}
                    </View>
                ))}
            </View>  

        </View>*/}
            <Text>{uid}</Text>
        </>
    )
}
 
const styles = StyleSheet.create({
    containerPost : {
        alignItems : 'center',
        justifyContent : 'center',
        width : '100%'
    },
    postLine : {
        backgroundColor : '#5E5E5E',
        height : 50,
        alignItems : 'center',
        justifyContent : 'space-between',
        flexDirection : 'row',
        paddingInline : '1em'
    },
    textPostLine : {
        width : '100%',
        color : 'white',
        fontSize : '1.5em',
    }
})