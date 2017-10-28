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

export default class Mapp extends Component {

	constructor(props) {
	    super(props);
	    
	    this.state = {};
	  }


	render() {
		const { navigate } = this.props.navigation;
		return (
			<View>
				<Text onPress={() => navigate('App')}>QWERTYUIOP</Text>
			</View>
		);
	}
}