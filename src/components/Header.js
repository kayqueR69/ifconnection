import { StyleSheet } from "react-native";
import { View, Text } from "react-native";

export function Header ({usuario}) {
    return (
        <View style={styles.header}>

            <View style={styles.profilePicture}></View>

            <View style={styles.containerInfos}>
                <Text style={styles.profileName}>{usuario.usuario.nome}</Text>
                <Text>{usuario.usuario.biografia}</Text>
                <Text>{usuario.usuario.genero}, {usuario.usuario.nascimento}</Text>
                <Text>Campus: {usuario.usuario.campus}</Text>
                <Text>Curso: {usuario.usuario.curso}</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    header : {
        flex : 1,
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-around',
        width : '100%',
        height : 150,
        paddingBlock : '0.5em',
        backgroundColor : '#D3D3D3'
    },
    profilePicture : {
        height : '120px',
        width : '120px',
        borderRadius : 25,
        backgroundColor : 'gray'
    }, 
    profileName : {
        fontSize : 18,
        fontWeight : 'bold'
    },
    containerInfos : {
        width : '60%'
    }
})