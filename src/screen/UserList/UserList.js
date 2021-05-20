import React from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';
import { connect } from 'react-redux';

//components
import FocusAwareStatusBar from '../../Components/FocusAwareStatusBar/FocusAwareStatusBar';
import UserConnectionData from '../../Components/UserConnectionData/UserConnectionData';

//styles
import { styles } from './UserListStyle';

const UserList = ({
  userConnection,
  name
}) => {

  console.log(userConnection)

  const renderItem = ({ item, index }) => <UserConnectionData
    email={item.email}
  />;

  return (
    <View style={styles.container}>
      <FocusAwareStatusBar backgroundColor="white" barStyle="dark-content" />


      <FlatList
        data={userConnection}
        renderItem={renderItem}
        keyExtractor={item => `${item.id}`}
      />

      {/* <Text>{name}</Text> */}
      {/* </ScrollView> */}
    </View>
  );
}

const mapStateToProps = (state) => ({
  userConnection: state.user.userConnection,
  name: state.user.name,
})


const mapDispatchToProps = (dispatch) => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
