import React, {
  Component,
  PropTypes
} from 'react'

import {
  View,
  Image,
  Text
} from 'react-native'

import styles from './styles'

export default class Card extends Component {

  static defaultProps = {}

  static propTypes = {
    title: PropTypes.string.isRequired
  }

  render () {
    const {title} = this.props
    return (
      <View style={styles.card}>
        <Image source={require('../../Images/reactangle6.png')} style={styles.backgroundImage} resizeMode='cover' />
        <View style={styles.cardStatusBar}>
          <Text style={styles.cardStatusBarTitle}>{title}</Text>
        </View>
      </View>
    )
  }

}
