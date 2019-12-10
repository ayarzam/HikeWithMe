# HikeWithMe

Hike With Me is a mobile app that allows the user the ability to map the distance and area that they hike.

It is an ongoing project started during Grace Hopper's 2 day stackathon. 

I used Reac Native, React Native Maps, Firebase and the Firestore

Some challenges faced while working on this project include the integration of maps. I attempted to use google maps but encountered some problems due to problems using xcode not limited to the need to write in swift which is a language that I have no experience with yet. To have at least a partially working map by the deadline I decided to use React Native maps with plans to come back and attempt to change it to google maps later. 

Future direction for this project include the ability to save a hike, the ability for the user to navigate all of their hiking logs, creating and building out a message board that allows the user to communicate and connect with friends. 

# Video Walkthrough 

[Video Walkthrough](https://youtu.be/dddSGT1LumY)
The video walkthrough contains a video of the "Hike With Me" from the login/signup screen to rendering a map. The end frame shows a sharp change in direction this happened because I lost phone service for a while so the app compensated by drawing a line from the geolocation logged before I lost service to my current location.
  

# To run the app for testing 
  First download Expo
  
  Clone the repository 
  
  npm install 
  
  You will need an api key from the Google Firestore for the app to work, you may obtain one [here](https://cloud.google.com/firestore/)
  
  Once you obtain an api key and firebase configuration copy and paste the info in a file named config.js in the firebase folder
  
  npm start
  
  Scan the QR code using your phone's camera
  
  Expo will launch and Bundle javascript 
  
  You will then have access to to Hike With Me
  
  
