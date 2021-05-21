import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  con: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  circle: {
    width: 120,
    height: 120,
    borderRadius: 100,
    backgroundColor: 'white',
    position: 'absolute',
    zIndex: 10,
    top: -60
  },
  square: {
    width: 300,
    backgroundColor: 'white',
    borderRadius: 4,
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: 100
  },
  name: {
    fontSize: 30,
    paddingTop: 80,
    color: "#000000",
    textAlign: 'center',
    fontFamily: 'bold'
  },
  organization: {
    textAlign: 'center',
    color: '#00e8f7',
    fontFamily: 'bold',
    marginBottom: 10
  },
  description: {
    color: '#00000080',
    marginHorizontal: 10,
    textAlign: 'center'
  }
});