import { View, Text } from "react-native-web"
import { Link } from "../components/Link"
import { FormularioCadastro } from "../components/FormularioCadastro"
import { globalStyles } from "../styles/pageStyle"
import { StyleSheet } from "react-native"

export function Cadastro () {
    return (
        <View style={globalStyles.container}>

            <Text style={styles.title} >Cadastre-se</Text>
            <Text style={styles.descriptionText}>É Facil e Rápido!</Text>

            <FormularioCadastro/>

            <Link url='login'>
                Voltar para login
            </Link>

        </View>
    )
}

const styles = StyleSheet.create({
    title : {
        color : 'green',
        fontSize : '2em',
        fontWeight : 'bold'
    }, 
    descriptionText : {
        fontSize : '.9em',
        marginBlock : '.7em'
    }
})