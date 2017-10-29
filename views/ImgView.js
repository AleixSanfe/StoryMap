/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
	Text,
	View,
	Image,
	Button,
	TouchableHighlight
} from 'react-native';
import { AsyncStorage  } from 'react-native';
import PhotoView from 'react-native-photo-view';
import RNFetchBlob from 'react-native-fetch-blob';
import Swiper from 'react-native-swiper';

export default class ImgView extends Component {

	constructor(props) {
	    super(props);

	    this.state = {
	    	path: this.props.navigation.state.params.paths[0],
	    	info: false
	    };
	}

	render() {
		const { navigate } = this.props.navigation;
		return (
			<View style={{flex: 1,backgroundColor: 'black'}}>
				<Swiper showsButtons={true} onScrollBeginDrag={(n) => null} >
		        { this.props.navigation.state.params.paths.map((p,k) => {
		        	return ( <View key={k} style={{flex: 1,width: '100%',height: '100%', justifyContent: 'center', alignItems: 'center'}}>
						<Image
						 	source={{uri: ''+p+''}}
							style={{width: '100%',height: '100%',flex: 1}}
						/>
					</View> )
				}) }
		        </Swiper>
			</View>
		);
	}

	showInfo(){
		let info = this.state.info;
		this.setState({info: !info});
	}
}