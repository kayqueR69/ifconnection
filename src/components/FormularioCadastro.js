import { View } from "react-native";
import { InputDate , Input, InputRadio, InputSelect } from "./Input";
import { ButtonSubmit } from "./Buttons";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { db, auth } from "../../FirebaseConfig"
import { doc, setDoc } from "firebase/firestore"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { campus, cursos } from "../../mock/StaticData";


export function FormularioCadastro () {

    const navigation = useNavigation();

    const [usuario, setUsuario] = useState({
        biografia : '',
        campus : '',
        curso : '',
        nome : '',
        email : '',
        senha : '',
        nascimento : new Date().toLocaleDateString('pt-BR'),
        genero : ''
    })

    const onHandleChange = (e) => {
        setUsuario(prevUsuario => ({...usuario, [e.target.id] : e.target.value}))
    }

    const onHandleDateChange = (data) =>  {
        setUsuario(prevUsuario => ({...usuario, ['nascimento'] : data}))
    }

    const onHandleGenderChange = (option) => {
        setUsuario(prevUsuario => ({...usuario, ['genero'] : option}))
    }

    const [listaCursos, setCursos] = useState()
    const onHandleCampusChange = (value) => {
        setUsuario(prevUsuario => ({...usuario, ['campus'] : value}))

        for (let c = 0; c < campus.length; c++) {
            if (cursos[c].nome === value) {
                setCursos(cursos[c].lista)
            }
        }

    }

    const cadastrar = async () => {

        await createUserWithEmailAndPassword(auth, usuario.email, usuario.senha).then(async (userCredential) =>{

            await setDoc(doc(db, 'usuarios', userCredential.user.uid), usuario).then(() => {

                alert('cadastro realizado com sucesso')
                navigation.navigate('login')

            }).catch(() => alert('falha no cadastro'))

        })

        
    }

    return (
        <View>

            <Input name='nome' placeHolder='seu nome...' handleChange={onHandleChange} type='default'/>
            <InputDate usuario={usuario} onChange={(data) => onHandleDateChange(data.toLocaleDateString('pt-BR'))}/>
            <InputSelect label='Campus que você estuda' options={campus} onChange={onHandleCampusChange}/>
            { campus != '' ? (<InputSelect label='O que você está cursando?'  />) : (<></>)}
            <InputRadio options={['masculino', 'feminino', 'outro']} onChange={(option) => onHandleGenderChange(option)}/>
            <Input name='email' placeHolder='seu email...' handleChange={onHandleChange} type='email-adress'/>
            <Input name='senha' placeHolder='sua senha...' handleChange={onHandleChange} type='visible-password'/>

            <ButtonSubmit text='cadastrar-se' handlePress={cadastrar}/>

        </View>
    )
}