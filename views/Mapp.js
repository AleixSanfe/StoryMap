/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
	Text,
	View
} from 'react-native';

import MapView from 'react-native-maps';
import CameraStyles from '../styles/MappStyles';

export default class Mapp extends Component {

	constructor(props) {
	    super(props);
	    
	    this.state = {
	    	coords: 'hola',
	    	latitude: 0,
	    	longitude: 0,
	    	error: ''
	    };

	    navigator.geolocation.getCurrentPosition(
	    (position) => {
	        this.setState({
	        	latitude: position.coords.latitude,
	        	longitude: position.coords.longitude,
	        	error: null,
	        });
	    },(e) => {
	    	console.warn(e);
	    });
	  }

	onRegionChange(region) {
		
		let lat = region.latitude;
		let lng = region.longitude;

		this.setState({latitude: lat,longitude: lng});
	}


	render() {
		const { navigate } = this.props.navigation;
		return (
			<View style={{flex: 1}}>
				<MapView
					style={{flex: 5}}
				    initialRegion={{
				    	latitude: this.state.latitude,
				    	longitude: this.state.longitude,
				    	latitudeDelta: 0.0922,
				    	longitudeDelta: 0.0421
				    }}
				    onRegionChange={this.onRegionChange.bind(this)}
				>
				</MapView>
			</View>
		);
	}
}