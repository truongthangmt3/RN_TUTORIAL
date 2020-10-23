import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProduct } from '@action';

export class ProductScreen extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text> {this.props.productState.data} </Text>

        <TouchableOpacity
          onPress={() => {
            this.props.getProduct('Do something');
          }}
        >
          <Text>Do something</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  productState: state.productReducer,
});

const mapDispatchToProps = {
  getProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductScreen);
