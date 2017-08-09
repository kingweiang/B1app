/**
 * Created by ww on 2017/8/8.
 */
import React, {Component} from 'react'

import {
    Dimensions
} from 'react-native'

import {
    Button
} from 'basic'

import {
    Color_Primary
} from 'domain/def'

export  class ZButton extends Component{
    render(){
        return(
            <Button
                height={42}
                width={Dimensions.get('window').width - 40}
                fontSize={14}
                backgroundColor={Color_Primary}
                {...this.props}
            />
        )
    }
}