import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Alert} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { FirebaseWrapper } from '../../firebase/firebase';

export class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      modalVisible: false,
      email: '', 
      password: ''
    };
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  async CreateNewUser(){
    try {
      await FirebaseWrapper.GetInstance().CreateNewDocument('users', {email: this.state.email}, {password: this.state.password})
    } catch (error) {
      console.log('It didn\'t work', error)
    }
  }

  render() {
    return (
      <View style={{ marginTop: 22 }}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={{ marginTop: 30 }}>
            <View style={{ marginBottom: 15 }}>
              <View style={{ marginTop: 30 }}>
                <TextInput
                  placeholder="Enter your Email"
                  onChangeText={email => this.setState({ email })}
                  value={this.state.email}
                />
                
              </View>
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
              >
                <View style={{ marginTop: 30 }}>
                  <TextInput
                    placeholder="Enter your Password"
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password}
                  />
                </View>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <Text>Please Sign In</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
