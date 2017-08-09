/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    View,
} from 'react-native'

import {Example1} from 'domain/page/Example1'
import {Example2} from 'domain/page/Example2'
import {Navigator} from 'react-native-deprecated-custom-components'

export class Entry extends Component {

    constructor(){
        super()
    }
    _renderScene(route, navigator){

        console.log(route)

        switch(route.name) {
            case "Example1" :
                // 定义navigator，子组件才能调用push，pop方法
                return <Example1 navigator={navigator} />
            case "Example2" :
                return <Example2 navigator={navigator} />
        }

    }
    render() {
        return <Navigator
            // 最初的路线（第一个页面）
                initialRoute={{name:"Example1"}}
                // 渲染场景
                renderScene={this._renderScene}
            />
    }
}








