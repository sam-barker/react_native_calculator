import React from 'react'
import { Text, View } from 'react-native'
import Styles from './styles'
import { InputButton } from'./components'

const INPUT_BUTTONS = [
  [1, 2, 3, '/'],
  [4, 5, 6, '*'],
  [7, 8, 9, '-'],
  [0, 'CE', '+', '=']
]

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      previousInputValue: 0,
      inputValue: 0,
      operator: null,
      calculationString: ''
    }
  }

  onButtonPress (input) {
    if (typeof(input) === 'number') this.onNumberPress(input)
    else if (input === '=') this.onEqualsPress()
    else if (input === 'CE') this.clearEverything()
    else this.onOperatorPress(input)
  }

  onNumberPress (number) {
    const newValue = (this.state.inputValue * 10) + number
    this.setState({
      inputValue: newValue,
      calculationString: `${this.state.calculationString}${number}`
    })
  }

  onEqualsPress () {
    if (!this.state.operator) return
    const isDividingByZero = this.state.operator === '/' && this.state.inputValue === 0
    this.setState({
      previousInputValue: 0,
      inputValue: isDividingByZero ? 0 : eval(
        this.state.previousInputValue +
        this.state.operator +
        this.state.inputValue
      ),
      operator: null
    })
  }

  clearEverything () {
    this.setState({
      previousInputValue: 0,
      inputValue: 0,
      operator: null
    })
  }

  onOperatorPress (input) {
    this.setState({
      operator: input,
      previousInputValue: this.state.inputValue,
      inputValue: 0,
      calculationString: `${this.state.calculationString} ${input} `
    })
  }

  renderColumn (value) {
    const isHighlighted = this.state.operator === value
    return (
      <InputButton
        value={value}
        highlight={isHighlighted}
        operator={typeof(value) !== 'number'}
        onPress={this.onButtonPress.bind(this, value)}
        key={`${value}`} />
    )
  }

  renderRow (row, index) {
    const rowButtons = row.map(this.renderColumn.bind(this))
    return (
      <View style={Styles.inputRow} key={`row-${index}`}>
        {rowButtons}
      </View>
    )
  }

  renderInputButtons () {
    return INPUT_BUTTONS.map(this.renderRow.bind(this))
  }

  render () {
    return (
      <View style={Styles.rootContainer}>
        <View style={Styles.displayContainer}>
          <Text style={Styles.displayText}>
            {this.state.inputValue}
          </Text>
          <Text style={Styles.displayText}>
            {this.state.calculationString}
          </Text>
        </View>
        <View style={Styles.inputContainer}>
          {this.renderInputButtons()}
        </View>
      </View>
    )
  }
}
