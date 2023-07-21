import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
import {deviceHeight, deviceWidth} from '../../utils/constants';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.purpleBackground,
    flex: 1,
  },
  backgroundImage: {
    width: deviceWidth,
    height: deviceHeight * 0.9,
    paddingTop: 45,
  },
  topText: {
    backgroundColor: colors.lightPurple,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignSelf: 'flex-start',
    marginLeft: 24,
  },
  bannerImage: {
    width: deviceWidth * 0.8,
    height: deviceHeight * 0.4,
    resizeMode:'center',
    alignSelf:'center',
    marginTop:15
  },
  headingStyle:{
   textAlign:'center'
  },
  subHeadingStyle:{
   textAlign:'center',
   fontFamily:"Poppins-Medium",
   color:colors.blue,
   marginVertical:8
  },
  linearGradient:{
   width:61,
   height:61,
   borderRadius:61/2,
   alignItems:'center',
   justifyContent:'center',
   alignSelf:'center',
   marginVertical:12
  }
});
