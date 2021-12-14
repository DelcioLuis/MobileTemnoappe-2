import React from "react";
import { createStackNavigator } from '@react-navigation/stack';



import Produtos from "../pages/index";
import Detalhes from "../pages/Detalhe";

const Stack = createStackNavigator();

const NavigaionStack = ({navigation}) => {

    return(
        <Stack.Navigator
        //screenOptions={{headerShown:false}}
        >
            <Stack.Screen
            options={{ headerStyle:{backgroundColor:"#6200ED"} }}
             name="Produtos" component={Produtos} />
            <Stack.Screen 
            options={{ headerStyle:{backgroundColor:"#6200ED"} }}
            name="Detalhes" component={Detalhes}/>
            
        </Stack.Navigator>
    )
}

export default NavigaionStack;