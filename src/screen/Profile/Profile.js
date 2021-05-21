import React from 'react';
import { Animated, Dimensions, Image, Text, View } from 'react-native';

//styles
import { styles } from './ProfileStyle';

const Profile = ({
  route: { params: { company, name } }
}) => {

  const slideUp = React.useRef(new Animated.Value(0)).current;
  const slideDown = React.useRef(new Animated.Value(0)).current;
  const opacity = React.useRef(new Animated.Value(0)).current;

  const windowHeight = Dimensions.get('window').height / 3;

  React.useEffect(() => {
    colorOpacity();
    startSlideUpAnimation();
    startSlideDownAnimation();
  }, []);

  const startSlideDownAnimation = () => {
    Animated.timing(slideDown, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true
    }).start();
  }
  const translateToDown = slideDown.interpolate({
    inputRange: [0, 1],
    outputRange: [-(windowHeight), 0]
  });


  const startSlideUpAnimation = () => {
    Animated.timing(slideUp, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true
    }).start();
  }
  const translateToUp = slideUp.interpolate({
    inputRange: [0, 1],
    outputRange: [windowHeight, 0]
  });

  const colorOpacity = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true
    }).start();
  }

  return (
    <View style={styles.con}>

      <View style={{ alignItems: 'center', position: 'absolute' }}>
        <Animated.View style={[styles.circle, { transform: [{ translateY: translateToDown }], opacity: opacity }]} >
          <Image
            source={{ uri: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" }}
            style={styles.img}
          />
        </Animated.View>

        <Animated.View
          style={[styles.square, { transform: [{ translateY: translateToUp }], opacity: opacity }]}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.organization}>{company}</Text>
          <Text style={styles.description}>
            Morbi leo risus,porta ac consecrur ac,vestibulum ateros Maecenas
            sed diam eget risus varius blandit sitamet non magna ip sum dolore
             </Text>
          <Text style={[styles.description, { marginTop: 15, marginBottom: 20 }]}>Connect dolore ipsum faucibus mollis interdum.
          Donec ullamcorper rnulla non metus auctor fringilla
               </Text>
        </Animated.View>
      </View>

    </View>
  );
}
export default Profile;
