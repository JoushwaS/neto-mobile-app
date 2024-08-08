import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card } from '../kit'
import { fontFamilies } from '~/theme/textVariants';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Color } from '~/Global/GlobalStyles';
import Metrix from '~/Global/Metrix';

const TransactionalCard = ({data={}, showSaperator=true}) => {
  return (
    <View style={{paddingHorizontal: Metrix.HorizontalSize(20)}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
              <Text style={{fontFamily: fontFamilies.semiBold, fontSize: 12}}>{data.title}</Text>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{color: Color.colorPrimary, fontFamily: fontFamilies.bold, fontSize: Metrix.customFontSize(14)}}>{data?.points}</Text>
                        <View style={{marginLeft: 8, justifyContent: 'center', alignItems: 'center'}}>
                            <FontAwesome name={data?.minus ? 'minus' :'plus'} color={data?.minus ? 'red' : '#34C759'} size={Metrix.customFontSize(8)} />
                            <Text style={{fontSize: Metrix.customFontSize(5), fontFamily:fontFamilies.semiBold, color: Color.colorGray_200}}>PTS</Text>
                        </View>
                </View>
            </View>

            <View style={{flexDirection: 'row', marginTop: Metrix.VerticalSize(-4), justifyContent: 'space-between', alignItems: 'center'}}>
              <Text style={[{fontSize: Metrix.customFontSize(10), color: Color.colorGray_300, fontFamily: fontFamilies.light}]} >{data.date}</Text>
              <Text style={[styles.transactionTitleStyle, {fontSize: Metrix.customFontSize(10)}]} >{data.amount} AED</Text>
            </View>

            {showSaperator && <View style={{height: Metrix.VerticalSize(0.6), backgroundColor: Color.colorGray_100, width: '100%', marginVertical: Metrix.VerticalSize(5)}} />}

          </View>

          
  )
}

export default TransactionalCard

const styles = StyleSheet.create({
    transactionalCardRecordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
        // alignItems: 'center',
        width: '100%',
        // height: heightPercentageScale(12),
        // marginTop: 10,
        // alignSelf: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: Color.colorWhite,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
      },
      transactionTitleStyle: {
        fontFamily: fontFamilies.semiBold,
        color: Color.colorBlack,
        fontSize: 14,
      },
})