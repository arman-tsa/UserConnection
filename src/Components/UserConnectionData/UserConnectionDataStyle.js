import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  bgCon: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    flexDirection: 'row',
  },
  imgCon: {
    width: 70,
    height: 70,
    borderRadius: 100,
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 10
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
    backgroundColor: 'white',
  },
  userDetail: {
    marginTop: 15,
    marginLeft: 10,
    flex: 0.9,
  },
  userName: {
    fontSize: 18,
    fontWeight: '300'
  },
  company: {
    fontSize: 14,
    color: "#a1a1a1E6"
  },
  email: {
    fontSize: 14,
    color: "#a1a1a180",
  },
  line: {
    height: 1,
    backgroundColor: "#a1a1a133"
  }
});