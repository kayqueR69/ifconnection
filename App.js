import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator }  from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import { Login } from './src/pages/Login';
import { Cadastro } from './src/pages/Cadastro';
import { Routes } from './src/routes/Routes';
import { StyleSheet } from 'react-native';

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown : false, stack : '#FFFFFF'}}>

                <Stack.Screen name='login' component={Login} />
                <Stack.Screen name='cadastro' component={Cadastro} />
                <Stack.Screen name='routes' component={Routes} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container : {
        alignItems : 'center',
        justifyContent : 'center'
    }
})