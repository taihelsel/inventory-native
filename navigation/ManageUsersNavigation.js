import { createStackNavigator } from "react-navigation";
/*Screens*/
import ManageUsersScreen from "../screens/ManageUsersScreen";
import CreateUserScreen from "../screens/CreateUserScreen";

const ManageUsersNavigation = createStackNavigator({
    ManageUsers: {
        screen: ManageUsersScreen,
        navigationOptions: {
            title: "Manage Users",
        }
    },
    CreateUser: {
        screen: CreateUserScreen
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