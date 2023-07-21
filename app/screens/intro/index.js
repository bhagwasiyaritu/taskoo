import {
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Images} from '../../utils/images';
import {CommonText} from '../../components/commonText';
import {Strings} from '../../utils/strings';
import {CommonHeading} from '../../components/commonHeading';
import {RightCircleArrow} from '../../assets/images/svg/rightCircleArrow';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../utils/colors';
import { useNavigation } from '@react-navigation/native';
import { routes } from '../../utils/routes';

export const Intro = () => {

  const navigation = useNavigation()
  return (
    <LinearGradient
      style={styles.container}
      colors={[colors.purpleBackground, colors.white, colors.purpleBackground]}>
      <ImageBackground
        source={Images.introScreenWhiteBg}
        resizeMode="stretch"
        style={styles.backgroundImage}>
        <View style={styles.topText}>
          <CommonText text={Strings.taskoo} />
        </View>
        <Image source={Images.introBanner} style={styles.bannerImage} />
        <CommonHeading
          heading={Strings.manageEveryTask}
          style={styles.headingStyle}
        />
        <CommonText
          text={Strings.introSubHeading}
          style={styles.subHeadingStyle}
        />
        <View style={{flex: 1}} />
        <TouchableOpacity onPress={()=>navigation.navigate(routes.signUp)}>
          <LinearGradient
            colors={[colors.red, colors.lightRed]}
            style={styles.linearGradient}>
            <RightCircleArrow />
          </LinearGradient>
        </TouchableOpacity>
      </ImageBackground>
    </LinearGradient>
  );
};
