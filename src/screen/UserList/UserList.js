import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { connect } from 'react-redux';

//components
import FocusAwareStatusBar from '../../Components/FocusAwareStatusBar/FocusAwareStatusBar';
import TextInputContainer from '../../Components/TextInputContainer/TextInputContainer';
import UserConnectionData from '../../Components/UserConnectionData/UserConnectionData';

//styles
import { styles } from './UserListStyle';

const UserList = ({
  userConnection,
}) => {

  //states
  const [listOfUser, setListOfUser] = React.useState(userConnection);

  const renderItem = ({ item, index }) => <UserConnectionData
    email={item.email}
    fname={item.firstname}
    surname={item.surname}
    picture={item.picture}
    company={item.company}
    len={listOfUser.length}
    index={index}
  />;

  const renderEmptylist = () => {
    return (
      <View style={styles.noDataCon}>
        <Text style={styles.nodata}>No User Available</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <FocusAwareStatusBar backgroundColor="white" barStyle="dark-content" />

      <TextInputContainer
        listOfUser={listOfUser}
        setListOfUser={setListOfUser}
      />

      <FlatList
        data={listOfUser}
        renderItem={renderItem}
        ListEmptyComponent={renderEmptylist}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.containerstyle}
        keyExtractor={item => `${item.index.toString()}`}
      />

    </View>
  );
}

const mapStateToProps = (state) => ({
  userConnection: state.user.userConnection,
})


const mapDispatchToProps = (dispatch) => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
