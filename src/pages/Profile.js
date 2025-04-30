import { View, Text, TouchableOpacity } from "react-native"
 
import { Header } from "../components/Header"
import { StyleSheet } from "react-native"
import { useRoute } from "@react-navigation/native"
import { Postagens } from "../../mock/Postagens"
import { Post } from "../components/Post"
import { useEffect, useState } from "react"
import { Feather } from 'react-native-vector-icons'
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../FirebaseConfig"


export function Profile () {

    const route = useRoute()
    const {uid} = route.params
    const [usuario, setUsuario] = useState()
    const [catchUser, setCatch] = useState(false)

    useEffect(() => {

        const fetchUsuario = async () => {
            const docRef = doc(db, 'usuarios', uid)
            await getDoc(docRef).then((queryResult) => {
                setUsuario(queryResult.data())
                setCatch(true)
            })
        }

        fetchUsuario()

    })

    return (

        <>
            { catchUser ? (
                <View style={{ width : '100%'}}>
            
                    <Header usuario={{usuario : usuario}}/>
                    <View style={styles.postLine} >
                        <Text style={styles.textPostLine}>Postagens</Text>
                        <TouchableOpacity>
                            <Feather name={'plus-circle'} size={40} color={'white'}/>
                        </TouchableOpacity>
                    </View>

                </View>

            ) : (<Text>Falha em encontrar usuario</Text>)}
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