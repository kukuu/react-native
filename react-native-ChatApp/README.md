# REACT Native

It is an all in one solution to build native mobile apps for Android and iOS platform in one go and amalgamates native 
app development with JavaScript UI development. It renders apps using real mobile UI components.

Note:

The 'keys' from the routing sub-set  module  here:  

```
<Scene key='home' title='Home' component={Home}/> 

```
in App.js (shared module) is used to connect to the backend via Firebase in the callback() - line 36.


UI Component Examples: 

```
1. Textinput, Picker, Switch, Slider

2. Touchable Elements

3. ListView & ScrollView

4. Alerts, Modals, ProgressBars

5. StatusBar

6. TabBariOS

7. ToolBar Android

Quick Bites :

1. Instal android and iOS SDK

2. Initialise project: at terminal. This generates boiler template

react-native init chatApp

3. Run application:

react-native run-ios

react-native run-android

4. Create an app component (app.jsx) and import into both index.ios.js/index.android.js files for iOS and android.

The app component will import all shared components. Say Home and chat components

app.jsx will sit in src

chat.jsx and home.jsx will sit in src/componebt

5. For routing you can use react-native-router-flux

nam i  react-native-router-flux —save

i. router
ii. scene

ROUTER
	SCENE KEY COMPONENT

key = ‘chat’
component = {Chat}

6. You can use the style prop to set a value i.e
<Scene key=‘root’ style={{paddingTop:64}} >

7. Adding conditional statement for platform:

import {Platform}  from  ‘react-native’

<Scene key=‘root’ style={{paddingTop:Platform.OS === ‘iOS’ ? 64 : 54}} >

8. Create styles and pass as props to the components:

var styles = Stylesheet.create({

	title: {
		marginTop: 20,
		marginLeft:30,
                  fontSize
	}

})


<Text style={styles.title}>

9. Use command D to enable hot reload and other features


10. Components:

View
	Text
	TextInput
	Stylesheet
        TouchableOpacity  => Text (for button)

check getting started to see list of components you can add

11. Pass an oppress event to TouchableOpacity to send trigger:

<TouchableOpacity  onPress= { () => {
	console.log(this.state.name)
	//debugger

}}>

12. Changing state of text input when typed:

i. first set a set of text as empty:

state = {
	name: ‘’;
}

ii.  then call setState in onChangeText to the value of the parameter or argument

<TextInput onChangeText = {(text) => {
this.setState({
	name:text
,})

}}
 value = {this.state.name}
/>

Debug menu works for only chrome. Need to check


13. For routing use action from react-native-router-flux

Use the key name here from the ‘’scene’ 

<TouchableOpacity  onPress= { () => {
	Action.chat({
		name:this.state.name
})

}}>

14. To receive message into receiving page use props

		<Text>
			Hello {this.props.name}
		</Text>

15. Best practice to set default props. i.e

Chat.defaultProps = {
	name: ‘John’
}

Chat.propTypes = {
	name: React.PropTypes.string




```
## Application Handshaking - Android vs iOS

https://github.com/kukuu/react-native-ChatApp/tree/master/handshaking

## Resources

1. https://facebook.github.io/react-native/docs/getting-started

2. PWA - https://github.com/kukuu/PWA

3. Algorithm - https://github.com/kukuu/algorithms/tree/master/algorithms 

4. Software Design and Management - https://github.com/kukuu/algorithms/blob/master/algorithms.md

5. Systems Design and Architecture - https://github.com/kukuu/algorithms/blob/master/system-design-architecture.md

6. Managing RESTful API calls with REACT and REDUX - https://github.com/kukuu/algorithms/tree/master/algorithms/react 

7. NX - https://github.com/not-too-obvious/mobile

## Features of RESTful Architecture:

```
i. Stateless: Meaning the client data is not stored on the server, the session is stored
client-side (typically in session storage).

ii. Client<->Server: There is a separation of concerns between the front-end (client) and
the back-end (server). They operate independently of each other and both are replaceable.

iii. Cache: Data from the server can be cached on the client, which can improve performance speed.


iv. URL Composition: We use a standardized approach to the composition of base URLs.

For example, a GET request to /cities, should yield all the cities in the database,
whereas a GET request to /cities/seattle would render the city with an ID of seattle. 

v. Similarly, REST utilizes standard methods like GET, PUT, DELETE and POST to perform actions.
Which we’ll take a look at in the next section!

So we can define a RESTful API as one that is stateless, it separates concerns between 
client-server, it allows caching of data client-side and it utilizes standardized 
base URLs and methods to perform the actions required to manipulate, add or delete data.

```
## FEATURES, LIMITATIONS, PROS AND CONS

![Market Leaders](https://github.com/kukuu/react-native-ChatApp/blob/master/handshaking/React-Native-vs-Flutter-vs-Ionic.jpg)

https://acodez.in/react-native-features/

# PWA 

https://github.com/kukuu/PWA
