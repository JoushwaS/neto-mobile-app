import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable';
import { textVariants } from '~/theme/textVariants';
import CustomButton from './CustomButton';
import Metrix from '~/Global/Metrix';

const CongratsScreenBody = ({btnName, title, desc, btnPress, image}) => {
  return (
    <>
    <View style={{}}>
     <Animatable.View animation="fadeInUpBig">
            <Image
              style={{
                height: Metrix.VerticalSize(150),
                width: Metrix.VerticalSize(150),
                alignSelf: 'center',
                marginVertical: 30,
                // justifyContent: 'center',
              }}
              source={image}
            />
            <Text
              style={[textVariants.h2, { marginTop: 10, textAlign: 'center' }]}
            >
              {title}
            </Text>
            <Text
              style={[
                textVariants.mediumBold,
                { marginTop: 10, textAlign: 'center' },
              ]}
            >
            {desc}
            </Text>
          </Animatable.View>
  </View>

  <View style={styles.buttonContainer}>
    <CustomButton
      text={btnName}
      onPress={btnPress}
    />
  </View>
  </>
  )
}

export default CongratsScreenBody;

const styles = StyleSheet.create({
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginVertical: 30,
      },
})