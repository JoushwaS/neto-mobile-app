//OTPScreen.js
import React from 'react';
import { View, StyleSheet } from 'react-native';

import PageContainer from '~/components/shared/PageContainer';
import CongratsScreenBody from '~/components/shared/CongratsScreenBody';
import congratsImage from '../../../assets/images/imgCongrats.png';
import { useDispatch } from 'react-redux';


const CongratulationScreen = ({ route, navigation }) => {
  const { data } = route.params;
  const dispatch = useDispatch();

  
  return (
    <PageContainer>
      <View
        style={{
          justifyContent: 'space-between',
          height: '100%',
          // backgroundColor: 'red',
        }}
      >
        <CongratsScreenBody
          btnName={'Set up password'}
          title={'Congratulations!'}
          desc={
            "Your mobile number has been successfully  \n verified. Let's secure your account \n with a password."
          }
          btnPress={()=>navigation.navigate("SetupPassword")}
          image={congratsImage}
        />
      </View>
    </PageContainer>
  );
};

export default CongratulationScreen;

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
