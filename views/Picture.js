/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
	Text,
	View,
	Image
} from 'react-native';
import { AsyncStorage  } from 'react-native';

export default class Mapp extends Component {

	constructor(props) {
	    super(props);
	    
	    this.state = {
	    	path: this.props.navigation.state.params.path
	    };
	}

	render() {
		const { navigate } = this.props.navigation;
		return (
			<View style={{flex: 1}}>
				<Image
					style={{width: '100%',height: '100%',flex: 1}}
		          source={{uri:''+this.state.path+''}}
		        />
			</View>
		);
	}
}