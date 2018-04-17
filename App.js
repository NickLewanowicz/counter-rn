/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert
} from 'react-native';
import { Button } from 'react-native-elements';



Props = {};
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {number:0};
    
    this._onPressButton = this._onPressButton.bind(this)
  }
  _onPressButton(num) {
    const {number} = this.state
    if(number + num > -1){
      this.setState({number: number + num})
    }
  };
  
  render() {
    let number = this.state.number
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.numberView}>
            {number}
          </Text>
        </View>
        <View style={styles.toggleButtons}>
          <Button
            large
            onPress={() => this._onPressButton(-1)}
            icon={{name: 'arrow-left', type: 'evilicon'}}
            title='' />
          <Button
            large
            onPress={() => this._onPressButton(1)}
            icon={{name: 'arrow-right', type: 'evilicon', buttonStyle: styles.someButtonStyle }}
            title='' />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  numberView: {
    fontSize: 100
  },
  toggleButtons: {
    flexDirection: 'row',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
