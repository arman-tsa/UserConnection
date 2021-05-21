import React from 'react';
import { Animated, Text, TouchableOpacity, View } from 'react-native';

//vector-Icon
import Icon from 'react-native-vector-icons/FontAwesome5';

const SvgAnimation = ({
  Iconame,
  color = "#000000",
  onPress = () => { }
}) => {

  const animatedValue = React.useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 30,
      useNativeDriver: false,
    }).start();
  };

  const finishAnimation = () => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 30,
      useNativeDriver: false,
    }).start();
  };

  const scale = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.7],
  });
  return (
    <TouchableOpacity
      onPressIn={startAnimation}
      onPressOut={finishAnimation}
      onPress={onPress}
      activeOpacity={1}

    >
      <Animated.View
        style={{ transform: [{ scale }], width: 40, height: 40, alignItems: 'center', justifyContent: 'center', }}
      >
        <Icon name={Iconame} size={20} color={color} />
      </Animated.View>
    </TouchableOpacity>
  );
}
export default React.memo(SvgAnimation);
