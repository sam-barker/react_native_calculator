import React from 'react'
import { TouchableHighlight, Text } from 'react-native'
import Styles from './styles'

export default ({value, onPress, highlighted = false, operator = false}) => {
  const highlightedStyle = highlighted ? Styles.inputButtonHighlighted : null
  const operatorStyle = operator ? Styles.operatorButton : null
  const operatorTextStyle = operator ? Styles.operatorText : null
  return (
    <TouchableHighlight
      style={[Styles.inputButton, highlightedStyle, operatorStyle]}
      underlayColor={'#193441'}
      onPress={onPress}>
      <Text style={[Styles.inputButtonText, operatorTextStyle]}>
        {value}
      </Text>
    </TouchableHighlight>
  )
}
