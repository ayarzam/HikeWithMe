import React, { Component } from 'react'
import MapView from 'react-native-maps'
import { StyleSheet, Dimensions, View } from 'react-native'
// import Geolocation from 'react-native-geolocation-service';


let {height, width} = Dimensions.get('window')
const styles = StyleSheet.create({
 container: {
   height: height,
   width: width,
 },
 map: {
   ...StyleSheet.absoluteFillObject,
 },
})

const props = {}
export default class MyMaps extends Component{
  constructor(props){
    super(props)
      this.state = {
        latitude: 0,
        longitude:0
      }
    
  }
  componentDidMount() {
    let hasLocationPermission
    // Instead of navigator.geolocation, just use Geolocation.
    if (hasLocationPermission) {
        navigator.eolocation.getCurrentPosition(
            (position) => {
                console.log(position);
            },
            (error) => {
                // See error code charts below.
                console.log(error.code, error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
    }
}
  render(){
    return (
      <View style={styles.container}>
        <MapView
           style={styles.map}
           initialRegion={{
             latitude: 40.730610,
             longitude: -73.935242,
             latitudeDelta: 1,
             longitudeDelta: 1,
           }}
           showsUserLocation={true}
           />
      </View>
      )
    }
  }
 

