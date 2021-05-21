import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

//styles
import { styles } from './UserConnectionDataStyle';

//global
import { ScreenNames } from '../../global/index';

//navigation
import { useNavigation } from '@react-navigation/native';

const UserConnectionData = ({
  email,
  company,
  picture,
  surname,
  fname,
  len,
  index,
}) => {

  const navigation = useNavigation();

  const navigateToProfile = () => {
    navigation.navigate(ScreenNames.PROFILE, { company: company, name: fname + " " + surname });
  }


  return (
    <View>
      <TouchableOpacity
        activeOpacity={1}
        onPress={navigateToProfile}
        style={styles.bgCon}>
        <View style={styles.imgCon}>
          <Image
            source={{ uri: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" }}
            style={styles.img}
          />
        </View>
        <View style={styles.userDetail}>
          <Text style={styles.userName}>{fname} {surname}</Text>
          <Text style={styles.company}>{company}</Text>
          <Text numberOfLines={1} style={styles.email}>{email} {company}</Text>
        </View>
      </TouchableOpacity>
      {
        index <= len - 2
        &&
        <View style={styles.line} />
      }

    </View>
  );
}
export default React.memo(UserConnectionData);
