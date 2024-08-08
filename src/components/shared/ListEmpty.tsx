import React, {memo} from 'react'
import { StyleSheet, Text } from 'react-native'
import { fontFamilies } from '~/theme/textVariants';


const ListEmpty = ({message, style={}}) => {
  return (
    <Text style={[styles.listEmptyStyle, {...style}]}>{message}</Text>
  )
}

export default memo(ListEmpty);
const styles = StyleSheet.create({
    listEmptyStyle: {
        marginVertical: 10,
        fontFamily: fontFamilies.semiBold,
        fontSize: 16,
        textAlign: 'center'
    }
})
