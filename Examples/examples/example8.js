import React, { Component } from 'react';
import { StyleSheet, Image, View } from 'react-native';

export default class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Image source={require('./assets/jsLogo.png')} style={styles.box2} />
				<Image source={require('./assets/jsLogo.png')} style={styles.box3} />
				<Image source={require('./assets/jsLogo.png')} style={styles.box1} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'pink'
	},
	box2: {
		width: 200,
		height: 200,
		backgroundColor: 'green'
	},
	box3: {
		width: 100,
		height: 100,
		backgroundColor: 'green'
	},
	box1: {
		width: 50,
		height: 50,
		backgroundColor: 'green'
	}
});
