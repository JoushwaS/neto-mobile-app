//OTPScreen.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  StatusBar,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { SafeAreaView } from 'react-native-safe-area-context';

import CustomButton from '../../components/shared/CustomButton';
import PageContainer from '~/components/shared/PageContainer';
import { textVariants } from '~/theme/textVariants';

const CardCongratulationScreen = ({ route, navigation }) => {
  return (
    <PageContainer>
      <View
        style={
          {
            // justifyContent: 'space-between',
            // height: '100%',
            // backgroundColor: 'red',
          }
        }
      >
        <View style={styles.centered}>
          <Animatable.View animation="fadeInUpBig">
            <Image
              style={{
                alignSelf: 'center',
                // marginBottom: 10,
                marginTop: 30,
                // justifyContent: 'center',
              }}
              source={require('../../../assets/images/cardCongratsImg.png')}
            />
            <View>
              <Text
                style={[
                  textVariants.h2,
                  { marginTop: 10, textAlign: 'center' },
                ]}
              >
                Congratulations!
              </Text>
              <Text
                style={[
                  textVariants.mediumBold,
                  { marginTop: 10, textAlign: 'center' },
                ]}
              >
                Your card has been successfully added.
              </Text>
            </View>
          </Animatable.View>
        </View>
      </View>
    </PageContainer>
  );
};

export default CardCongratulationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
  },
  centered: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'red',
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontWeight: '800',
    color: '#000000',
    fontSize: 35,
    textAlign: 'center',
    lineHeight: 44,
    whiteSpace: 'nowrap',
    marginVertical: 20,
  },
  subtitle: {
    // width: '80%',
    opacity: 0.8,
    fontFamily: 'Poppins-Regular',
    fontWeight: '600',
    color: '#000000',
    fontSize: 18,
    textAlign: 'center',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginVertical: 30,
  },
});
