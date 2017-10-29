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
import { AsyncStorage  } from 'react-native';

import MapView from 'react-native-maps';
import CameraStyles from '../styles/MappStyles';

export default class Mapp extends Component {

	_getMarkers(){

		AsyncStorage.getItem('markers').then( (ms) => {
			ms = JSON.parse(ms);

			if(ms == null)ms = [];
			this.setState({markers: ms});
		} );
	}

	constructor(props) {
	    super(props);
	    
	    this.state = {
	    	coords: 'hola',
	    	latitude: 0,
	    	longitude: 0,
	    	error: '',
	    	markers: []
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

	    this._getMarkers();
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
				{this.state.markers.map( (marker,i) => {
					return  <MapView.Marker
						key={i}
			    		coordinate={ marker }
			    		onPress={ (e) => this.showPicture(i) }
			    	/> 
				})}
				</MapView>
			</View>
		);
	}

	showPicture(i){
		const { navigate } = this.props.navigation;
		AsyncStorage.getItem('paths').then( (ps) => {
			ps = JSON.parse(ps);

			if(ps != null){
				let path = ps[i];
				navigate('ImgView',{path: path});
			}
		} );
	}
}