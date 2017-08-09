import React, {Component} from 'react'
import {
    View,
    Text,
    Dimensions,
    TouchableOpacity,
    ActivityIndicator,
    Platform
} from 'react-native'

import {flexCenter} from './style'

export class Button extends Component{
// 定义属性的类型
    static propTypes = {
        backgroundColor : React.PropTypes.string
    }
// 当未定义属性时，属性采用默认值
    static defaultProps  = {
        backgroundColor : "#ddd",
        height : 40,
        width : 100,
        loading : false,
        fontSize : 14
    }

    // onPress允许为空
    onPress(){
// 如果onPress 存在则调用该方法
        this.props.onPress && this.props.onPress()
    }

    render(){
        // 从父组件接收属性
        const {height, width, backgroundColor, children, loading, fontSize} = this.props
        // 相当于const height = this.props.height

        // 在IOS上给按钮增加5dp的BorderRadius
        let borderRadius = Platform.OS === 'ios'?5:0
        // 在Android 文字会比IOS大一些
        let fSize = Platform.OS === 'android' ? fontSize * 1.2 : fontSize

        // Loading 小菊花效果
        if(loading) {
            return (
                <View
                    style={{backgroundColor, width,  height, ...flexCenter}}>
                    <ActivityIndicator />
                </View>
            )
        }
        return(
            <TouchableOpacity
                // 执行一个事件的时候，需要bind才能找到this
                onPress={this.onPress.bind(this)}
                style={{backgroundColor, width,  height, ...flexCenter, borderRadius, ...this.props.style}}>
                <Text style={{color :"white", fontSize : fSize, fontWeight : Platform.OS === "android" ? "bold" : "normal"}}>{children}</Text>
            </TouchableOpacity>
        )
    }
}
