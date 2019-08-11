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
export default class MyMaps extends Component{
//   componentDidMount() {
//     let hasLocationPermission
//     // Instead of navigator.geolocation, just use Geolocation.
//     if (hasLocationPermission) {
//         Geolocation.getCurrentPosition(
//             (position) => {
//                 console.log(position);
//             },
//             (error) => {
//                 // See error code charts below.
//                 console.log(error.code, error.message);
//             },
//             { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//         );
//     }
// }
  render(){
    return (
      <View style={styles.container}>
        <MapView
           style={styles.map}
           initialRegion={{
             latitude: 37.78825,
             longitude: -122.4324,
             latitudeDelta: 0.0922,
             longitudeDelta: 0.0421,
           }}
           />
      </View>
      )
    }
  }
 

