import R from '@app/assets/R';
import RNHeader from '@app/components/WHeader';
import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class CustomerScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <RNHeader
                    titleHeader={R.strings.customer}
                />
            </View>
        );
    }
}