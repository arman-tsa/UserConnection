import React from 'react';

import { createStackNavigator } from '@react-navigation/stack'
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';

//global
import { ScreenNames } from '../../global/index';
import Splash from '../../screen/Splash/Splash';
import UserList from '../../screen/UserList/UserList';
import { store } from '../../Redux/store/store';
import { Provider } from 'react-redux';

enableScreens();

const MainStack = ({
  params,
}) => {

  const stack = createStackNavigator();

  const routeName = ScreenNames.MAIN_STACK;

  return (
    <Provider store={store}>
      <NavigationContainer>
        <stack.Navigator
          headerMode={false}
          initialRouteName={routeName}
        >
          <stack.Screen name={ScreenNames.SPLASH} component={Splash} />
          <stack.Screen name={ScreenNames.USER_LIST} component={UserList} />

        </stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
export default MainStack;
