import { Dimensions, StyleSheet } from 'react-native';
import { BLACK, WHITE } from 'constants/color.constants';
import { REGULAR_FONT } from 'constants/fonts.constants';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginBottom: 15,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: BLACK,
    height:50,
  },
  buttonText: {
    color: BLACK,
    fontSize: 20,
    fontFamily: REGULAR_FONT,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 30,
    // paddingTop: 130,
    paddingTop: Dimensions.get('window').height*0.1,
  },
  imageContainer: {
    // height: 160,
    height: Dimensions.get('window').height*0.3,
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  inlineDisplay: {
    flexDirection:'row',
  },
  label: {
    color: BLACK,
    fontSize: Dimensions.get('window').width*0.05,
  },
  labelRight: {
    alignItems: 'flex-end',
    flex: 1,
    justifyContent: 'center',
  },
  loginImage: {
    //height: 130,
    height: Dimensions.get('window').height*0.25,
    resizeMode: 'contain',
    flex: 1,
  },
  loginLabel: {
    color: WHITE,
    fontSize: 35,
    marginBottom: 15,
  },
  switch: {
    transform: [{ scaleX: 1.1 }, { scaleY: 1.15 }]
  },
  switchContainer: {
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 25,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    height: Dimensions.get('window').height*0.07,
    paddingHorizontal: Dimensions.get('window').width*0.05,
    paddingVertical: Dimensions.get('window').height*0.01,
  }
});

export default styles;

