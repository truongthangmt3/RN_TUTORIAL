import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getProduct } from '@action'
export class Notification extends Component {
    static propTypes = {
        prop: PropTypes
    }
    componentDidMount() {
        this.props.getProduct();
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text> {JSON.stringify(this.props.producState)} </Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    producState: state.productReducer,
})

const mapDispatchToProps = {
    getProduct,
}

export default connect(mapStateToProps, mapDispatchToProps)(Notification)
