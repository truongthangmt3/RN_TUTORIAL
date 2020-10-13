import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RNHeader from '@app/components/WHeader';
import moduleName from '@'

export class UserScreen extends Component {
    static propTypes = {
        prop: PropTypes
    }

    componentDidMount() {
        alert(JSON.stringify(this.props.userState))
    }

    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text>
                    {JSON.stringify(this.props.userState)}
                </Text>

                <TouchableOpacity onPress={() => {
                    this.props.
                }}>
                    <Text>
                        Press
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    userState: state.userReducer
})

const mapDispatchToProps = {
    getUserInforAction
}

export default connect(mapStateToProps, mapDispatchToProps)(UserScreen)
