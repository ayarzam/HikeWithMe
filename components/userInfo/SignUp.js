import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Alert, Button} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { FirebaseWrapper } from '../../firebase/firebase'

//let this be the only modal class, make sign in available on the main page
export class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      modalVisible: false,
      name: '',
      email: '',
      password: ''
    };
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  async createNewUser(){
    try {
      await FirebaseWrapper.GetInstance().CreateNewDocument('users', {name: this.state.name, email: this.state.email, password: this.state.password})
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
                placeholder="Enter your Name"
                onChangeText={name => this.setState({ name })}
                value={this.state.name}
                />
              </View>
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
                    value={this.state.password} />
                </View>
              </TouchableHighlight>
            </View>
          </View>
          <Button title='Sign Up' onPress={() => this.createNewUser()} />
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <Text>Please Sign Up</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
