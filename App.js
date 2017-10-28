/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
	Platform,
	Text,
	View
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import Camera from 'react-native-camera';
import CameraStyles from './styles/CameraStyles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Mapp from './views/Mapp';

const instructions = Platform.select({
	ios: 'Press Cmd+R to reload,\n' +
		'Cmd+D or shake for dev menu',
	android: 'Double tap R on your keyboard to reload,\n' +
		'Shake or press menu button for dev menu',
});

class App extends Component<{}> {

	constructor(props) {
	    super(props);
	    
	    this.state = {
	    	'flash_state': true
	    };
	  }


	render() {
		const { navigate } = this.props.navigation;
		return (
			<View style={CameraStyles.container}>
				<Camera
					ref={(cam) => { this.camera = cam; }}
					style={CameraStyles.preview}
					aspect={Camera.constants.Aspect.fill}
					flashMode={this.state.flash_state ? Camera.constants.FlashMode.on : Camera.constants.FlashMode.off}
					type={Camera.constants.Type.front}>

					<View style={{flex: 7.5,flexDirection: 'row',backgroundColor: 'rgba(0,0,0,0.5)'}}>

						<View style={{flex:20,alignItems: 'center',justifyContent: 'center'}}>
							{(() => {
						        return this.state.flash_state ? 
						        	<Icon name="flash" size={30} color="#FFF" onPress={this.changeFlashState.bind(this)}/> : 
						        	<Icon name="flash-off" size={30} color="#FFF" onPress={this.changeFlashState.bind(this)}/>;
						     })()}
						</View>

						<View style={{flex:60,alignItems: 'center',justifyContent: 'center'}}></View>

						<View style={{flex:20,alignItems: 'center',justifyContent: 'center'}}>
							<Icon name="rotate-3d" size={30} color="#FFF" />
						</View>

					</View>

					<View style={{flex: 77.5}}></View>

					<View style={{flex: 15,flexDirection: 'row',backgroundColor: 'rgba(0,0,0,0.5)'}}>

						<View style={{flex:30,alignItems: 'center',justifyContent: 'center'}}>
							<Icon name="image" size={50} color="#FFF" />
						</View>

						<View style={{flex:40,alignItems: 'center',justifyContent: 'center'}}>
							<Icon name="checkbox-blank-circle" size={70} color="#FFF" onPress={this.takePicture.bind(this)} />
						</View>

						<View style={{flex:30,alignItems: 'center',justifyContent: 'center'}}>
							<Icon name="google-maps" size={50} color="#FFF" onPress={() => navigate('Mapp')} />
						</View>

					</View>
					
				</Camera>
			</View>
		);
	}

	changeFlashState(){
		let fs = this.state.flash_state;
		this.setState({flash_state: !fs});
	}

	takePicture() {
		const options = {};
		//options.location = ...
		this.camera.capture({metadata: options})
			.then((data) => console.log(data))
			.catch(err => console.error(err));
	}
}

export default AppNavigator = StackNavigator({
  App: { screen: App, navigationOptions: { header: null } },
  Mapp: { screen: Mapp, navigationOptions: { header: null } },
});