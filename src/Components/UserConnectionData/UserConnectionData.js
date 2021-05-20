import React from 'react';
import { Text, View } from 'react-native';

const UserConnectionData = ({
  params,
  email
}) => {
  return (
    <View>
      <Text>{email}</Text>
    </View>
  );
}
export default React.memo(UserConnectionData);
