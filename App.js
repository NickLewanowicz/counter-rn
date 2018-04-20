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
        <View style={styles.display}>
          <Text style={styles.numberView}>
            {number}
          </Text>
        </View>
        <View style={styles.toggleButtons}>
          <Button style={styles.incButton}
            large
            buttonStyle={styles.buttonStyle}
            onPress={() => this._onPressButton(-1)}
            icon={{name: 'arrow-left', type: 'evilicon',  size: 150, iconStyle: styles.incButton }}
            title='' />
          <Button style={styles.incButton}
            large
            buttonStyle={styles.buttonStyle}
            onPress={() => this._onPressButton(1)}
            icon={{name: 'arrow-right', type: 'evilicon', size: 150,iconStyle: styles.incButton }}
            title='' />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1
  },
  display: {
    flex: 2,
    justifyContent: 'center',
    backgroundColor: 'skyblue',
    width: '100%',
    alignItems: 'center'
  },
  numberView: {
    fontSize: 200,

  },
  toggleButtons: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3f75a2',
    flex: 2
  },
  incButton: {
    flex: 1,
    width: 200,
    backgroundColor: '#3f75a1',
  },
  buttonStyle: {
    backgroundColor: '#3f75a2',
    height: '100%',
    width: '100%'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
