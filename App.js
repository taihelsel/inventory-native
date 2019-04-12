import React from 'react';
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers/rootReducer";
/*Components*/
import NavigationRoot from "./navigation/NavigationRoot";

const store = createStore(rootReducer);
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationRoot />
      </Provider>
    );
  }
}