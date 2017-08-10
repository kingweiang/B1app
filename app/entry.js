import React, { Component } from 'react';
import {
    View,
    BackHandler,
    Text,
    Platform
} from 'react-native'

import {Routes} from 'domain/page'
import {Navigator} from 'react-native-deprecated-custom-components'
import {ZNavBar}from 'domain/component'
import {COLOR_NAV_DARK,COLOR_TITLE} from 'domain/def'
import {flexCenter} from 'basic'

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
        const {Component} = route
        return (
            <View style={{flex : 1}}>
                <View style={{ backgroundColor : route.Inverse ? COLOR_NAV_DARK : "white", height : Platform.OS==='ios'?64:40}}>
                </View>
                <Component navigator={navigator} />
            </View>

        )
    }

    _renderNavBar(){
        const routeMapper ={
            LeftButton(route, navigator, index, navState) {
                if(index === 0){
                    return null
                }
                return <ZNavBar.Back route={route} navigator={navigator}/>
            },
            // 右键
            RightButton(route, navigator, index, navState) {
                return null
            },
            // 标题
            Title(route, navigator, index, navState) {
                return (
                    <View style={{flex:1,...flexCenter,marginLeft: Platform.OS==='ios'?0:70,marginBottom: Platform.OS==='ios'?0:10}}>
                        <Text style={{color : route.Inverse ? "white" : COLOR_TITLE, fontSize : 18}}>{route.Title}</Text>
                    </View>
                );
            },
        }
        return(
            <Navigator.NavigationBar
                routeMapper={routeMapper}
                // style = {{backgroundColor:'orange'}}
            />
        )
    }
    render() {
        return <Navigator
            ref="navigator"
            // 最初的路线（第一个页面）
            initialRoute={Routes.Example1}
            // 渲染场景
            renderScene={this._renderScene}
            navigationBar= {this._renderNavBar()}
        />
    }
}
