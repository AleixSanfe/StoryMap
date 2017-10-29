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
import RNFetchBlob from 'react-native-fetch-blob'

export default class ImgView extends Component {

	constructor(props) {
	    super(props);
	    
	    this.state = {
	    	path: this.props.navigation.state.params.path,
	    	info: false
	    };
	}

	render() {
		const { navigate } = this.props.navigation;
		return (
			<View style={{flex: 1,backgroundColor: 'black'}}>
		        <PhotoView
				 	source={{uri: ''+this.state.path+''}}
					minimumZoomScale={1}
					maximumZoomScale={3}
					androidScaleType="center"
					style={{width: '100%',height: '100%',flex: 1}}
					//onTap={ this.showInfo.bind(this) }
					/>
				{/*<View
					style={{width: '100%',height: this.state.info ? '100%' : 0,position: 'absolute',top: 0,left: 0,backgroundColor:'rgba(0,0,0,0)'}}
				>
					<TouchableHighlight 
						style={{flex: 1,width: '100%',height: '100%'}}
						onPress={ this.showInfo.bind(this) } >

						<View style={{flex: 1,width: '100%',height: '100%'}}>
							<View style={{flex: 5,backgroundColor: 'black'}}>
								<Text style={{color: 'white'}}>QWEweifgsnijksdnfizjkvbzn</Text>
							</View>

							<View style={{flex: 90,backgroundColor: 'rgba(0,0,0,0)'}}></View>

							<View style={{flex: 5,backgroundColor: 'black'}}></View>
						</View>

					</TouchableHighlight>
				</View>*/}
			</View>
		);
	}

	showInfo(){
		let info = this.state.info;
		this.setState({info: !info});
	}
}