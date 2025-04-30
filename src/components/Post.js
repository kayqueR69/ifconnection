import { StyleSheet, View, Text } from "react-native";
 import { usuarios } from "../../mock/Usuarios";

export function Post ({post}) {
    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <View style={styles.profilePicture}></View>
                <Text>{usuarios[post.idUsuario].nome}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        height : '200px',
        width : '90%',
        borderWidth : 1,
        borderColor : 'black',
        marginBlock : '.9em',
        borderRadius : 15
    },
    head : {
        height : 60,
        width : '100%',
        backgroundColor : '#D3D3D3',
        alignItems : 'center',
        paddingInline : '.5em',
        flexDirection : 'row'
    }, 
    profilePicture : {
        height : 45,
        width : 45,
        borderRadius : '50%',
        backgroundColor : 'gray',
        marginRight : '10px'
    } 
})