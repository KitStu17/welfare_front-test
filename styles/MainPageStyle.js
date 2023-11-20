import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  welFare: {
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 5,
    height: 200,
    width: '45%',
    margin: 10,
  },
  TextTitle: {
    fontSize: 20,
    padding: 3,
    fontFamily: 'The_Jamsil_5',
    color: 'black',
  },
  TextSubTitle: {
    marginTop: 5,
    marginBottom: 5,
    paddingLeft: 5,
    fontSize: 16,
    fontFamily: 'The_Jamsil_4',
    color: '#888686',
  },
  TextContents: {
    marginTop: 5,
    marginBottom: 5,
    paddingLeft: 5,
    fontSize: 16,
    fontFamily: 'The_Jamsil_3',
    color: 'black',
  },
  login: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  btn: {
    width: 100,
    height: 30,
    marginBottom: 5,
    // borderWidth: 1,
    // borderRadius: 20,
    // borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#2196F3',
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
  },
});
