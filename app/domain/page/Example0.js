/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Alert,
} from 'react-native'

// import {Button} from 'common/Button'
// import {Color_Primary} from 'common/color'
import {
    flexCenter
} from 'basic'

import {
    ZButton
} from 'domain/component'

export class Example0 extends Component {
    onPress(){
        this.setState({
            loading:true
        })
        setTimeout((()=>{
            this.setState({
                loading:false
            })
            Alert.alert("标题","内容")
        }).bind(this),3000)
    }
    // 构造方法
    constructor(){
        super()
        this.state={
            loading:false
        }
    }
    render() {
        const {loading}=this.state

        return (
            <View style={styles.container}>
                <ZButton
                    onPress={this.onPress.bind(this)}
                    loading={loading}
                >登录</ZButton>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        ...flexCenter,
    },
});

