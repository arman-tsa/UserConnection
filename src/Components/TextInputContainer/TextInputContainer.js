import React from 'react';
import { Dimensions, Text, TextInput, TouchableOpacity, View } from 'react-native';

//styles
import { styles } from './TextInputContainerStyle';



import SvgAnimation from '../SvgAnimation/SvgAnimation';
import { connect } from 'react-redux';


const TextInputContainer = ({
  setListOfUser,
  userConnection,
  listOfUser
}) => {

  //states
  const [sortingOrder, setSortingOrder] = React.useState("");

  const width = Dimensions.get('window').width - 100;

  const searchUser = (text) => {

    //serached text
    let lowerCase = text.toLowerCase();

    const usearch = userConnection.filter((item) => {
      // return item.firstname.toLowerCase().match(lowerCase);
      if (item.firstname.toLowerCase().includes(lowerCase) || item.company.toLowerCase().includes(lowerCase) || item.email.toLowerCase().includes(lowerCase)) {
        return true;
      }
      else if (item.surname.toLowerCase().match(lowerCase)) {
        return true;
      }
      else {
        return false
      }

    });
    setListOfUser(usearch);
  }
  const sortBtnPress = () => {

    if (sortingOrder.length === 0 || sortingOrder === "descending") {
      const sorted = listOfUser.sort(function (a, b) {
        return a.firstname.localeCompare(b.firstname)
      });
      setListOfUser(sorted.splice(0, listOfUser.length));
      setSortingOrder("ascending");
    }

    else if (sortingOrder === "ascending") {
      const sorted = listOfUser.sort(function (a, b) {
        return b.firstname.localeCompare(a.firstname)
      });
      setListOfUser(sorted.splice(0, listOfUser.length));
      setSortingOrder("descending");
    }
  }

  return (
    <View style={styles.textinputCon}>
      <SvgAnimation
        Iconame={"search"}
        color="black"
      />
      <TextInput
        placeholder="Search"
        style={{ width: width }}
        keyboardType="name-phone-pad"
        onChangeText={searchUser}
      />

      {
        sortingOrder === "ascending"
          ?
          <SvgAnimation
            Iconame={"sort-amount-up-alt"}
            onPress={sortBtnPress}
          />
          :
          <SvgAnimation
            Iconame={"sort-amount-down"}
            onPress={sortBtnPress}
          />

      }

    </View>
  );
}
const mapStateToProps = (state) => ({
  userConnection: state.user.userConnection,
})

const mapDispatchToProps = (dispatch) => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(TextInputContainer));
