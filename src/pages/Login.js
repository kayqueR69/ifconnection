import { View, Text, Image, StyleSheet } from "react-native";
import { FormularioLogin } from "../components/FormularioLogin";
import { Link } from "../components/Link";
import { globalStyles } from "../styles/pageStyle";

import IfLogo from '../../assets/images/iflogo.png'

export function Login () {

    return (
        <View style={globalStyles.container}>
            
            <View style={styles.logoContainer}>
                <Image source={IfLogo} style={styles.logoStyle}></Image>
                <Text style={styles.textLogo}>Connection</Text>
            </View>

            <Text style={styles.descriptionText}>Connecta você aos seus amigos!</Text>

            <FormularioLogin/>

            <Link url='cadastro'>
                Não tem uma conta? Cadastre-se!
            </Link>

        </View>
    )
}

const styles = StyleSheet.create({
    logoStyle : {
        height : '50px',
        width : '37px'
    },
    logoContainer : {
        flexDirection : 'row'
    },
    textLogo : {
        fontSize : '2em',
        color : 'green',
        fontWeight : 'bold',
        marginLeft : '.2em'
    },
    descriptionText : {
        fontSize : '.9em',
        marginBlock : '.9em'
    }
})