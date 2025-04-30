import { NavigationContainer, useRoute } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import { Home } from "../pages/Home";
import { Profile } from "../pages/Profile";

const Tab = createBottomTabNavigator();

export function Routes () {

    const route = useRoute();
    const { uid } = route.params

    return (
        <Tab.Navigator screenOptions={{headerShown : false}}>

            <Tab.Screen name="home" component={Home} />
            <Tab.Screen name="profile" component={Profile} initialParams={{uid : uid}}/>

        </Tab.Navigator>
    )
}