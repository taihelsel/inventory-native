import { createStackNavigator } from "react-navigation";
/*Screens*/
import ManageUsersScreen from "../screens/ManageUsersScreen";

const ManageUsersNavigation = createStackNavigator({
    ManageUsers: {
        screen: ManageUsersScreen,
        navigationOptions: {
            title: "Manage Users",
        }
    },
}, {
        initialRouteName: "ManageUsers",
    }
);
ManageUsersNavigation.navigationOptions = ({ navigation }) => {
    //hiding admin home navigation
    return {
        header: null
    }
};

export default ManageUsersNavigation;