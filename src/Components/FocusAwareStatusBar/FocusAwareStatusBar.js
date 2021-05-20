import React from 'react';
import { Platform, StatusBar, View } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const FocusAwareStatusBar = ({ backgroundColor = 'white', barStyle = "default" }) => {
  const insets = useSafeAreaInsets();
  const isFocused = useIsFocused();
  const isAndroid = Platform.OS === 'android';

  return isAndroid
    ?
    isFocused
      ?
      <>
        <StatusBar backgroundColor={backgroundColor} translucent={true} barStyle={barStyle} />
        <View style={{ height: StatusBar.currentHeight }} />
      </>
      :
      <View style={{ height: StatusBar.currentHeight }} />
    :
    <View style={{ paddingTop: insets.top, backgroundColor: backgroundColor }} >
      <StatusBar transculent={true} />
    </View>
};
export default React.memo(FocusAwareStatusBar);