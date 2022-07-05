import {StyleSheet} from 'react-native';
import colors from '../colors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    backgroundColor: colors.blue,
    height: 200,
    borderBottomStartRadius: 50,
    borderBottomEndRadius: 50,
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    alignItems: 'center',
  },
  body: {
    margin: 30,
  },
  logoContainer: {
    width: 150,
    height: 150,
  },
  sceneName: {color: colors.white, fontFamily: 'Ubuntu-Medium'},
  textInputContainer: {
    marginVertical: 10,
  },
  forgotPasswordButton: {
    alignSelf: 'flex-end',
  },
  forgotPasswordText: {
    fontFamily: 'Ubuntu-Bold',
    fontSize: 10,
  },
  buttonContainer: {
    marginVertical: 15,
  },
});
export default styles;
