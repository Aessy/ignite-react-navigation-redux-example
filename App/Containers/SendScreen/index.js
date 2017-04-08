import React, {Component} from 'react'
import { ScrollView } from 'react-native'
import { connect } from 'react-redux'
import Card from '../../Components/Card'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

import {find} from '../../Services/MockSendAPI'

// Styles
import styles from './SendScreenStyle'

class Send extends Component {
  state = {
    ship: []
  }
  componentWillMount () {
    console.log('find', find())
    const {data: {ship}} = find()
    this.setState({ship}, () => {
      console.log('state', this.state)
    })
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        {this.state.ship.map((shipment) => <Card {...shipment} />)}
      </ScrollView>
    )
  }

}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Send)
