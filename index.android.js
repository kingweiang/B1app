/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
} from 'react-native';
import {Entry} from './app/entry'
export default class B1App extends Component {
    render() {
        return (
           <Entry/>
        );
    }
}

AppRegistry.registerComponent('B1App', () => B1App);
