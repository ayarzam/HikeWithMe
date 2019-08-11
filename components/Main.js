import React from 'react'
import { StyleSheet, Platform, Image, Text, View, Button } from 'react-native'
import * as firebase from 'firebase'

export default class Main extends React.Component {
  constructor(){
    super()
    this.state = {
      currentUser: null
    }
  }
  
  componentDidMount() {
    const { currentUser } = firebase.auth()
    this.setState({
      currentUser
    })
}

render() {
    const { currentUser } = this.state
return (
      <View style={styles.container}>
        <Text>
          Hi {currentUser && currentUser.email}!
        </Text>
        <Button
          title="Log a New Hike"
          onPress={() => this.props.navigation.navigate('MyMaps')}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
