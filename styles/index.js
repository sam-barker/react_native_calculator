import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  rootContainer: {
    flex: 1
  },

  displayContainer: {
    flex: 2,
    backgroundColor: '#193441',
    justifyContent: 'center'
  },

  inputContainer: {
    flex: 8,
    backgroundColor: '#3E606F'
  },

  inputRow: {
    flex: 1,
    flexDirection: 'row'
  },

  displayText: {
    color: 'white',
    fontSize: 38,
    fontWeight: 'bold',
    textAlign: 'right',
    padding: 20
  }
})
