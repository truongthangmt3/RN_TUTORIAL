import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class ProductScreen extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text >{JSON.stringify(this.props.productState)} </Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    productState: state.productReducer
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductScreen)
