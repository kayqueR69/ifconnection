import { StyleSheet, TouchableOpacity } from "react-native"

export function ButtonSubmit ({text, handlePress}) {
    return (
        <>
            <TouchableOpacity onPress={handlePress} style={styles.buttonSubmit}>
                {text}
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    buttonSubmit : {
        height : 50,
        width : 300,
        color : 'white',
        backgroundColor : 'green',
        borderRadius : 15,
        alignItems : 'center',
        justifyContent : 'center'
    }
})