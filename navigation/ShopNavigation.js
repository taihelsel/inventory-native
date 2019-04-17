import React from "react";
import { createStackNavigator } from "react-navigation";
/*Screens*/
import ShopSelectScreen from "../screens/ShopSelectScreen";
import UserTypeOptionsScreen from "../screens/UserTypeOptions";

export default createStackNavigator({
    ShopSelect: {
        screen: ShopSelectScreen,
    },
    UserTypeOptions: {
        screen: UserTypeOptionsScreen,
    }
});