import { Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function Link ({url, children}) {

    const navigation = useNavigation();

    return (
        <Text style={styles.link} onPress={() => navigation.navigate(url)}>
            {children}
        </Text>
    )
}

const styles = StyleSheet.create({
    link : {
        color : 'blue',
        textDecorationLine : 'underline',
        cursor : 'pointer',
        marginBlock : '.9em'
    }
})