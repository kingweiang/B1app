/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    View,
    BackHandler
} from 'react-native'

import {Example1} from 'domain/page/Example1'
import {Example2} from 'domain/page/Example2'
import {Example3} from 'domain/page/Example3'
import {Navigator} from 'react-native-deprecated-custom-components'

export class Entry extends Component {

    constructor(){
        super()
    }
    // 组件加载完成后，对Android返回键进行监听
    componentDidMount(){
        BackHandler.addEventListener('hardwareBackPress', (()=>{
            const navigator = this.refs.navigator
            navigator.pop()
                return true;
        }).bind(this));
    }

    _renderScene(route, navigator){

        console.log(route)

        switch(route.name) {
            case "Example1" :
                // 定义navigator，子组件才能调用push，pop方法
                return <Example1 navigator={navigator} />
            case "Example2" :
                return <Example2 navigator={navigator} />
            case "Example3" :
                return <Example3 navigator={navigator} />
        }

    }
    render() {
        return <Navigator
            ref="navigator"
            // 最初的路线（第一个页面）
            initialRoute={{name:"Example1"}}
            // 渲染场景
            renderScene={this._renderScene}
            />
    }
}








