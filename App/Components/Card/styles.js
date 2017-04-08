import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  card: {
    height: 190,
    padding: 16,
    marginTop: 14,
    backgroundColor: 'white'
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  cardStatusBar: {
    position: 'absolute',
    height: 50,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'white',
    paddingTop: 6,
    paddingRight: 8,
    paddingBottom: 6,
    paddingLeft: 8
  },
  cardStatusBarTitle: {
    fontSize: 18
  }
})
