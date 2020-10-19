import React, { Component } from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getProduct } from '@action'
export class MessageScreen extends Component {
  static propTypes = {
    prop: PropTypes
  }
  componentDidMount() {
    this.props.getProduct();
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ScrollView>
          <Text> {JSON.stringify(this.props.productState)} </Text>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const mapStateToProps = (state) => ({
  productState: state.messageReducer
})

const mapDispatchToProps = {
  getProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageScreen)
