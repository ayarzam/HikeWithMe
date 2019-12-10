import React from 'react'
import { StyleSheet, Text, TextInput, View, Button, Image, ImageBackground } from 'react-native'
import * as firebase from 'firebase'

export default class SignUp extends React.Component {
  constructor(){
    super()
    this.state = {
      email: '',
      password: '',
      errorMessage: null
    }
  }
  
  handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.props.navigation.navigate('Main'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }
render() {
    return (
      <ImageBackground
        source={{
          uri:
            "http://getwallpapers.com/wallpaper/full/a/d/c/970076-fall-computer-backgrounds-1920x1080-for-computer.jpg"
        }}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={styles.container}>
          <Image
            style={{
              width: "85%",
              height: "9%",
              marginTop: 60
            }}
            source={{
              uri: "http://www.auplod.com/u/aodpulb9ad0.png"
            }}
          />
          <Text
            style={{
              marginTop: 90,
              fontSize: 25,
              fontWeight: "500",
              color: "white"
            }}
          >
            Sign Up
          </Text>
          {this.state.errorMessage && (
            <Text style={{ color: "white" }}>
              {this.state.errorMessage}
            </Text>
          )}
          <TextInput
            placeholder="Email"
            placeholderTextColor="white"
            autoCapitalize="none"
            style={styles.textInput}
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />
          <TextInput
            secureTextEntry
            placeholder="Password"
            placeholderTextColor="white"
            autoCapitalize="none"
            style={styles.textInput}
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          />
          <View
            style={{
              marginTop: 80,
              backgroundColor: "orange",
              width: "30%"
            }}
          >
            <Button
              color="white"
              title="Sign Up"
              onPress={this.handleSignUp}
            />
          </View>
          <Button
            color="white"
            title="Already have an account? Login"
            onPress={() => this.props.navigation.navigate("Login")}
          />
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'center'
  },
  textInput: {
    color: 'white',
    height: 40,
    width: '90%',
    borderColor: 'white',
    borderWidth: 1,
    marginTop: 10
  }
})
