import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import TabProducts from "../Tabs/TabProducts"
import TabProfile from "../Tabs/TabProfile"

export default function Home (){
    const Tab= createBottomTabNavigator()
    return(
        <Tab.Navigator screenOptions={{headerShown:false}}>
            <Tab.Screen name="TabProducts" component={TabProducts}/>
            <Tab.Screen name="TabProfile" component={TabProfile}/>
        </Tab.Navigator>
    )
}