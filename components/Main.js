import React from 'react'
import { StyleSheet, Image, Text, View, Button, ScrollView, ImageBackground } from 'react-native'
import * as firebase from 'firebase'

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }

  componentDidMount() {
    const { currentUser } = firebase.auth();
    this.setState({
      currentUser
    });
  }

  render() {
    const { currentUser } = this.state;
    return (
      <ImageBackground
        source={{
          uri:
            'http://getwallpapers.com/wallpaper/full/0/f/3/970135-widescreen-fall-computer-backgrounds-1920x1080.jpg'
        }}
        style={{ width: '100%', height: '100%' }}
      >
        <ScrollView style={styles.contentContainer}>
          <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: "600", color: 'gray' }}>
            Hi {currentUser && currentUser.email}!
          </Text>
          <View>
            <View style={styles.container}>
              <Image
                style={{
                  width: 200,
                  height: 200,
                  borderRadius: 100,
                  marginTop: -50,
                  borderWidth: 5,
                  borderColor: 'gray'
                }}
                source={{
                  uri:
                    'https://www.nynjtc.org/sites/default/files/styles/news_center__single_page_style/public/Hike-Catskills-WittenbergCornellSlide-WalkingBoots-HeatherDarley-2017-08.jpg?itok=prPBOd3f'
                }}
              />
            </View>

            <View
              style={{
                marginTop: 70,
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
                alignContent: 'center',
                borderWidth: 2,
                borderColor: 'white',
                padding: 10
              }}
            >
              <Text
                style={{ fontSize: 16, fontWeight: "500", color: 'white'}}
              >
                You Hiked 4.5 miles in 1hr 30 minutes{' '}
              </Text>
              <Text style={{ marginTop: 10, fontSize: 16, fontWeight: "600", color: 'white'}}> 8/11/19</Text>
            </View>
          </View>
          <View style={{marginTop: 100, backgroundColor: 'orange'}}>
          <Button
            color="white"
            title="Log a New Hike"
            onPress={() => this.props.navigation.navigate('NewMap')}
          />
          </View>
        </ScrollView>
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
  }
})
