import React from 'react';
import { Text, View } from 'react-native';

//style
import { styles } from './SplashStyle';

//global
import { ScreenNames } from '../../global/index';

//third party
import { CommonActions } from '@react-navigation/routers';
import Axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

//Redux
import * as UserACtion from '../../Redux/actions/UserAction';
import { connect } from 'react-redux';

const Splash = ({
  navigation,
  dispatch
}) => {

  const resetStack = CommonActions.reset({
    index: 0,
    routes: [{ name: ScreenNames.USER_LIST, }],
  });

  const getConnectionUser = async () => {
    try {
      const response = (await Axios.get('https://run.mocky.io/v3/e6daf7f7-9ec2-42cf-b221-ef64f1c0c6a5')).data;
      dispatch(UserACtion.setUserConnectionData(response));
      dispatch(UserACtion.setName(response));
      saveIntoAsyncStorage(response);
    } catch (error) {
      console.log("[Splash],getConnectionUser", error);
    }
  }



  const checkUserIntoAsyncStorageAndSetToRedux = async () => {
    try {
      const data = await AsyncStorage.getItem("users");
      if (data !== null) {
        console.log("checkUserIntoAsyncStorageAndSetToRedux", data);
        dispatch(UserACtion.setUserConnectionData(JSON.parse(data)));
        dispatch(UserACtion.setName(JSON.parse(data)));
        navigation.dispatch(resetStack);
      }
      else {
        getConnectionUser();
      }
    } catch (error) {
      console.log("[checkUserIntoAsyncStorageAndSetToRedux]", error);
    }
  }


  const saveIntoAsyncStorage = async (usersData) => {
    try {
      await AsyncStorage.setItem("users", JSON.stringify(usersData));
      navigation.dispatch(resetStack);

    } catch (error) {
      console.log("[Splash]saveIntoAsyncStorage", error);
    }
  }


  React.useEffect(() => {
    // setTimeout(() => {
    checkUserIntoAsyncStorageAndSetToRedux();
    // }, 2000)
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.user}>User</Text>
    </View>
  );
}


const mapDispatchToProps = (dispatch) => ({ dispatch });

export default connect(null, mapDispatchToProps)(Splash);
