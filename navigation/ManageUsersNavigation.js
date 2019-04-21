import { createStackNavigator } from "react-navigation";
/*Screens*/
import ManageUsersScreen from "../screens/ManageUsersScreen";
import UserListScreen from "../screens/UserListScreen";

const ManageUsersNavigation = createStackNavigator({
    ManageUsers: {
        screen: ManageUsersScreen,
        navigationOptions: {
            title: "Manage Users",
        }
    },
    UserList: {
        screen: UserListScreen
    }
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