import React from 'react';
import { Text, View } from 'react-native';

//styles
import { styles } from './ProfileStyle';

const Profile = ({
  params,
}) => {
  return (
    <View style={styles.con}>
      <Text>Profile</Text>
    </View>
  );
}
export default Profile;
