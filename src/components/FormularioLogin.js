import { StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { Input } from "./Input";
import { ButtonSubmit } from "./Buttons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { globalStyles } from "../styles/pageStyle";
import { getDocs, collection, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { auth, db } from "../../FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

export function FormularioLogin () {

    const navigation = useNavigation()
    const [usuario, setUsuario] = useState();
    const [fail, setFailVisible] = useState(false)

    const onHandleChange = (e) => setUsuario(prevUsuario => ({...usuario, [e.target.id]: e.target.value}))

    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

    const login = async () => {

        await signInWithEmailAndPassword(auth, usuario.email, usuario.senha).then((queryResult) => {
            navigation.navigate('routes', {uid : queryResult.user.uid})
        }).catch(async (error) => {
            setFailVisible(true)
            await sleep(2000)
            setFailVisible(false)
        })

    }

    return (
        <View style={styles.container}>
            
            {fail ? (<Text style={globalStyles.failAlert}>Usuario Inválido!</Text>) : (<Text></Text>)}
            <Input type='text' placeHolder='seu email...' handleChange={onHandleChange} name='email'/>

            <Input type='text' placeHolder='sua senha...' handleChange={onHandleChange} name='senha'/>

            <ButtonSubmit handlePress={login} text='Iniciar Sessão'/>           

        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        alignItems : 'center',
        justifyContent : 'center'
    }
})